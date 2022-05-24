import React from 'react';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import {useNavigate } from 'react-router-dom';
import PATH from '../../routes/constants';


const ShippingForm = (props) => {
    const { addAddress } = props;
    const navigate=useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: "onBlur",
        reValidateMode: "onChange",
    })

    return (
        <Form className="mt-3" noValidate onSubmit={handleSubmit(addAddress)} >
            <h4 className="mb-3">Shipping information</h4>
            <div className="row">
                <Form.Group className='col-md-6 mb-3'>
                    <Form.Control type='text' name='fullName' placeholder='Full Name' {...register('fullName', { required: true })} />
                    {errors.fullName?.type === 'required' && (
                        <Form.Text className='text-danger'>User name should be filled</Form.Text>
                    )}
                </Form.Group>
                <Form.Group className='col-md-6 mb-3'>
                    <Form.Control type='text' name='lastName' placeholder='Lust Name' {...register('lastName', { required: true })} />
                    {errors.lastName?.type === 'required' && (
                        <Form.Text className='text-danger'>Last name should be filled</Form.Text>
                    )}
                </Form.Group>
            </div>
            <Form.Group className="mb-3" >
                <Form.Control type="email" name="email" placeholder="Email" {...register('email', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i })} />
                {errors.email?.type === 'required' && (
                    <Form.Text className='text-danger'>Email address should be filled</Form.Text>
                )}
                {errors.email?.type === 'pattern' && (
                    <Form.Text className='text-danger'>Please Enter a valid email address</Form.Text>
                )}
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control type='tel' name='phone' placeholder='Phone number use format: +375297771122'  {...register('phone', { required: true, pattern: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/ })} />
                {errors.phone?.type === 'required' && (
                    <Form.Text className='text-danger'>Phone should be filled</Form.Text>
                )}
                {errors.phone?.type === 'pattern' && (
                    <Form.Text className='text-danger'>Please fill the phone number in correct way</Form.Text>
                )}
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control type='text' name='address' placeholder='Address' {...register('address', { required: true })} />
                {errors.address?.type === 'required' && (
                    <Form.Text className='text-danger'>Address should be filled</Form.Text>
                )}
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control type='text' name='apartment' placeholder='Apartment,suite,etc(optional)' {...register('apartment')} />
            </Form.Group>
            <div className="row">
                <Form.Group className='col-md-4 mb-3'>
                    <Form.Control type='text' name='country' placeholder='Country' {...register('country', { required: true })} />
                    {errors.country?.type === 'required' && (
                        <Form.Text className='text-danger'>Country should be filled</Form.Text>
                    )}
                </Form.Group>
                <Form.Group className='col-md-4 mb-3'>
                    <Form.Control type='text' name='city' placeholder='City' {...register('city', { required: true })} />
                    {errors.city?.type === 'required' && (
                        <Form.Text className='text-danger'>City should be filled</Form.Text>
                    )}
                </Form.Group>
                <Form.Group className='col-md-4 mb-3'>
                    <Form.Control type='text' name='Zipcode' placeholder='Zipcode' {...register('zipcode', { required: true, pattern: /^[0-9]+$/ })} />
                    {errors.zipcode?.type === 'required' && (
                        <Form.Text className='text-danger'>Zipcode should be filled</Form.Text>
                    )}
                    {errors.zipcode?.type === 'pattern' && (
                        <Form.Text className='text-danger'>Please fill the zipcode in correct way</Form.Text>
                    )}
                </Form.Group>
            </div>
            <Form.Group className='mb-3'>
                <Form.Control type='text' name='extra' placeholder='Optional'  {...register('extra')} />
            </Form.Group>
            <Form.Group className="col-lg-12 mb-3">
                <Form.Check type="checkbox" className="ps-0" label="Save contact information" {...register('saveContact')} />
            </Form.Group>
            <Form.Group className=" mb-3 ">
                <button type="submit" className="col-md-12 btn btn-dark" onClick={() => navigate(PATH.CHECKOUT_SHIPPING)} >Continue to shipping</button>
            </Form.Group>
        </Form >
    )
}

export default ShippingForm;
