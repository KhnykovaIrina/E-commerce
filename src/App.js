import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OutlineButton from './components/OutlineButton';

function App() {
    return (
        <Container >
            <Row className="text-center">
                <Col md={{ span: 6, offset: 3 }}>
                    <h6 className="mt-3">Main - 6</h6>
                    <div>
                        <OutlineButton text="Shop All" />
                        <OutlineButton text="Buy Now" />                       
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default App;

