import { useState } from "react";

export default function useForm() {
  const [values, setValues] = useState({
    account: "",
    password: "",
    rememberMe: false,
  });
    const errors = {};


  const handleChange = (e) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
     console.table(values);
  };
  const validation = (values) =>{
      const errors = {};
      if (!values.account) {
        errors.account = "請輸入帳號";
      } else if (!values.password) {
        errors.password = "請輸入密碼";
      }
      return errors;
    }

  return { handleChange, handleSubmit, values, errors };
}