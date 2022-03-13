import React, { useState } from "react";
import TodoInput from "../components/molecules/TodoInput";
import styled from "styled-components";
import useForm from "../hooks/useForm";

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const initialForm = { todo: "" };

function MainPage() {
  const [todoList, setTodoList] = useState<string[]>([]);

  const [formData, onChange, reset] = useForm(initialForm);

  const onClick = () => {
    setTodoList([...todoList, formData.todo!]);
    reset();
  };

  const formInputs = {
    todo: {
      labelText: "TodoList",
      inputName: "todo",
      value: formData.todo || "",
      onChange
    }
  };

  const formButton = {
    theme: "primary",
    text: "등록",
    onClick
  };

  return (
    <SContainer>
      <TodoInput formInputs={formInputs} formButton={formButton} />
      {todoList.map((todo, id) => (
        <div key={id}>{todo}</div>
      ))}
    </SContainer>
  );
}

export default MainPage;
