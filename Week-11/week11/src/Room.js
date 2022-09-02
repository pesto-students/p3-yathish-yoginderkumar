import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { toggleLight } from "./store";

export default function Room() {
  const dispatch = useDispatch();
  const isLightOn = useSelector((state) => state.isLightOn);
  const lightedness = isLightOn ? "lit" : "dark";
  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button
        className="border py-px px-2"
        onClick={() => {
          dispatch(toggleLight());
        }}
      >
        flip
      </button>
    </div>
  );
}
