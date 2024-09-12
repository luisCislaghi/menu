import React from "react";
import { ResultCount } from "./types";
import { useAppSelector } from "@/lib/hooks";

const Result: React.FC = () => {
  const { result } = useAppSelector((state) => state.guide);

  let sorted: [string, number][] = [];
  for (var r in result) {
    if (result[r] > 0) sorted.push([r, result[r]]);
  }

  sorted.sort((a, b) => b[1] - a[1]);

  let top = sorted.length === 1 ? sorted.splice(0, 1) : undefined;

  if (sorted.length > 1 && sorted[0][1] > sorted[1][1]) {
    top = sorted.splice(0, 1);
  }

  let top2 = undefined;

  if (sorted.length >= 2) {
    top2 = sorted.splice(0, 2);
  }

  return (
    <>
      {!!top && (
        <div className="p-6 bg-cafe-400">
          {top[0]} - {top[1]}
        </div>
      )}
      {!top ? (
        <h2>Você vai gostar desses</h2>
      ) : (
        <h2>Você também pode gostar desses</h2>
      )}
      {top2?.map((e) => (
        <p className="text-bar-tigers-eye">
          {e[0]} - {e[1]}
          <br />
        </p>
      ))}
      {sorted.map((e) => (
        <>
          {e[0]} - {e[1]}
          <br />
        </>
      ))}
    </>
  );
};

export default Result;
