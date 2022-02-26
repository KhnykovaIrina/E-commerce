import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlueButton from "./components/BlueButton/BlueButton";
import ShoppingCartButton from './components/ShoppingCartButton/ShoppingCartButton';

function App() {
    return (
        <Container >
            <Row className="text-center">
                <Col md={{ span: 6, offset: 3 }}>
                    <h6 className="mt-3">Main - 2</h6>
                    <div>
                        <ShoppingCartButton text="Add to Cart - $250" />
                        <ShoppingCartButton text="Add to Cart - $250" disabled={true} />
                        <ShoppingCartButton backgroundColor={"#005f73"} text="Add to Cart - $250" />
                    </div>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md={{ span: 6, offset: 3 }}>
                    <h6 className="mt-3">Main - 5</h6>
                    <div>
                        <BlueButton text="Buy Now" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default App;
