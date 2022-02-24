'use strict'

import PopUp from './popup.js';
import Game from './game.js';


const CARROT_CNT = 5;
const BUG_CNT = 5;
const GAME_DURATION_SEC = 5;

const gameFinishBanner = new PopUp();

const game = new Game(20,20,20);
game.setGameStopListener(reason => {
    console.log(reason);
    let message;
    switch (reason) {
        case 'cancel':
            message = 'Replay?😀';
            break;
        case 'win':
            message = 'You won';
            break;
        case 'lose':
            message = 'You lost';
            break;
        default:
            throw new Error('not valid reason');
    }
    gameFinishBanner.showWithText(message);
})

gameFinishBanner.setClickListener(()=> {
    game.start();
})


