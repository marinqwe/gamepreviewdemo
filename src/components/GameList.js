import React from 'react';
import GameItem from './GameItem';

const gameList = ({ games, onGameSelect, onGameDelete }) => (
    <div className="container__list">
        {games.map(game => (
            <div key={game.id} className="listitem">
                <GameItem game={game} onGameSelect={onGameSelect} onGameDelete={onGameDelete}/>
            </div>)
        )}
    </div>
);

export default gameList;
