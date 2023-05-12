import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type uiState = {
  currentQuestion: number;
};

const initialState: uiState = {
  currentQuestion: 1,
};

export const uiSlice = createSlice({
  name: "uiState",
  initialState,
  reducers: {
    incrementQuestion: (state) => {
      if (state.currentQuestion < 5) {
        state.currentQuestion += 1;
      }
    },
    decrementQuestion: (state) => {
      if (state.currentQuestion > 1) {
        state.currentQuestion -= 1;
      }
    },
  },
});

export const { incrementQuestion, decrementQuestion } = uiSlice.actions;
export default uiSlice.reducer;
