import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../redux/TransactionSlice";
import "../App.css";

const AddTransaction = ({ transactions }) => {
  const [desc, setdesc] = useState("");
  const [amount, setamount] = useState(0);

  const dispatch = useDispatch();

  const handleExpenseSubmission = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: transactions[0].id + 1,
      description: desc,
      amount: amount,
    };

    dispatch(addTransaction(newTransaction));

    setdesc("");
    setamount(0);
  };

  return (
    <div>
      <h2 className = "add-transaction-title">Add a new Transaction</h2>
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
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default AddTransaction;
