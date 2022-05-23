import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Layout from "../../common/Layout";

const ProductPage = (props) => {
    const params = useParams();
    useEffect(() => {
        props.fetchProduct(params.productId);
    }, []);


    const {product, addToCart} = props;

    if (!product.id) {
        return null;
    }

    const variant = product.variants[0];
    const images = variant.images.map((image, key) => {
        const original = `${image}?${key}`;
        return {
            original: original,
            thumbnail: original
        }
    });

    return (
        <Layout>
            <div className='product_page mt-3 mx-5 ps-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-7'>
                            <div className='row'>
                                <div className='col-12 col-md-11'>
                                    <div className='image_gallery'>
                                        <ImageGallery
                                            showPlayButton={false}
                                            items={images}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-5'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h1>{product.name}</h1>
                                    <div className='product_price'>${variant.price}</div>
                                </div>

                                {(product.description) && (
                                    <div className='col-12 col-md-9'>
                                        <div className='product_description'>{product.description}</div>
                                    </div>
                                )}

                                {(product.variants?.length > 0) && (
                                    <div className='col-12'>
                                        <div className='product_variants'>

                                        </div>
                                    </div>
                                )}

                                <div className='col-12'>
                                    <div className='section_info'>
                                        <a className='fit_guide'>Size & Fit Guide</a>
                                    </div>
                                </div>

                                <div className='col-6'>
                                    <button className='product_button btn btn-primary btn-lg' onClick={() => addToCart(variant, 3)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}


export default ProductPage;
