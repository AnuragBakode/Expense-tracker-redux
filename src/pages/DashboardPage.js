import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { regenerateTokens } from '../lib/regenerateTokens'
import { useNavigate } from 'react-router-dom'
import { Transactions } from "../components/Transactions";
import AddTransaction from "../components/AddTransaction";
import Balance from "../components/Balance";
import CredDeb from "../components/CredDeb";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction, clearStore } from "../redux/TransactionSlice";
import { toast } from "react-toastify";

export const DashboardPage = () => {
  const navigate = useNavigate();
  const [update, setUpdate] = useState(false);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const dispatch = useDispatch();

  const username = useSelector((state) => state.transaction.username);

  useEffect(() => {
    axios
      .get(
        `https://expensetrackerbackend-omqf.onrender.com/expense?month=${currentMonth}&year=${currentYear}`,
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
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.error.message === "Unauthorized") {
          navigate("/login");
        }
        if (err.response.data.error.message === "jwt expired") {
          console.log(err.response.data.error.message);
          regenerateTokens()
            .then(setUpdate(!update))
            .catch((err) => {
              console.log(err);
              if (err === "Unauthorized") {
                navigate("/login");
              }
            });
        }
      });
  }, [update]);

  const handleLogout = () => {
    axios
      .delete(`https://expensetrackerbackend-omqf.onrender.com/auth/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        navigate("/login");
        toast.success("Logout Successfully");
      })
      .catch((err) => {
        toast.error("Something went wrong you can try refreshing the page");
        console.log(err);
      });
  };

  const transactions = useSelector((state) => state.transaction.transaction);
  console.log(transactions);
  return (
    <div className="App">
      <div className="data">
        <div className="welcome-header flex justify-between items-baseline">
          <h1 className="text-4xl font-bold mb-6 welcome-msg ">
            Welcome {username}
          </h1>
          <button
            className="text-md bg-gradient-to-r from-[#b42bc3] to-[#ff00c6] rounded-md mt-6"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        <Balance transactions={transactions} />
        <CredDeb transactions={transactions} />
        <AddTransaction transactions={transactions} />
      </div>

      <div className="transactions-list">
        <Transactions transactions={transactions} />
      </div>
    </div>
  );
};
