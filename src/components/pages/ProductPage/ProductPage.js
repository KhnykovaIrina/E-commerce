import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Layout from "../../common/Layout";
import ProductSizes from '../../elements/ProductSizes';
import Number from '../../elements/Number';
import './style.scss'
import LoginForm from '../../forms/LoginForm';


const ProductPage = (props) => {
    const params = useParams();
    const [count, setCount] = useState(1);
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        props.fetchProduct(params.productId);
    }, []);

    const handlerCountChange = (count) => {
        setCount(count)
    }

    const { product, addToCart, shoppingCart, updateItem, user } = props;

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

    const items = shoppingCart.items;
    const item = items?.find(item => item.variant.id === variant.id);
    const addProduct = () => {
        if (item) {
            updateItem(item, count)
        } else {
            addToCart(variant, count)
        }
    }

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
                                            <p className="text-muted fs-5 mb-2">Color:</p>
                                            <div className="d-flex">
                                                {variant.attributes.map((attribute, i) => (
                                                    (attribute.property === "color") &&
                                                    <button type="button" key={i} className="btn rounded-circle button-color border border-secondary border-3 me-2" style={{ background: `${attribute.value}` }} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {(product.variants?.length > 0) && (
                                    <div className='col-12'>
                                        <div className='product_variants'>
                                            <p className="text-muted fs-5 mb-2">Size:</p>
                                            <div className="d-flex">
                                                {variant.attributes.map((attribut, i) => (
                                                    <ProductSizes key={i} attribute={attribut} />))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className='col-12'>
                                    <div className='section_info'>
                                        <a className='fit_guide'>Size & Fit Guide</a>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-12 col-md-6 mt-4'>
                                        {(user.id > 0) &&
                                            <button className='product_button btn btn-dark btn-lg mt-3'
                                                disabled={product.variants.length === 0}
                                                onClick={addProduct}
                                            >
                                                Add to Cart
                                            </button>
                                        }
                                        {(!user.id) &&
                                         <div>
                                            <button className='product_button btn btn-dark btn-lg mt-3'
                                                onClick={handleShow}
                                            >
                                                Add to Cart
                                            </button>
                                            <Modal
                                                show={show}
                                                onHide={handleClose}
                                                backdrop="static"
                                                keyboard={false}
                                            >
                                                <Modal.Body>
                                                    <LoginForm />
                                                </Modal.Body>
                                            </Modal>
                                        </div>
                                        }
                                    </div>
                                    <div className='col-5'>
                                        <Number min={1} max={variant.quantity} count={count} handlerCountChange={handlerCountChange} />
                                    </div>
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
