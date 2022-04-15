import React from 'react';
import { useSearchParams } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import http from '../../../utils/api/http';
import config from '../../../config';
import './ResetPasswordForm.css';

const ResetPasswordForm = () => {

   const [searchParams] = useSearchParams();
   const token = searchParams.get('hash');
   const email = searchParams.get('email');
   const { register, watch, formState: { errors }, handleSubmit } = useForm({
      mode: "onBlur",
      reValidateMode: "onChange",
   })

   const updateUser = async (values) => {
      try {
         const data = {
            token: token,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
         }
         const updatePassword = await http.post(`${config.url}/forgot_password/restore`, data)
      } catch (response) {
         console.error('Error from API', response.message);
      }
   }


   return (
      <Form className='login-form' noValidate onSubmit={handleSubmit(updateUser)}>
         <h3 className='login-form-title'>Reset password</h3>
         <Form.Group className="mb-3" >
            <Form.Control type="email" name="email" readOnly placeholder="Email" value={email} {...register('email')} />
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
         <Form.Group className="mb-3" >
            <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" {...register('confirmPassword', { pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/i, validate: (value) => value === watch("password") })} />

            {errors.confirmPassword?.type === 'pattern' && (
               <Form.Text className='text-danger'>Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers</Form.Text>
            )}
            {errors.confirmPassword?.type === 'validate' && (
               <Form.Text className='text-danger'>Password don't match. Please try again.</Form.Text>
            )}
         </Form.Group>
         <Button variant='secondary' type='submit'>Reset password</Button>
      </Form >
   );
};


export default ResetPasswordForm;