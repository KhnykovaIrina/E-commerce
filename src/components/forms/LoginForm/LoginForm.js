import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PATH from '../../routes/constants';
import http from '../../../utils/api/http';
import config from '../../../config';
import './LoginForm.css';

const LoginForm = () => {

   const { register, formState: { errors }, handleSubmit } = useForm({
      mode: "onBlur",
      reValidateMode: "onChange",
   })

   const onSubmit = async (data) => {
      try {
         const { user, token } = await http.post(`${config.url}/login`, data)
      } catch (response) {
         console.error('Error from API', response.message);
      }
   }

   return (
      <Form className='login-form' noValidate onSubmit={handleSubmit(onSubmit)}>
         <h3 className='login-form-title'>Welcome back</h3>
         <small className='text-muted'>Login with email</small>
         <br />
         <br />
         <Form.Group className="mb-3" >
            <Form.Control type="email" name="email" placeholder="Email" {...register('email', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i })} />
            {errors.email?.type === 'required' && (
               <Form.Text className='text-danger'>Email address should be filled</Form.Text>
            )}
            {errors.email?.type === 'pattern' && (
               <Form.Text className='text-danger'>Please Enter a valid email address</Form.Text>
            )}
         </Form.Group>
         <Form.Group className="mb-3" >
            <Form.Control type="password" name="password" placeholder="Password" {...register('password', { required: true, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/i })} />
            {errors.password?.type === 'required' && (
               <Form.Text className='text-danger'>Password should be filled</Form.Text>
            )}
            {errors.password?.type === 'pattern' && (
               <Form.Text className='text-danger'>Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers</Form.Text>
            )}
         </Form.Group>
         <Form.Group className="mb-3 checkbox-wrapper">
            <Form.Group className="mb-3">
               <Form.Check type="checkbox" label="Remember me" {...register('rememberMe')} />
            </Form.Group>
            <div className="mb-3 link-recovery-password">
               <Link to={PATH.PASSWORD_RECOVERY_PAGE} >Forget rassword?</Link>
            </div>
         </Form.Group>
         <Form.Group className="mb-3 checkbox-wrapper">
            <Button variant='secondary' type='submit'>Log in</Button>
            <div className="mb-3 link-signup">
               <Link to={PATH.SIGNUP_PAGE} >Sign up</Link>
            </div>
         </Form.Group>
      </Form >
   );
};

export default LoginForm;