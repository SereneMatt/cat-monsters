import React from 'react';

import './card.styles.css';

const Card = (props) => (
  <div className='card-container'>
    <img alt="mewster" src={'http://placekitten.com/180/180'} />
    <h2> { props.monster.name} </h2>
    <p>{props.monster.email}</p>
  </div>
);

export default Card;
