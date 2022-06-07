import { Typography, TextField } from '@mui/material';
import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { IRegister } from '../../../common/interfaces/register';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import '../../../css/_custom.css'
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../../store/auth';
import shallow from "zustand/shallow";
import { ILogin } from '../../../common/interfaces/login';

const schema = yup
  .object({
    password: yup.string().required(),
    username: yup.string().required()
  })
.required();

const Login= (): JSX.Element => {
  //Transform useNavigate into a constant
  const navigate = useNavigate()
  const [login] = useAuthStore((state) => [state.login], shallow);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(schema),
  });

  const doLogin = async ({ username, password }: ILogin) => {
    try {
      console.log({username})
      await login({ username, password });
      navigate('/home')
    } catch(err) {
      console.log(err)
      alert('Usuário ou Senha Incorretos!')
    }
  };
    
  //Return the page rendered
  return (
    <div className='container'>
      <div className='flex'>
        <div>
          <h1 className='list m-2 p-4'>SWAPI</h1>
        </div>
        <div className='cardSU flex m-1 bg-light'>
          <Typography className='h1SU m-4'  component="h1" variant="h5">
            Login
          </Typography>
          <form onSubmit={handleSubmit(doLogin)}>
            {/* username */}
            <div className='col m-2 d-flex flex-column'>
                <TextField 
                  type='text'
                  placeholder="Username"
                  label="Name"
                  {...register("username")}
                />
                {errors && errors.username && (
                  <span className="text-danger">{errors.username.message}</span>
                )}
            </div>
            {/* password */}
            <div className='col m-2 d-flex flex-column'>
                <TextField 
                  type='password'
                  placeholder="Password"
                  label="Password"
                  {...register("password")}
                />
                {errors && errors.password && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
            </div>
            <div className='d-flex flex-column'>
              <div className='col btnSU m-3'>
                  <Button 
                    type="submit"
                    variant="outlined"
                    color=""
                  >
                    Log-in
                  </Button>
              </div>
              <div className='col btnSU m-3'>
                  <Button 
                    type="submit"
                    variant="outlined"
                    color=""
                    onClick={()=>navigate('/signUp')}
                  >
                    Sign-Up
                  </Button>
              </div>
            </div>
          </form>
        </div>  
      </div>
    </div>
  )
}
export default Login