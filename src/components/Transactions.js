import React from "react";
import { Transaction } from "./Transaction";

export const Transactions = ({ transactions }) => {
  return (
    <div>
      <h2 className="transaction-header">Transactions</h2>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};
