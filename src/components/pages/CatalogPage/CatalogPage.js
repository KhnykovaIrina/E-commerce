import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from "../../common/Layout";
import "./CatalogPage.css";

const CatalogPage = (props) => {
   const params = useParams();
   const id = +params.id;
   const category = props.getCategoryById(id);

   return (
      <>
         <Layout>
            <div className="box">
               <div className="box-scroll">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
               </div>
            </div>
         </Layout>

      </>
   );

};

export default CatalogPage;