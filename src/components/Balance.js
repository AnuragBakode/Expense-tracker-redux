import React from "react";

const Balance = ({ transactions }) => {
  const amount = transactions.map((transaction) => parseInt(transaction.amount));
  const total = amount.reduce((acc, am) => acc + am, 0);
  return (
    <div className="current-balance bg-gradient-to-r from-[#b42bc3] to-[#ff00c6]">
      <h1 className="text-xl mt-2">Current Balance</h1>
      <h1 className="text-3xl">$ {total}</h1>
    </div>
  );
};

export default Balance;
