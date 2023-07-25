import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  username: "",
  transaction: [],
};

const TransactionSlice = createSlice({
  name: "transaction",
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transaction = (action.payload.expenses)
      state.username = (action.payload.username)
    },

    clearStore: (state, action) => {
      state.transaction = []
    },

    addTransactionlocally: (state, action) => {
      state.transaction = [...state.transaction, action.payload]
    },

    removeTransactionlocally: (state, action) => {
      state.transaction = state.transaction.filter(expense => {
        return expense._id !== action.payload
      })
    }
  },
});


export default TransactionSlice.reducer;
export const { addTransaction, clearStore, addTransactionlocally, removeTransactionlocally } = TransactionSlice.actions;

