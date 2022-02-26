import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlueButton from "./components/BlueButton/BlueButton";

function App() {
    return (
        <Container >     
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
