import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type answer = {
  [key: number]: string;
};

interface quizState {
  attended: number[];
  answers: answer;
}

type answerAction = {
  id: number;
  answer: string;
};

type attendedAction = {
  id: number;
};

type answers = answer;

const initialState: quizState = {
  attended: [],
  answers: {},
};

export const quizSlice = createSlice({
  name: "quizSlice",
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<answerAction>) => {
      state.answers[action.payload.id] = action.payload.answer;
    },
    setAttended: (state, action: PayloadAction<attendedAction>) => {
      if (state.attended.includes(action.payload.id)) {
        return state;
      } else {
        state.attended.push(action.payload.id);
      }
    },
    clear: (state) => {
      state = initialState;
    },
  },
});

export default quizSlice.reducer;
export const { setAnswer, setAttended, clear } = quizSlice.actions;
