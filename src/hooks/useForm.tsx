import React, { useState } from "react";

interface InputP {
  todo?: string;
  email?: string;
  password?: string;
}

function useForm(
  initialForm: InputP
): [InputP, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void] {
  const [formData, setFormData] = useState<InputP>(initialForm);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((preState: any) => ({ ...preState, [name]: value }));
  };

  const reset = () => {
    setFormData(initialForm);
  };

  return [formData, onChange, reset];
}
export default useForm;
