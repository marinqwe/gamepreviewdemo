import React, { Component } from 'react';
import GameList from './GameList';
import GameDetails from './GameDetails';
import games from '../../games.json';

class GamePreview extends Component {
    state = {
        games: games.games,
        selectedGameId: null
    };
    getGame = gameId => {
        if(gameId){
            const game = this.state.games.find(game => game.id === gameId);
            return game;
        }
        return null;
    };
    onGameSelect = gameId => {
        this.setState(() => ({ selectedGameId: gameId }));
    };
    onGameDelete = gameId => {
        const gameIndex = this.state.games.findIndex(game => game.id === gameId);
        const newGameList = this.state.games;
        newGameList.splice(gameIndex, 1);

        let newState = { games: newGameList, selectedGameId: gameId };
        if(gameId === this.state.selectedGameId) {
            newState.selectedGameId = null;
        }
        this.setState(() => newState);
    };

    render() {
        const { games, selectedGameId } = this.state;
        const selectedGame = this.getGame(selectedGameId);
        console.log(games);
        return (
            <div className="background">
                <div className="title">Game preview demo</div>
                <div className="container__all">
                    <div className="container">
                        <GameList
                            games={this.state.games}
                            onGameSelect={this.onGameSelect}
                            onGameDelete={this.onGameDelete}
                        />
                    </div>
                    {selectedGame && <GameDetails game={selectedGame} />}
                </div>
            </div>
        );
    }
}

export default GamePreview;
