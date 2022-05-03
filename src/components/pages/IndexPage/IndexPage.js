import React from 'react';
import CarouselBox from '../../elements/CarouselBox/CarouselBox';
import Brands from '../../elements/Brands/Brands';
import Layout from '../../common/Layout';
import "./IndexPage.css";

const IndexPage = () => {
    
    return (
        <>
            <Layout>
                <div className="wrapper">
                    <h1>Better clothing for the planet</h1>
                    <p className='text-muted promo-text'>We are pleased to offer all Marriott associates who work for Marriott International or a managed property a 30% discount</p>
                    <button type="button" className="btn btn-outline-secondary col-2">Shop all</button>
                </div>
                <CarouselBox />
                <Brands />
            </Layout>
        </>
    );
};

export default IndexPage;
