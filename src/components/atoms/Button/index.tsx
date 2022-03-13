import React from "react";
import styled, { css } from "styled-components";

const Styled = css`
  outline: none;
  width: 90%;
  max-width: 10rem;
  border-radius: 7px;
  padding: 0.4rem;

  ${(props) => {
    switch (props.theme) {
      case "primary":
        return css`
          color: #fff;
          background: #0d6efd;
        `;
      case "success":
        return css`
          color: #fff;
          background: #198754;
        `;
    }
  }}
`;

const SButton = styled.button`
  ${Styled}
`;
export interface Props {
  theme: string;
  to?: string;
  href?: string;
  text: string;
  onClick?: () => void;
}

function Button({ ...props }: Props) {
  return <SButton {...props}>{props.text}</SButton>;
}

export default Button;
