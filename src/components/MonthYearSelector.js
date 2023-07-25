import React, { useState } from "react";
import axios from "axios";
import { clearStore, addTransaction } from "../redux/TransactionSlice";
import { useDispatch } from "react-redux";

const MonthYearSelector = () => {
  const dispatch = useDispatch();

  // Initialize state for selected month and year
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // Months and years options for dropdowns
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = [2020, 2021, 2022, 2023, 2024, 2025];

  // Handle changes in month and year selection
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const applyFilters = () => {
    const monthIndex = months.indexOf(selectedMonth);
    console.log(monthIndex, selectedYear);

    axios
      .get(
        `https://expensetrackerbackend-omqf.onrender.com/expense?month=${monthIndex}&year=${selectedYear}`,
        {
          withCredentials: true,
        }
      )
      .then((data) => {
        dispatch(clearStore());
        dispatch(
          addTransaction({
            expenses: data.data.expenses,
            username: data.data.user.name,
          })
        );
      });
  };

  return (
    <div className="container">
      <div className="inputs">
        <div>
          {/* <label htmlFor="month">Select Month:</label> */}
          <select id="month" value={selectedMonth} onChange={handleMonthChange}>
            <option value="">Select Month</option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <div className="selector">
          {/* <label htmlFor="year">Select Year:</label> */}
          <select id="year" value={selectedYear} onChange={handleYearChange}>
            <option value="">Select Year</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        className="bg-gradient-to-r from-[#b42bc3] to-[#ff00c6] rounded-md mb-5"
        onClick={applyFilters}
      >
        Apply filters
      </button>
    </div>
  );
};

export default MonthYearSelector;
