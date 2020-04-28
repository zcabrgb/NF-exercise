import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import LoadingBar from './loadingBar';
import React, {useState} from 'react';
import useInterval from '../customHooks/useInterval';

function TodayCard(props) {
  const [time, setTime] = useState(60);
  if (time === 0) {
    setTime(60);
  }
  useInterval(() => {
    // Your custom logic here
    setTime(time - 1);
  }, 1000);
  return (
    <Card className="bg-dark text-white mb-2">
      <Card.Body>
        <Container fluid>
          <Row>
            <Col>
              <Card.Title
                className="font-weight-bold"
                style={{fontSize: '2.4rem'}}
              >
                {props.city}
              </Card.Title>
            </Col>
            <Col style={{textAlign: 'center'}}>
              <Card.Title
                className="font-weight-bold"
                style={{fontSize: '1.6rem'}}
              >
                {props.time}
              </Card.Title>
            </Col>
            <Col style={{textAlign: 'right'}}>
              <Card.Title
                className="font-weight-bold"
                style={{fontSize: '1.6rem'}}
              >
                {props.temperature}
              </Card.Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>{`Reloading in ${time} seconds`}</Card.Text>
            </Col>
          </Row>
          <Row>
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
