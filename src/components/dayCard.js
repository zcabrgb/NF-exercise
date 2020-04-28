import React from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

function DayCard(props) {
  return (
    <Card className="bg-secondary text-white mb-2 ">
      <Row style={{height: '45px'}}></Row>
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
          <Figure>
            <Figure.Image
              src={props.image}
              style={{backgroundColor: 'transparent'}}
            />
            <Figure.Caption className="text-white" style={{fontSize: '1rem'}}>
              {props.caption}
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
      <Row></Row>
    </Card>
  );
}

export default DayCard;
