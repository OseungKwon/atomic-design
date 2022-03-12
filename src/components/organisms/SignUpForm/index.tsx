import React from "react";
import FormInput from "../../molecules/FormInput";
import { Props as inputProps } from "../../molecules/FormInput";
import { Props as buttonProps } from "../../atoms/Button";
import styled, { css } from "styled-components";
import Button from "../../atoms/Button";

const Container = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SButton = styled(Button)`
  margin: 1rem;
`;

type Props = {
  formInputs: {
    email: inputProps;
    password: inputProps;
  };
  formButton: buttonProps;
};

function SignUpForm({ formInputs, formButton }: Props) {
  return (
    <Container>
      <FormInput {...formInputs.email} />
      <FormInput {...formInputs.password} />
      <SButton {...formButton} />
    </Container>
  );
}

export default SignUpForm;
