import React from "react";
import "../App.css";
import { Trash2 } from "lucide-react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeTransactionlocally } from "../redux/TransactionSlice";
import { toast } from "react-toastify";

export const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();

  const handleExpenseDelete = (expenseId) => {
    axios
      .delete(
        `https://expensetrackerbackend-omqf.onrender.com/expense/${expenseId}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response);
        toast.success("Expense deleted successfully");
      })
      .catch((err) => {
        console.log(err);
      });

    dispatch(removeTransactionlocally(expenseId));
  };
  console.log(transaction);
  return (
    <div
      className={`transaction-item ${transaction.amount > 0 ? "green" : "red"}`}
    >
      <div className="details">
        <div>
          <h3>{transaction.description}</h3>
          <p>{transaction.date.substring(0, 10)}</p>
        </div>

        <div className="right flex">
          <h3 className="px-5">$ {transaction.amount}</h3>
          <Trash2
            onClick={() => handleExpenseDelete(transaction._id)}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
