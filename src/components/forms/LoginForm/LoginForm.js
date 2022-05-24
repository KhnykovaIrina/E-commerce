import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PATH from '../../routes/constants';
import './LoginForm.css';

const LoginForm = (props) => {
   const { fetchAuth, user } = props
   const navigate = useNavigate()

   const { register, formState: { errors }, handleSubmit } = useForm({
      mode: "onBlur",
      reValidateMode: "onChange",
   })

   useEffect(() => {
      if (user.id > 0) {
         navigate(PATH.INDEX_PAGE)
      }
   }, [user]);
   
   if (user.id > 0) {
    return null;
   }

   return (
      <Form className='login-form' noValidate onSubmit={handleSubmit(fetchAuth)}>
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
               <Form.Text className='text-danger'>Your email is not correct, try again</Form.Text>
            )}
         </Form.Group>
         <Form.Group className="mb-3" >
            <Form.Control type="password" name="password" placeholder="Password" {...register('password', { required: true, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/i })} />
            {errors.password?.type === 'required' && (
               <Form.Text className='text-danger'>Password must be at least 8 characters including uppercase, lowercase letters and numbers</Form.Text>
            )}
            {errors.password?.type === 'pattern' && (
               <Form.Text className='text-danger'>Your password is not correct, try again</Form.Text>
            )}
         </Form.Group>
         <Form.Group className="mb-3 checkbox-wrapper">
            <Form.Group className="mb-3">
               <Form.Check type="checkbox" className="checkbox-remember" label="Remember me" {...register('rememberMe')} />
            </Form.Group>
            <div className="mb-3 link-recovery-password">
               <Link to={PATH.PASSWORD_RECOVERY_PAGE} >Forget password? </Link>
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