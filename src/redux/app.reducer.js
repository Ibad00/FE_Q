import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDataTable: {},
  faq: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUserDataTable: (state, action) => {
      state.userDataTable = action.payload;
    },
    setFaq: (state, action) => {
      state.faq = action.payload;
    },
  },
});

export const { setUserDataTable, setFaq } = appSlice.actions;
export default appSlice;
