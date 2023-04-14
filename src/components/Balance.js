import React from "react";

const Balance = ({ transactions }) => {
  const amount = transactions.map((transaction) => Number(transaction.amount));
  const total = amount.reduce((acc, am) => acc + am, 0);
  return (
    <div className = "current-balance">
      <h1>Current Balance</h1>
      <h1>$ {total}</h1>
    </div>
  );
};

export default Balance;
