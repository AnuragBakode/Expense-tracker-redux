import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addTransactionlocally } from "../redux/TransactionSlice";
import "../App.css";
import { toast } from "react-toastify";

const AddTransaction = ({ transactions }) => {
  const [desc, setdesc] = useState("");
  const [amount, setamount] = useState(0);
  const [date, setDate] = useState(null);

  const dispatch = useDispatch();

  const handleExpenseSubmission = (e) => {
    e.preventDefault();
    const newTransaction = {
      description: desc,
      amount: amount,
      date: date,
    };

    console.log(newTransaction);

    axios
      .post("https://expensetrackerbackend-omqf.onrender.com/expense", newTransaction, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        toast.success("Expense added successfully")
      })
      .catch((err) => {
        console.log(err);
      });

    const currentMonth = new Date().getMonth()
    const transactionMonth = new Date(date).getMonth()

    if (currentMonth === transactionMonth) {
      // dispatch(addTransaction(newTransaction));
      dispatch(addTransactionlocally(newTransaction))
    }

    setdesc("");
    setamount(0);
    setDate(null);
  };

  return (
    <div>
      <h2 className="add-transaction-title text-2xl font-medium border-b-2 mb-2">
        Add a new Transaction
      </h2>
      <form onSubmit={handleExpenseSubmission}>
        <div>
          <input
            type="text"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            placeholder="Enter the description"
          />
        </div>
        <div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            placeholder="Enter the amount"
          />
        </div>
        <div>
          <input
            type="date"
            value={date}
            min={'2000-01-01'}
            max={'2025-12-31'}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Enter the date"
          />

        </div>
        <button className="bg-gradient-to-r from-[#b42bc3] to-[#ff00c6] rounded-md mt-6">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
