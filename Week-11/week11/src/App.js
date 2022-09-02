import React, { useState } from "react";
import { Provider } from "react-redux";

import Room from "./Room";
import { store } from "./store";
import StepCounter from "./StepCounter";

export default function App() {
  const [activeExercise, setActiveExercise] = useState("two");
  return (
    <Provider store={store}>
      <div>
        <div className="flex justify-end px-12">
          <button
            className={`rounded-full px-4 ${
              activeExercise === "one" && "bg-green-500"
            } border`}
            onClick={() => setActiveExercise("one")}
          >
            Exercise One
          </button>
          <div className="px-2" />
          <button
            className={`rounded-full px-4 ${
              activeExercise === "two" && "bg-green-500"
            } border`}
            onClick={() => setActiveExercise("two")}
          >
            Exercise Two
          </button>
        </div>
        {activeExercise === "one" && (
          <div>
            <Room />
          </div>
        )}
        {activeExercise === "two" && (
          <div>
            <StepCounter />
          </div>
        )}
      </div>
    </Provider>
  );
}
