import React from 'react';

const gameItem = ({game, onGameSelect, onGameDelete}) => (
    <div className="listitem__item">
        <img src={game.thumbnailURL} className="img-thumbnail"/>
        <h3  onClick={() => onGameSelect(game.id)}>{game.name}</h3>
        <div onClick={() => onGameDelete(game.id)} className="listitem__remove">Remove</div>
    </div>
);
export default gameItem;