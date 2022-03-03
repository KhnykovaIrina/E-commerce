import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlueButton from "./components/BlueButton";
import ProductSizes from "./components/ProductSizes";

function App() {
    return (
        <Container >
            <Row className="text-center">
                <Col md={{ span: 6, offset: 3 }}>
                    <h6 className="mt-3">Main - 5</h6>
                    <div>
                        <BlueButton text="Buy Now" />
                        <ProductSizes/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default App;

