// Code CoordinatesButton Component Here
import React, { Component } from "react";

const CoordinatesButton = props => {
  console.log(props);
  const { onReceiveCoordinates } = props;

  const handleClick = event => {
    onReceiveCoordinates([event.clientX, event.clientY]);
  };

  return <button onClick={handleClick}>Coordinates</button>;
};

export default CoordinatesButton;
