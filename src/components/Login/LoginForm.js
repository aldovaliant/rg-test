import React from 'react';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from "react-router-dom";

const formStyle = {
  margin: 'auto',
  padding: '10px',
  border: '1px solid #c9c9c9',
  borderRadius: '5px',
  background: '#f5f5f5',
  width: '220px',
  display: 'block'
};

const labelStyle = {
  margin: '10px 0 5px 0',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: '15px',
};

const inputStyle = {
  margin: '5px 0 10px 0',
  padding: '5px',
  border: '1px solid #bfbfbf',
  borderRadius: '3px',
  boxSizing: 'border-box',
  width: '100%'
};

const submitStyle = {
  margin: '10px 0 0 0',
  padding: '7px 10px',
  border: '1px solid #efffff',
  borderRadius: '3px',
  background: '#3085d6',
  width: '100%',
  fontSize: '15px',
  color: 'white',
  display: 'block'
};

const Field = React.forwardRef(({ label, type }, ref) => {
  return (
    <div>
      <label style={labelStyle} >{label}</label>
      <input ref={ref} type={type} style={inputStyle} />
    </div>
  );
});

const Form = () => {
  let navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (d) => {
    localStorage.setItem("username", d.username);
    navigate("/form", { replace: true });

  }
  return (
    <form style={formStyle} onSubmit={handleSubmit(onSubmit)} >
      <label style={labelStyle} >Username:</label>
      <input {...register("username")} label="Username:" type="text" />
      <label style={labelStyle} >Password:</label>
      <input {...register("password")} label="Password:" type="password" />
      <div>
          <button style={submitStyle} type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;