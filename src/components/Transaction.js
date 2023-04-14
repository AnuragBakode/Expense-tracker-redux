import React from "react";
import "../App.css";

export const Transaction = ({ transaction }) => {
  return (
    <div
      className={`transaction-item ${transaction.amount > 0 ? "green" : "red"}`}
    >
      <h3>{transaction.description}</h3>
      <h3>$ {transaction.amount}</h3>
    </div>
  );
};
