import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [taskInput, setTaskInput] = useState("");
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const [editIndexPending, setEditIndexPending] = useState(-1);
  const [editTextPending, setEditTextPending] = useState("");

  const [editIndexCom, setEditIndexCom] = useState(-1);
  const [editTextCom, setEditTextCom] = useState("");

  const handleAddTask = () => {
    console.log("clicked")
    console.log(pendingTasks)
    if (!taskInput.trim()) return;
    setPendingTasks((prev) => [...prev, taskInput]);
    setTaskInput("");
  };

  //pending Tasks
  const pendingHandleDelete = (idx) => {
    console.log("penDel")
    setPendingTasks(prev => prev.filter((_, i) => i !== idx))
  }

  const pendingHandleMovetoCom = (idx) => {
    console.log("penMovetoCom")
    const taskToMove = pendingTasks[idx];
    setPendingTasks(prev => prev.filter((_, i)=> i !== idx));
    setCompletedTasks(prev => [taskToMove, ...prev]); //prepend
  }

  const pendingHandleEdit = (idx) => {
    console.log("penEdit")
    //track which task is being edited
    if(editIndexPending === idx){
      setPendingTasks((prev)=>{
        const newTasks = [...prev];
        newTasks[idx] = editTextPending;
        return newTasks
      });

      setEditIndexPending(-1); //turn off "edit"
      setEditTextPending("") //clear text
    } else {
      setEditIndexPending(idx);
      setEditTextPending(pendingTasks[idx])
    }
    
  }

  //completed Tasks
  const completedHandleDelete = (idx) => {
    setCompletedTasks((prev) => prev.filter((_, i) => i !== idx));
  }

  const completedHandleEdit = (idx) => {
    if(editIndexCom === idx){
      setCompletedTasks(prev=>{
        const newTasks = [...prev];
        newTasks[idx] = editTextPending;
        return newTasks;
      })

      setEditIndexCom(-1);
      setEditTextCom("")
    } else {
      setEditIndexCom(idx);
      setEditTextPending(completedTasks[idx])
    }

  }

  const completedHandleMoveToPending = (idx) => {
    const taskToMove = completedTasks[idx];
    setCompletedTasks((prev) => prev.filter((_, i) => i !== idx));
    setPendingTasks((prev) => [taskToMove, ...prev]);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      ></input>
      <button onClick={handleAddTask}>Submit</button>
      <div className="columns-container">
        <div>
          <p>Pending Tasks</p>
          <ul>
            {pendingTasks.map((task, index) => {
              const isEditing = editIndexPending === index;
              return <li key={index}>
                {isEditing ? (
                  <input
                    value={editTextPending}
                    onChange={(e)=>setEditTextPending(e.target.value)}
                  />
                ) : (
                  <span>{task}</span>
                )}   
              <button onClick={() => pendingHandleEdit(index)}>{isEditing?"Save":"Edit"}</button>
              <button onClick={() => pendingHandleDelete(index)}>Del</button>
              <button onClick={() => pendingHandleMovetoCom(index)}>MoveToCom</button>
              </li>
            })}
          </ul>
        </div>
        <div>
          <p>Completed Tasks</p>
          <ul>
            {completedTasks.map((task, index) => {
              const isComEditing = editIndexCom === index
              return <li key={index}>
                {isComEditing ? (
                  <input
                    value={editTextPending}
                    onChange={(e)=>{setEditTextPending(e.target.value)}}
                  />
                ) : (
                  <span>{task}</span>
                )}
                
                  <button onClick={() => completedHandleMoveToPending(index)}>Move to Pending</button>
                  <button onClick={() => completedHandleEdit(index)}>{isComEditing ? "Save" : "Edit"}</button>
                  <button onClick={() => completedHandleDelete(index)}>Delete</button>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
