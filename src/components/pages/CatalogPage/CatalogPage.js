import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Layout from "../../common/Layout";
import LoadMoreButton from '../../elements/LoadMoreButton';
import ProductList from '../../elements/ProductList';
import "./CatalogPage.css";

const CatalogPage = (props) => {
   const params = useParams();
   const id = +params.id;
   const category = props.getCategoryById(id);
   const {fetchProducts, products}=props
   useEffect(() => {
      if (!products.length) {
          fetchProducts(id);
      }

  }, [products]);
   return (
      <>
         <Layout>
            {((category) && (
               <div className="box">
                  <div className="box-scroll">
                     <h3>{category.name}</h3>
                     <p>{category.description}</p>
                  </div>
               </div>
            ))}
            <ProductList products={products} />
            <div className="wrapper-button-load">
               <LoadMoreButton />
            </div>

         </Layout>

      </>
   );

};

export default CatalogPage;