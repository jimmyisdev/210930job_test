import React from 'react'
import useForm from '../func/useForm'


export default function FormAuth() {
  const { handleChange, handleSubmit, values, errors } = useForm();

    return (
      <section>
        <div className="box_title">
          <h1>Form Authentication</h1>
        </div>
        <div className="box_content">
          <form onSubmit={handleSubmit}>
            <input
              name="account"
              onChange={handleChange}
              value={values.account || ""}
              placeholder="Account"
              required
            />
            {errors.account && <div>{errors.account}</div>}

            <input
              name="password"
              onChange={handleChange}
              value={values.password || ""}
              placeholder="Password"
              required
            />
            {errors.password && <div>{errors.password}</div>}

            <label>
              <input type="checkbox" name="rememberMe" />
              Remember Me
            </label>

            <button onSubmit={handleSubmit}>Login</button>
          </form>
        </div>
      </section>
    );
}


