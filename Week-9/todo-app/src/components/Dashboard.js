import React, { useEffect, useRef, useState } from "react";
import TaskCard from "./TaskCard";
import "./style.css";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskInput, setNewTaskInput] = useState("");
  const [inputError, setInputError] = useState("");
  const inputRef = useRef(null);

  const validateInput = React.useCallback(() => {
    /^(?![0-9._])(?!.*[0-9._]$)(?!.*\d_)(?!.*_\d)[a-zA-Z0-9_]+$/.test(
      newTaskInput
    )
      ? setInputError(
          `Please enter a valid task title. Eg "Eat Medicine", "Have Lunch", "Drink Water" etc`
        )
      : setInputError("");
  }, [newTaskInput]);
  const onHandleChange = (name, value) => {
    switch (name) {
      case "newTask":
        setNewTaskInput(value);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    if (newTaskInput.length >= 3) {
      validateInput();
    }
  }, [newTaskInput, validateInput]);

  const onEnterPressedOnTaskInput = (e) => {
    if (e.key === "Enter" && newTaskInput.length) {
      if (!newTaskInput.length) {
        return setInputError(
          `Please enter a valid task title. Eg "Eat Medicine", "Have Lunch", "Drink Water" etc`
        );
      }
      onAddClickHandler();
    }
  };
  const onAddClickHandler = () => {
    if (!newTaskInput.length) {
      return setInputError(
        `Please enter a valid task title. Eg "Eat Medicine", "Have Lunch", "Drink Water" etc`
      );
    }
    const taskData = {
      id: tasks.length + 1,
      title: newTaskInput,
      status: "pending",
    };

    setTasks([taskData, ...tasks]);
    setNewTaskInput("");
  };

  const changeTaskToProgress = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, status: "progress" };
        }
        return { ...task };
      })
    );
  };

  const changeTaskToDone = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, status: "done" };
        }
        return { ...task };
      })
    );
  };

  const deleteATask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todoDashboardContainer">
      <div className="flex">
        <input
          ref={inputRef}
          value={newTaskInput}
          onChange={(e) => onHandleChange("newTask", e.target.value)}
          placeholder="Add a new task"
          className="mr24 inputField"
          onKeyDown={(e) => onEnterPressedOnTaskInput(e)}
          style={{ borderColor: inputError.length ? "red" : "" }}
        />
        <button onClick={onAddClickHandler} className="btnAdd">
          Add
        </button>
      </div>
      {inputError.length ? <p style={{ color: "red" }}>{inputError}</p> : null}
      {tasks.length
        ? tasks.map((task, index) => (
            <TaskCard
              key={index}
              task={task}
              deleteATask={deleteATask}
              changeTaskToDone={changeTaskToDone}
              changeTaskToProgress={changeTaskToProgress}
            />
          ))
        : null}
    </div>
  );
};

export default Dashboard;
