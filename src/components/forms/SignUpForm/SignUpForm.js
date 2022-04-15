import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PATH from '../../routes/constants';
import http from '../../../utils/api/http';
import config from '../../../config';
import './SignUpForm.css';

const SignUpForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: "onBlur",
        reValidateMode: "onChange"
    });

    const createUser = async (values) => {
        try {
            const newUser = await http.post(`${config.url}/user`, values);
            console.log('newUser', newUser);
        } catch (response) {
            console.error('Error from API', response.message);
        }
    }

    return (
        <Form className='signup-form' noValidate onSubmit={handleSubmit(createUser)}>
            <h3 className='signup-form-title'>Register new user</h3>
            <small className='text-muted'>Please fill all mandatory fields</small>
            <br />
            <br />
            <Form.Group className='mb-3'>
                <Form.Label>Full Name*</Form.Label>
                <Form.Control type='text' name='fullname' placeholder='Enter Full Name' {...register('fullname', { required: true, minLength: 5 })} />
                {errors.fullname?.type === 'required' && (
                    <Form.Text className='text-danger'>User name should be filled</Form.Text>
                )}
                {errors.fullname?.type === 'minLength' && (
                    <Form.Text className='text-danger'>Username at least have 5 letters</Form.Text>
                )}
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Email Address*</Form.Label>
                <Form.Control type='email' name='email' placeholder='Enter Email Address' {...register('email', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i })} />
                {errors.email?.type === 'required' && (
                    <Form.Text className='text-danger'>Email address should be filled</Form.Text>
                )}
                {errors.email?.type === 'pattern' && (
                    <Form.Text className='text-danger'>Please Enter a valid email address</Form.Text>
                )}
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Password*</Form.Label>
                <Form.Control type='password' name='password' placeholder='Enter Password' {...register('password', { required: true, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/i })} />
                {errors.password?.type === 'required' && (
                    <Form.Text className='text-danger'>Password should be filled</Form.Text>
                )}
                {errors.password?.type === 'pattern' && (
                    <Form.Text className='text-danger'>Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers</Form.Text>
                )}
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Birthday</Form.Label>
                <Form.Control type='date' name='birth_date' placeholder='Enter you birthday' {...register('birth_date')} />
                {errors.birth_date?.type === 'required' && (
                    <Form.Text className='text-danger'>Password should be filled</Form.Text>
                )}
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Phone Number*</Form.Label>
                <Form.Control type='tel' name='phone' placeholder='Enter you phone'  {...register('phone', { pattern: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/ })} />
                <Form.Text className='text-muted'>Please use format: +375297771122</Form.Text>
                {errors.phone?.type === 'pattern' && (
                    <Form.Text className='text-danger'>Please fill the phone number in correct way</Form.Text>
                )}
            </Form.Group>
            <Form.Group className="mb-3 wrapper-button">
                <Button className='buttton-login' variant='secondary' type='submit'>Sign Up</Button>
                <div className="mb-3 link-login">
                    <Link to={PATH.LOGIN_PAGE}>Log in</Link>
                </div>
            </Form.Group>
        </Form>
    )
}

export default SignUpForm;
