import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import React from 'react';
function DayCard(props) {
  return (
    <Card className="bg-secondary text-white mb-2 ">
      <Row style={{height: '40px'}}></Row>
      <Row>
        <Col>
          <Card.Title className="ml-4" style={{fontSize: '2rem'}}>
            {props.day}
          </Card.Title>
        </Col>
        <Col style={{textAlign: 'left'}}>
          <Card.Title style={{fontSize: '2rem'}}>
            {props.temperature}
          </Card.Title>
        </Col>
        <Col style={{textAlign: 'center'}}>
          <Image src={props.image} style={{backgroundColor: 'transparent'}} />
        </Col>
      </Row>
      <Row style={{height: '40px'}}></Row>
    </Card>
  );
}

export default DayCard;
