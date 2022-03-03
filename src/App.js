import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OutlineButton from './components/OutlineButton';

function App() {
    return (
        <Container >
            <Row className="text-center">
                <Col md={{ span: 4, offset: 4 }}>
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

