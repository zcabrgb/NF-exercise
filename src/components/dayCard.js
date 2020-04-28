import Card from 'react-bootstrap/Card';
import React from 'react';
function DayCard(props) {
  return (
    <Card className="bg-dark text-white">
      {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
      <Card.ImgOverlay>
        <Card.Text>{props.day}</Card.Text>
        <Card.Text>{props.temperature}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default DayCard;
