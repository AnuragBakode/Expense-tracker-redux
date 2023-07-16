import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transaction: [],
};

const TransactionSlice = createSlice({
  name: "transaction",
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transaction.unshift(action.payload);
    },
  },
});


export default TransactionSlice.reducer;
export const { addTransaction } = TransactionSlice.actions;
