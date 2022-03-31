import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Accordion from '../../common/Accordion/Accordion';
import Select from '../../common/Select/Select';
import Number from '../../common/Number/Number';
import './GuidelinesPage.css';

const GuidelinesPage = () => {
   return (
      <div>
         <div className="container">
            <h1 className="text-center">Components</h1>
            <div >
               <ul className="list-components">
                  <h5>Choose the component:</h5>
                  <li><a href='#t1' className="link">Select</a></li>
                  <li><a href='#t2' className="link" >Counter</a></li>
                  <li><a href='#t3' className="link">Accordion</a></li>
               </ul>
            </div>
            <div>
               <h4 id='t1'>SELECT</h4>
               <p>Custom {`<select>`} menus need only a custom bootstrap class, .form-select to trigger the custom styles.</p>
               <div className='wrapper-component'>
                  <Select
                     defaultValue="Select size"
                     options={[
                        { label: "XS", value: "1" },
                        { label: "S", value: "2" },
                        { label: "M", value: "3" },
                        { label: "L", value: "4" },
                        { label: "XL", value: "5" },
                        { label: "XXL", value: "6" },
                        { label: "3XL", value: "7" },
                     ]}
                  />
                  <Tabs defaultActiveKey="HTML">
                     <Tab eventKey="HTML" title="HTML">
                        <SyntaxHighlighter language="javascript" style={a11yDark}>
                           {`   
           <select className="form-select" selected>
               <option>Select size:</option>
                  {[
                    { label: "XS", value: "1" },
                    { label: "S", value: "2" },
                    { label: "M", value: "3" },
                    { label: "L", value: "4" },
                    { label: "XL", value: "5" },
                    { label: "XXL", value: "6" },
                    { label: "3XL", value: "7" },
                   ].map((variant) => ( 
                     <option key={variant.value} value={variant.value} >{variant.label}</option>
                  ))}
            </select>`}
                        </SyntaxHighlighter>
                     </Tab>
                  </Tabs>
               </div>
            </div>
            <div>
               <h4 id='t2'>COUNTER</h4>
               <div className='wrapper-component'>
                  <Number min={1} max={5} INITIAL_NUMBER={1} />
                  <Tabs defaultActiveKey="HTML" >
                     <Tab eventKey="HTML" title="HTML">
                        <SyntaxHighlighter language="javascript" style={a11yDark}>
                           {`            
            <div className="counter">
               <p className="title">Quantity</p>
               <div className="counter-wrapper">
                  <button id="decrement" className="button">-</button>
                  <input className="input"/>
                  <button id="increment">+</button>
               </div>
            </div>
                 `}
                        </SyntaxHighlighter>
                     </Tab>
                     <Tab eventKey="CSS" title="CSS">
                        <SyntaxHighlighter language="css" style={a11yDark}>
                           {`
            .counter {
               padding: 0;
               margin: 10px;
               width: 150px;
               padding: 10px;
               margin-left: auto;
               margin-right: auto;
            }
            .counter-wrapper {
               margin: 0;
               padding: 0;
               border: 1px solid rgb(124, 123, 123);
               display: flex;
               align-items: center;
               border-radius: 5px;
            }

            .input {
               height: 100%;
               width: 100%;
               background: none;
               border: none;
               text-align: center;
               font-size: 20px;
            }

            .title {
               font-size: 25px;
               color: gray;
               text-align: left;
            }

            .button {
               background: none;
               border: none;
               padding: 0.8rem;
               font-size: 25px;
               outline: none;
               font-weight: bold;
            }`}
                        </SyntaxHighlighter>
                     </Tab>
                  </Tabs>
               </div>
            </div>
            <div>
               <h4 id='t3'>ACCORDION</h4>
               <div></div>
               <div className='wrapper-component'>
                  <Accordion
                     accordionData={[
                        { title: "Section 1", content: "Text" },
                        { title: 'Section 2', content: "Text" },
                        { title: 'Section 3', content: "Text" }
                     ]}
                  />
                  <Tabs defaultActiveKey="HTML" >
                     <Tab eventKey="HTML" title="HTML">
                        <SyntaxHighlighter language="javascript" style={a11yDark}>
                           {`
             <div>
               <h3>Order Infomation</h3>
               <div className="accordion">
                     <div className="accordion-item">
                        <div className="accordion-title">
                           <p>Section 1</p>
                            <div>+</div>
                        </div>
                       <div className="accordion - content">Text</div>
                     </div>
                     <div className="accordion-item">
                        <div className="accordion-title">
                           <p>Section 2</p>
                            <div>+</div>
                        </div>
                       <div className="accordion-content">Text</div>
                     </div>
                     <div className="accordion-item">
                        <div className="accordion-title">
                           <p>Section 3</p>
                            <div>+</div>
                        </div>
                       <div className="accordion-content">Text</div>
                     </div>
               </div>
            </div> `}
                        </SyntaxHighlighter>
                     </Tab>
                     <Tab eventKey="CSS" title="CSS">
                        <SyntaxHighlighter language="css" style={a11yDark}>
                           {`
            .accordion {
               max-width: 90%;
               background-color: rgb(212, 211, 211);
               border: none;
               border-top: 2px solid rgb(80, 80, 80);
               margin: 20px;
               margin-left: auto;
               margin-right: auto;
            }

            h3 {
               text-align: center;
               margin: 5px;
            }

            .item {
               background-color: white;
               border: none;
               border-bottom: 1px solid gray;
               padding: 10px;
               text-align: left;
               font-size: 20px;
               font-weight: 500;
               color: rgb(114, 112, 112);
            }

            .accordion-title {
               display: flex;
               flex-direction: row;
               justify-content: space-between;
               cursor: pointer;
               border: none;
               text-align: left;
               font-size: 20px;
               font-weight: 600;
               color: rgb(88, 88, 86);
            }
            .accordion-content {
               max-height: 0;
               overflow: hidden;
               transition: all 0.5s cubic-bezier(0, 1, 0, 1);
            }
                     `}
                        </SyntaxHighlighter>
                     </Tab>
                  </Tabs>
               </div>
            </div>
         </div>
      </div >
   );
};

export default GuidelinesPage;