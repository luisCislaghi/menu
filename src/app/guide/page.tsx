"use client";

import React from "react";
import { AnswareNode, QuestionNode, ResultCount, tree } from "./types";
import Question from "./question";
import { setHistory, setQuestion, setResult } from "../../lib/guide-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const Guide: React.FC = () => {
  const { result, question, history } = useAppSelector((state) => state.guide);
  const dispatch = useAppDispatch();

  const renderQuestion = (node: QuestionNode) => {
    return <Question data={node} />;
  };

  const handleBack = () => {
    if (history.length === 1) {
      dispatch(setQuestion(tree));
      setResult({});
      return;
    }
    if (history.length > 0) {
      const newHistory = [...history];
      const lastNode = newHistory.pop();
      dispatch(setHistory(newHistory));
      dispatch(setQuestion(newHistory[newHistory.length - 1]?.children));

      if (lastNode?.recipes !== undefined) {
        const newResult = { ...result };
        lastNode.recipes.forEach((recipe) => {
          if (newResult[recipe]) {
            newResult[recipe] -= 1;
          }
        });
        dispatch(setResult(newResult));
      }
    }
  };

  return (
    <div>
      {!question
        ? Object.keys(result).map((key) => (
            <>
              {key} - {result[key]}
              <br />
            </>
          ))
        : renderQuestion(question)}
      {(history.length > 0 || !question) && (
        <button onClick={handleBack}>Back</button>
      )}
    </div>
  );
};

export default Guide;
