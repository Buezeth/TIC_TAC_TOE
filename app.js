const box = document.querySelectorAll('.box-container .box');
const player1Game = [];
const player2Game = [];
const drawGame = [];

let isWin = false;
// console.log(box[0].id)

//Append Player to box
let turn = true;
box.forEach(item => item.addEventListener('click', (event)=>{
    let player;

    if(isWin) {
        return;
    }
    if(item.childNodes.length > 0) {
        return;
    }
    if(turn) {
        player = document.createElement('p');
        player.classList.add('player-1');
        player1 = document.createTextNode('X');
        player.appendChild(player1);
        player1Game.push(item.id);
        drawGame.push(item.id);
    }
    else {
        player = document.createElement('p');
        player.classList.add('player-2');
        player2 = document.createTextNode('O');
        player.appendChild(player2);
        player2Game.push(item.id);
        drawGame.push(item.id);
    }
    turn = !turn;

    console.log(item.id);
    item.appendChild(player)


    const gameRules = {
        horizontal:[["box-1","box-2","box-3"], ["box-4","box-5","box-6"], ["box-7","box-8","box-9"]],
        vertical:[["box-1","box-4","box-7"], ["box-2","box-5","box-8"], ["box-3","box-6","box-9"]],
        diagonal: [["box-1", "box-5", "box-9"], ["box-3", "box-5", "box-7"]]
    }

    

    
    console.log(player1Game)
    console.log(player2Game)
    console.log((gameRules.horizontal[0]));
    console.log(gameRules.horizontal[0].every(element => player1Game.includes(element)));

    if(
        gameRules.horizontal[0].every(element => player1Game.includes(element)) ||
        gameRules.horizontal[1].every(element => player1Game.includes(element)) ||
        gameRules.horizontal[2].every(element => player1Game.includes(element)) ||
        gameRules.vertical[0].every(element => player1Game.includes(element)) ||
        gameRules.vertical[1].every(element => player1Game.includes(element)) ||
        gameRules.vertical[2].every(element => player1Game.includes(element)) ||
        gameRules.diagonal[0].every(element => player1Game.includes(element)) ||
        gameRules.diagonal[1].every(element => player1Game.includes(element))
    ) {
        console.log('Player 1 wins')
        isWin = true;
        win('Player 1')
        document.querySelectorAll(".player-1").forEach(item => item.classList.add('winner'));
    }
    else if (
        gameRules.horizontal[0].every(element => player2Game.includes(element)) ||
        gameRules.horizontal[1].every(element => player2Game.includes(element)) ||
        gameRules.horizontal[2].every(element => player2Game.includes(element)) ||
        gameRules.vertical[0].every(element => player2Game.includes(element)) ||
        gameRules.vertical[1].every(element => player2Game.includes(element)) ||
        gameRules.vertical[2].every(element => player2Game.includes(element)) ||
        gameRules.diagonal[0].every(element => player2Game.includes(element)) ||
        gameRules.diagonal[1].every(element => player2Game.includes(element))
    ) {
        console.log('Player 2 wins')
        isWin = true;
        win('Player 2')
        document.querySelectorAll(".player-2").forEach(item => item.classList.add('winner'));
    }
    else if(
        gameRules.horizontal[0].every(element => drawGame.includes(element)) &&
        gameRules.horizontal[1].every(element => drawGame.includes(element)) &&
        gameRules.horizontal[2].every(element => drawGame.includes(element)) &&
        gameRules.vertical[0].every(element => drawGame.includes(element)) &&
        gameRules.vertical[1].every(element => drawGame.includes(element)) &&
        gameRules.vertical[2].every(element => drawGame.includes(element)) &&
        gameRules.diagonal[0].every(element => drawGame.includes(element)) &&
        gameRules.diagonal[1].every(element => drawGame.includes(element))
    ) {
        console.log('draw');
        isWin = true;
        const winner = document.querySelector(".player-score");
        let message = document.createTextNode('Its a Draw');
        winner.style.display = 'flex';
        winner.appendChild(message);
        document.querySelectorAll(".player-1").forEach(item => item.classList.add('draw'));
        document.querySelectorAll(".player-2").forEach(item => item.classList.add('draw'));
    }
}) );








function win(playerWin) {
    const winner = document.querySelector(".player-score");
    let message = document.createTextNode(`${playerWin} Wins`);
    winner.style.display = 'flex';
    winner.appendChild(message);
}
