import React from 'react';

const FruitStand = (props) => (
  <ul>
    {props.fruits.map( fruit => <li>{fruit}</li>)}
  </ul>
)

export default FruitStand;