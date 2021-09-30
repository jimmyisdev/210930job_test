import React, { useState } from 'react'
import useFrom from '../func/useForm'


export default function FormAuth() {
  const { handleChange, handleSubmit, values, errors} = useFrom({
    initialValues: { account:"", password:"", rememberMe: false },
    
    validation: (values)=>{
      const errors = {}
      if(!values.account){
        errors.account = "請輸入帳號"
      }else if(!values.password){
        errors.password = "請輸入密碼"
      }
      return errors
    },
    onSubmit: (values) => console.table(values),
  });
  console.log(handleChange, handleSubmit, values, errors);

  
    return (
      <section>
        <div className="box_title">
          <h1>Form Authentication</h1>
        </div>
        <div className="box_content">
          <input
            name="account"
            onChange={handleChange}
            value={ values.account || ""}
            placeholder="Account"
            required
          />
          {errors.account && <div>{errors.account}</div>}

          <input
            name="password"
            onChange={handleChange}
            value={values.password || ""}
            placeholder="password"
            required
          />
          {errors.password && <div>{errors.password}</div>}
          <label>
            <input type="checkbox" name="rememberMe" />
            Remember Me
          </label>

          <button onClick={handleSubmit}>Login</button>
        </div>
      </section>
    );
}


