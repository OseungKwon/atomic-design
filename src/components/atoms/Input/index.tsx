import React from "react";

import styled, { css } from "styled-components";

const Styled = css`
  outline: none;
  width: 100%;
  border: 1px solid #333;
  border-radius: 7px;
  padding: 0.5rem;
`;

const SInput = styled.input`
  ${Styled}
`;

type Props = {
  inputName: string;
  value?: string | number;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ inputName, ...props }: Props): React.ReactElement {
  return <SInput name={inputName} {...props} value={props.value} />;
}
export default Input;
