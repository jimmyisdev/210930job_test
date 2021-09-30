import { useState } from "react";

export default function useFrom(){
    const [values, setValues] = useState({
        account: "",
        password: "",
        rememberMe: false,
    });
    const  handleChange = e =>{
        setValues((state) => ({ ...state, [e.target.name]: e.target.value }));

    }
    const handleSubmit = e =>{
        e.preventDefault()
    }
    let errors;


    return { handleChange, handleSubmit, values, errors }
}