import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlueButton from "./components/BlueButton";
import ProductSizes from "./components/ProductSizes"
import Select from "./components/Select";
import Accordion from "./components/Accordion";

function App() {

    return (
        <Container className="text-center">
            <BlueButton text="Buy Now" />
            <ProductSizes
                option={[
                    { label: "XS", value: "1" },
                    { label: "S", value: "2" },
                    { label: "M", value: "3" },
                    { label: "L", value: "4" },
                    { label: "XL", value: "5" },
                    { label: "XXL", value: "6" },
                    { label: "3XL", value: "7" },
                ]}
            />
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
            <br />
            <br />
			<Number min={1} max={5} INITIAL_NUMBER={1} />
            <Accordion
                accordionData={[
                    {
                        title: "Section 1",
                        content: "Text"
                    },
                    {
                        title: 'Section 2',
                        content: "Text"
                    },
                    {
                        title: 'Section 3',
                        content: "Text"
                    }
                ]}
            />
        </Container >
    );

}

export default App;
