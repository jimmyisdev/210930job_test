import React, { useState } from 'react'
// import useForm  from '../func/useForm'
export default function FormAuth() {
  const [account, setAccount] = useState("initialState")
  const [password, setPassword] = useState("initialState")
  const [rememberMe, setRememberMe] = useState(false)
  const [values, setValues] = useState([account, password, rememberMe]);

  function handleSubmit(e){
    e.preventDefault();
    console.table(values)
  }

    return (
      <section>
        <div className="box_title">
          <h1>Form Authentication</h1>
        </div>
        <div className="box_content">
          <input name="account" placeholder="Account" />
          <input name="password" placeholder="password" />
          <label htmlFor="">
            <input type="checkbox" name="rememberMe" />
            Remember Me
          </label>

          <button onClick={handleSubmit}>Login</button>
        </div>
      </section>
    );





    // const { handleChange, handleSubmit, values, errors } = useForm({
    //     initialValues: { account: '', password: '', rememberMe: false },
    //     validation: (values) => {
    //     const errors = {}
    //     if (!values.account) {
    //     errors.account = '請輸入帳號'
    //     } else if (!values.password) {
    //     errors.password = '請輸入密碼'
    //     }
    //     return errors
    //     },
    //     onSubmit: (values) => console.table(values),
    // })
    // return (
    //     <>
    //         <input name="account" onChange={handleChange} value={values.account} placeholder="Account" />
    //         {errors.account && (<div>{errors.account}</div>)}
    //         <input name="password" onChange={handleChange} value={values.password} placeholder="password" />
    //         {errors.password && (<div>{errors.password}</div>)}
    //         <label><input type="checkbox" name="rememberMe" onChange={handleChange}
    //         checked={values.rememberMe} />Remember Me</label>
    //         <button onClick={handeSubmit}>Login</button>
    //     </>
    //     )
}
