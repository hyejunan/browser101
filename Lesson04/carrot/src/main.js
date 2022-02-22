'use strict'

import PopUp from './popup.js';
import PopUp from './field.js';
import Field from './field.js';

const CARROT_SIZE = 80;
const CARROT_CNT = 5;
const BUG_CNT = 5;
const GAME_DURATION_SEC = 5;


const gameBtn = document.querySelector('.game__button');
const gameScore = document.querySelector('.game__score');
const gameTimer = document.querySelector('.game__timer');



const carrotSound = new Audio('sound/carrot_pull.mp3');
const alertSound = new Audio('sound/alert.wav');
const bgSound = new Audio('sound/bg.mp3');
const bugSound = new Audio('sound/bug_pull.mp3');
const winSound = new Audio('sound/game_win.mp3');

let started = false;
let score = 0;
let timer = undefined;

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(()=> {
    startGame();
})

const gameField = new Field(CARROT_CNT, BUG_CNT);
gameField.setClickListner(onItemClick);

function onItemClick(item) {
    if(!started)
        return;
    if(item === 'carrot') {
        score++;
        updateScoreBoard();
        if(score === CARROT_CNT) {
            finishGame(true);
        }
    } else if(item === 'bug') {
        finishGame(false);
    }
}

gameBtn.addEventListener('click', () => {
    console.log(started);
    if (started) {
        stopGame();
    } else {
        startGame();
    }
});

function startGame() {
    started = true;
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
    playSound(bgSound);
}

function stopGame() {
    started = false;
    stopGameTimer();
    hideGameButton();
    gameFinishBanner.showWithText('REPLAY?');
    playSound(alertSound);
    stopSound(bgSound);
}

function finishGame(win) {
    started = false;
    hideGameButton();
    if(win) {
        playSound(winSound);
    } else {
        playSound(bugSound);
    }
    stopGameTimer();
    stopSound(bgSound);
    gameFinishBanner.showWithText(win? 'YOU WON!' : 'YOU LOST!');
}

function startGameTimer() {
    let remainingTimeSec = GAME_DURATION_SEC;
    updateTimerText(remainingTimeSec);
    timer = setInterval(() => {
        if(remainingTimeSec <= 0) {
            clearInterval(timer);
            finishGame(CARROT_CNT === score);
            return;
        }
        updateTimerText(--remainingTimeSec);
    }, 1000);
}

function stopGameTimer() {
    clearInterval(timer);
}

function updateTimerText(time) {
    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    gameTimer.innerText = `${minutes}:${seconds}`;
}

function showStopButton() {
    const icon = gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    gameBtn.style.visibility = 'visible';
}

function hideGameButton() {
    gameBtn.style.visibility = 'hidden';
}



function showTimerAndScore() {
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}

function initGame() {
    score = 0;
    gameScore.innerText = CARROT_CNT;
    gameField.init();
}

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function stopSound(sound) {
    sound.pause();
}


function updateScoreBoard() {
    gameScore.innerText = CARROT_CNT - score;
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

