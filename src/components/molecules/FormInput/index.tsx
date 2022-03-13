import React from "react";
import styled, { css } from "styled-components";
import Input from "../../atoms/Input";

const Styled = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SFormInput = styled.div`
  ${Styled}
`;

const SLabel = styled.label`
  width: 100%;
  padding: 0.4rem 0rem;
`;

export interface Props {
  labelText: string;
  inputName: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormInput({ labelText, ...props }: Props) {
  return (
    <SFormInput>
      <SLabel>
        {labelText}
        <Input
          {...props}
          type={props.inputName === "password" ? "password" : "text"}
        />
      </SLabel>
    </SFormInput>
  );
}

export default FormInput;
