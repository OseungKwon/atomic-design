import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import FormInput from "./";

const props = {
  labelText: "이메일",
  inputName: "email",
  value: "00osos@naver.com"
};

describe("form 내부 요소 중", () => {
  it("label 확인하기", () => {
    render(<FormInput {...props} />);
    screen.getByText(/이메일/i);
    const inputElement = screen.getByLabelText("이메일");
    expect(inputElement).toBeInTheDocument();
  });

  it("input 확인하기", () => {
    render(<FormInput {...props} />);
    screen.getByText(/이메일/i);
    const inputElement = screen.getByLabelText("이메일");
    expect(inputElement).toHaveAttribute("value", "00osos@naver.com");
  });
});
