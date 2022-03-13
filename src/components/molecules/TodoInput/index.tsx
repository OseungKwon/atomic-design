import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import { Props as inputProps } from "../../molecules/FormInput";
import { Props as buttonProps } from "../../atoms/Button";

export interface Props {
  formInputs: { todo: inputProps };
  formButton: buttonProps;
}

const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  > * {
    margin: 0.5rem;
    padding: 0.5rem;
  }
`;

function TodoInput({ formInputs, formButton }: Props) {
  return (
    <SContainer>
      <Input {...formInputs.todo} type="text" />
      <Button {...formButton} />
    </SContainer>
  );
}

export default TodoInput;
