import React, { useState } from "react";
import SignUpForm from "./components/organisms/SignUpForm";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((preState) => ({ ...preState, [name]: value }));
  };

  const onClick = () => {
    console.log(formData);
  };

  const formInputs = {
    email: {
      labelText: "이메일",
      inputName: "email",
      value: formData.email || "",
      onChange
    },
    password: {
      labelText: "비밀번호",
      inputName: "password",
      value: formData.password || "",
      onChange
    }
  };

  const formButton = {
    theme: "primary",
    text: "제출",
    onClick
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      }}
    >
      <SignUpForm formInputs={formInputs} formButton={formButton} />
    </div>
  );
}

export default App;
