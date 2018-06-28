import React from 'react';

const gameDetails = ({game}) => (
    <div className="gamedetails" >
        <h2>{game.name}</h2>
        <p><strong>Genre:</strong> {game.genre}</p>
        <p className="details__description"><strong>Description:</strong> {game.description}</p>
        <img src={game.imageURL} className="img-main"/>
    </div>
);
export default gameDetails;