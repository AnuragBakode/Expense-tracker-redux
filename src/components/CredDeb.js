import React from "react";
import "../App.css";

const CredDeb = ({ transactions }) => {
  const amount = transactions.map((transaction) => Number(transaction.amount));

  let debited = 0;
  let credited = 0;

  amount.map((am) => (am > 0 ? (credited += am) : (debited += Math.abs(am))));

  return (
    <div className="cred-deb">
      <div className="credited text-xl font-semibold">
        <h3>Credited</h3>
        <h4>$ {credited}</h4>
      </div>
      <div className="debited text-xl font-semibold">
        <h3>Debited</h3>
        <h4>$ {debited}</h4>
      </div>
    </div>
  );
};

export default CredDeb;
