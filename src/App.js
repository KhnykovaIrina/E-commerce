import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlueButton from "./components/BlueButton";
import ProductSizes from "./components/ProductSizes";
import Select from "./components/Select";

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
            <br />
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
        </Container>
    );
}

export default App;
