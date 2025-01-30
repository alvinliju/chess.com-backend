import { INIT_GAME, MOVE, GAME_OVER } from './messages.js';
import { Chess } from "chess.js";

export class Game {

    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.board = new Chess();
        this.moves = [];
        this.startTime = new Date();

        //assigning b or w to the players
        this.player1.send(JSON.stringify({
            type: INIT_GAME,
            payload: {
                color: "white"
            }
        }));

        this.player2.send(JSON.stringify({
            type: INIT_GAME,
            payload: {
                color: "black"
            }
        }));
    }

    //whenever any move is made the validation and checks are done here
    makeMove(socket, move) {
        // Validate player move by .history() a special arrray provided by chess.js which stores prev moves
        if (this.board.history().length % 2 === 0 && socket !== this.player1) {
            console.log("Invalid move: not player 1's turn");
            return;
        }
        if (this.board.history().length % 2 === 1 && socket !== this.player2) { // we decide a players chance by dividing nth move by 2, one player takes off and other takes even..
            console.log("Invalid move: not player 2's turn");
            return;
        }

        console.log("making move", move);

        try {
            const result = this.board.move(move);
            if (result === null) {
                console.log("Invalid move: move is not legal");
                return;
            }
        } catch (e) {
            console.log("Error making move:", e);
            return;
        }

        console.log("move success");

        // Check if game is over
        if (this.board.isGameOver()) {
            const winner = this.board.turn() === "w" ? "black" : "white";
            this.player1.send(JSON.stringify({
                type: GAME_OVER,
                payload: {
                    winner
                }
            }));
            this.player2.send(JSON.stringify({
                type: GAME_OVER,
                payload: {
                    winner
                }
            }));
            return;
        }

        console.log("Move Made");
        if (this.board.history().length % 2 === 0) {
            console.log("send to player 1");
            this.player1.send(JSON.stringify({
                type: MOVE,
                payload: {
                    move
                }
            }));
        } else {
            console.log("send to player 2");
            this.player2.send(JSON.stringify({
                type: MOVE,
                payload: {
                    move
                }
            }));
        }
    }
}