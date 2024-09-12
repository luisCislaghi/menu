import React from "react";
import { AnswareNode, QuestionNode } from "./types";
import Answare from "./answare";

const Question: React.FC<{ data: QuestionNode }> = ({ data }) => {
  return (
    <div className="flex-1">
      <h1 className="text-center  p-4">{data.value}</h1>
      <div className="flex justify-evenly align-middle gap-4 p-4">
        {data.children.map((child: AnswareNode) => (
          <Answare node={child} />
        ))}
      </div>
    </div>
  );
};

export default Question;
