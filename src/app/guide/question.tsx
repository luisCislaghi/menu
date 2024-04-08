import React from "react";
import { AnswareNode, QuestionNode } from "./types";
import Answare from "./answare";

const Question: React.FC<{ data: QuestionNode }> = ({ data }) => {
  const renderAnswer = (node: AnswareNode) => {
    return <Answare node={node} />;
  };

  return (
    <div>
      <h1 className="bg-bar-moss">{data.value}</h1>
      {data.children.map((child: AnswareNode) => {
        return renderAnswer(child);
      })}
    </div>
  );
};

export default Question;
