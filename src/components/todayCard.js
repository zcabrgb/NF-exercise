import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import LoadingBar from './loadingBar';
import React from 'react';
function TodayCard(props) {
  return (
    <Card className="bg-dark text-white">
      <Card.Body>
        <Container fluid>
          <Row style={{height: '80px'}}>
            <Col>
              <Card.Title>{props.city}</Card.Title>
            </Col>
            <Col style={{textAlign: 'center'}}>
              <Card.Title>{props.time}</Card.Title>
            </Col>
            <Col style={{textAlign: 'right'}}>
              <Card.Title>{props.temperature}</Card.Title>
            </Col>
          </Row>
          <Row style={{height: '80px'}}>
            <Col>
              <LoadingBar></LoadingBar>
            </Col>
          </Row>

          {/* </Card.ImgOverlay> */}
        </Container>
      </Card.Body>
    </Card>
  );
}

export default TodayCard;
