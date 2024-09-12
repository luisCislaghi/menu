import React from "react";
import { AnswareNode, QuestionNode } from "./types";
import { setHistory, setQuestion, setResult } from "../../lib/guide-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const Answare: React.FC<{ node: AnswareNode }> = ({ node }) => {
  const { result, question, history } = useAppSelector((state) => state.guide);
  const dispatch = useAppDispatch();

  const handleAnsware = (node: AnswareNode) => {
    if (node.recipes !== undefined) {
      addResult(node.recipes);
    }
    dispatch(setQuestion(node.children));
    dispatch(setHistory([...history, node]));
  };

  const addResult = (recipes: string[]) => {
    const newResult = { ...result };
    recipes.forEach((recipe) => {
      if (newResult[recipe]) {
        newResult[recipe] += 1;
      } else {
        newResult[recipe] = 1;
      }
    });
    dispatch(setResult(newResult));
  };

  return (
    <button
      key={node.value}
      className="grow p-4 border rounded"
      onClick={() => handleAnsware(node)}
    >
      {node.value}
    </button>
  );
};

export default Answare;
