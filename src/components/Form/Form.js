import React, { useEffect } from 'react';
import { Grid } from '@mui/material'
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from 'react-router-dom'

function Form() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('username') !== null)
      document.getElementById('userId').value = localStorage.getItem('username');
    else {
      alert('Please Login.')
      navigate('/login', { replace: true })
    }
  }, [])
  return (
    <Grid container direction='column' alignItems='center' justifyContent='center'>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item marginBottom='20px'>
          <label>
            User Id :
          </label>
          <br />
          <input {...register('userId')} type='text' name='name' id='userId' />
          <ErrorMessage errors={errors} name="singleErrorInput" />
          <br />
        </Grid>
        <Grid item marginBottom='20px'>
          <label>
            Delivery address :
          </label>
          <br />
          <input type='text' name='name' />
          <br />
        </Grid>
        <Grid item marginBottom='20px'>
          <label>
            Contact Number :
          </label>
          <br />
          <input type='text' name='name' />
          <br />
        </Grid>
        <Grid item marginBottom='20px'>
          <label>
            Contact Person :
          </label>
          <br />
          <input type='text' name='name' />
          <br />
        </Grid>
      </form>
    </Grid>
  );
}

export default Form;