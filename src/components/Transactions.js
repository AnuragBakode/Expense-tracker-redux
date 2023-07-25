import React from "react";
import { Transaction } from "./Transaction";
import MonthYearSelector from "./MonthYearSelector";

export const Transactions = ({ transactions }) => {
  return (
    <div>
      <MonthYearSelector />
      <h2 className="transaction-header">Transactions</h2>
      <div className="transactions-container">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};
