import { configureStore } from "@reduxjs/toolkit";
import Transaction from "./TransactionSlice";

const store = configureStore({
  reducer: {
    transaction: Transaction,
  },
});

export default store;
