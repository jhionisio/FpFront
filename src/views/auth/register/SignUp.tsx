import { Typography, TextField, Card } from '@mui/material';
import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { IRegister } from '../../../common/interfaces/register';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import '../../../css/_custom.css'
import { useNavigate } from 'react-router-dom';
import shallow from "zustand/shallow";
import useRegisterStore from '../../../store/register';

//Set yup validations
const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required(),
    passCheck: yup.string()
      .when("password", {
        is: (val: any) => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf(
          [yup.ref("password")],
          "Both password need to be the same"
        ),
      })
      .required("Confirm Password Required"),
    cellPhone: yup.string().required(),
    username: yup.string().required()
  })
.required();

const SignUp: React.FC = (): JSX.Element => {
  //Transform useNavigate into a constant
  const navigate = useNavigate()

  //Prepare the state
  const [signUp] = useRegisterStore((state) => [state.signUp], shallow);

  //Settle the useForm constants and implement the yup validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(schema),
  });

  //Execute the service
  const doSignUp = async ({ email, password, username, cellPhone }: IRegister | any) => {
    try {
      await signUp({ email, password, username, cellPhone });
      navigate('/')
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
          <h1 className='list m-1 p-1'>SWAPI</h1>
        </div>
        <Card className='cardSU flex m-1 bg-light'>
          <Typography className='h1SU m-4'  component="h1" variant="h5">
            SignUp
          </Typography>
          <form onSubmit={handleSubmit(doSignUp)}>
            {/* name */}
            <div className='col m-2 d-flex flex-column'>
              <TextField 
                placeholder="Name"
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
                placeholder="Password"
                label="Password"
                {...register("password")}
              />
              {errors && errors.password && (
                <span className="text-danger">{errors.password.message}</span>
              )}
            </div>
            {/* password check */}
            <div className='col m-2 d-flex flex-column'>
              <TextField 
                placeholder="Password check"
                label="Password check"
                {...register("passCheck")}
              />
              {errors && errors.passCheck && (
                <span className="text-danger">{errors.passCheck.message}</span>
              )}
            </div>
            {/* email */}
            <div className='col m-2 d-flex flex-column'>
                <TextField 
                  placeholder="E-mail"
                  label="E-mail"
                  {...register("email")}
                />
                {errors && errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
            </div>
            {/* cellphone number */}
            <div className='col m-2 d-flex flex-column'>
              <TextField 
                placeholder="cellphone number"
                label="cellphone number"
                autoComplete="cellphone number"
                {...register("cellPhone")}
              />
              {errors && errors.cellPhone && (
                <span className="text-danger">{errors.cellPhone.message}</span>
              )}
            </div>
            <div className='d-flex flex-column'>
              <div className='col btnSU m-3'>
                <Button 
                  type="submit"
                  variant="outlined"
                  color=""
                >
                  Register
                </Button>
              </div>
              <div className='col btnSU m-3'>
                <Button 
                  type="submit"
                  variant="outlined"
                  color=""
                  onClick={()=>navigate('/')}
                >
                  Log-in
                </Button>
              </div>
            </div>
          </form>
        </Card>  
      </div>
    </div>
  )
}
export default SignUp