import { createSlice } from "@reduxjs/toolkit";
import {
  AnswareNode,
  QuestionNode,
  ResultCount,
  tree,
} from "../app/guide/types";

const guideSlice = createSlice({
  name: "guide",
  initialState: {
    question: tree,
    result: {},
    history: [],
  } as {
    question?: QuestionNode;
    result: ResultCount;
    history: AnswareNode[];
  },
  reducers: {
    setQuestion(state, action) {
      state.question = action.payload;
    },
    setHistory(state, action) {
      state.history = action.payload;
    },
    setResult(state, action) {
      state.result = action.payload;
    },
  },
});

export const { setQuestion, setHistory, setResult } = guideSlice.actions;
export default guideSlice.reducer;
