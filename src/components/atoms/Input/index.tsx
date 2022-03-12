import React from "react";

import styled, { css } from "styled-components";

const Styled = css`
  outline: none;
  width: 90%;
  border: 1px solid #333;
  border-radius: 7px;
  padding: 0.3rem;
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
  return <SInput name={inputName} {...props} />;
}
export default Input;
