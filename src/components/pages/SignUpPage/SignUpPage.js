import React from 'react';
import Layout from '../../common/Layout'
import SignUpForm from "../../forms/SignUpForm";
import './SignUpPage.css';


const SignUpPage = () => {
    return (
        <Layout>
            <div className='signup-page'>
                <SignUpForm />
            </div>
        </Layout>
    )
}

export default SignUpPage;
