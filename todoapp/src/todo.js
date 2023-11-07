import React, { useState } from "react";

export function Todo() {
  const [allTasks, setTask] = useState(["playing", "dancing"]);
  const [currentTask, setCurrentTask] = useState("");

  function collectData(info) {
    setCurrentTask(info.target.value);
    console.log("Current Task:", currentTask);
  }

  function sendData() {
    setTask([...allTasks, currentTask]);
    console.log("All Tasks:", allTasks);
  }

  return (
    <div>
      Enter task: <input type="text" onChange={collectData} />
      <button onClick={sendData}>Add task</button>

      <ul>
        {allTasks.map(function (task, index) {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </div>
  );
}
