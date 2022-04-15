import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PATH from '../../routes/constants';
import http from '../../../utils/api/http';
import config from '../../../config';
import './PasswordRecoveryForm.css';

const PasswordRecoveryForm = () => {


   const { register, formState: { errors }, handleSubmit } = useForm({
      mode: "onBlur",
      reValidateMode: "onChange",
   })
   const navigate = useNavigate();
   const onSubmit = async (email) => {
      try {
         const userEmail = await http.post(`${config.url}/forgot_password`, email)
         navigate(PATH.SUCCESS_PAGE)
      } catch (response) {
         console.error('Error from API', response.message);
      }
   }

   return (
      <Form className='recovery-form' noValidate onSubmit={handleSubmit(onSubmit)}>
         <h3 className='recovery-form-title'>Forgot password</h3>
         <Form.Group className="mb-3" >
            <Form.Control type="email" name="email" placeholder="Email" {...register('email', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i })} />
            {errors.email?.type === 'required' && (
               <Form.Text className='text-danger'>Email address should be filled</Form.Text>
            )}
            {errors.email?.type === 'pattern' && (
               <Form.Text className='text-danger'>Please Enter a valid email address</Form.Text>
            )}
         </Form.Group>
         <Button variant='secondary' type='submit'>Forgot password</Button>
      </Form >
   );
};

export default PasswordRecoveryForm;