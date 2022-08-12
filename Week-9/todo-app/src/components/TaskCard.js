import React from "react";

const TaskCard = ({
  task,
  deleteATask,
  changeTaskToDone,
  changeTaskToProgress,
}) => {
  return (
    <div
      className={`mv24 ${
        task.status === "pending"
          ? "yellowGradientBg"
          : task.status === "done"
          ? "greenGradient"
          : "blueGradientBg"
      } br5 paddingHorizontal`}
    >
      <div className="flex flexRow alignItemsCenter justifyContentSpaceBet">
        <h1
          className={`f18 poppinsBold ${
            task.status === "done" ? "strikeThrough" : ""
          }`}
        >
          {task.title}
        </h1>
        <div className="flex flexRow alignItemsCenter justifyContentCenter">
          {task.status === "pending" ? (
            <div
              onClick={() => changeTaskToProgress(task.id)}
              className="paddingHorizontal cursor"
            >
              <p>Start</p>
            </div>
          ) : task.status === "progress" ? (
            <div
              className="paddingHorizontal cursor"
              onClick={() => changeTaskToDone(task.id)}
            >
              <p>Mark Done</p>
            </div>
          ) : null}
          <div className="cursor" onClick={() => deleteATask(task.id)}>
            <p>Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
