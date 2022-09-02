import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { addSteps, resetSteps } from "./store";

export default function StepCounter() {
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.steps);
  return (
    <div className={`room`}>
      <p>You've walked {steps} steps today!</p>
      <div className="flex flex-col justify-center items-center  w-1/3">
        <button
          className="bg-indigo-600 text-white px-12 py-3"
          onClick={() => {
            dispatch(addSteps());
          }}
        >
          Add a Step
        </button>
        <button
          className="bg-slate-200 text-black px-12 py-3"
          onClick={() => {
            dispatch(resetSteps());
          }}
        >
          Reset Steps
        </button>
      </div>
    </div>
  );
}
