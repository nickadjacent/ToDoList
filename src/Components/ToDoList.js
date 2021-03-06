import React, { useState } from "react";
import styled from "styled-components";

const TaskList = styled.div`
  padding: 16px;
  border: 1px solid black;
  border-radius: 8px;
  outline-width: 0;
  font-size: 1rem;
  display: inline-block;
  width: 50vw;
  margin: 4px;
`;

const Ul = styled.ul`
  list-style-type: none;
`;

const ToDoText = styled.input`
  padding: 16px;
  border: 1px solid rgb(240, 240, 240);
  border-radius: 8px;
  outline-width: 0;
  font-size: 1rem;
  display: inline-block;
  width: 50vw;
  margin-right: 4px;
`;

const InputButton = styled.input`
  padding: 16px;
  border: 0.75px solid rgb(240, 240, 240);
  border-radius: 8px;
  outline-width: 0;
  font-size: 1rem;
  font-weight: bolder;
  display: inline-block;
  margin-left: 4px;
  background-color: rgb(75, 75, 75);
  color: white;
`;

const ToDoList = props => {
  const [newToDoTask, setNewToDoTask] = useState("");

  const [toDos, setToDos] = useState([]);

  const onChangeHandler = event => {
    setNewToDoTask(event.target.value);
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    const newToDoObject = { toDoTask: newToDoTask, isComplete: false };
    setToDos([...toDos, newToDoObject]);
    setNewToDoTask("");
    console.log(toDos);
    console.log(newToDoTask);
  };

  const checkBoxHandler = (evt, i) => {
    const selectedToDo = toDos[i];
    const oppositeIsComplete = !selectedToDo.isComplete;
    selectedToDo.isComplete = oppositeIsComplete;
    setToDos([...toDos]);
  };

  const onDeleteHandler = deleteIdx => {
    const newToDoList = toDos.filter((toDos, i) => deleteIdx !== i);
    setToDos(newToDoList);
  };

  return (
    <div>
      <section>
        <Ul>
          <li>
            {toDos.map((task, i) => (
              <TaskList>
                {task.toDoTask}
                {" - "}
                {task.isComplete}
                <input
                  onClick={evt => checkBoxHandler(evt, i)}
                  type="checkbox"
                  name="isComplete"
                />
                {task.isComplete === true ? (
                  <button onClick={() => onDeleteHandler(i)}>Delete</button>
                ) : (
                  ""
                )}
              </TaskList>
            ))}
          </li>
        </Ul>
      </section>
      <section>
        <form onSubmit={onSubmitHandler}>
          <ToDoText
            onChange={onChangeHandler}
            type="text"
            name="toDoTask"
            value={newToDoTask}
          />
          <InputButton type="submit" />
        </form>
      </section>
    </div>
  );
};

export default ToDoList;
