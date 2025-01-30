import {Game} from "./Game.js";
import {WebSocket} from "ws";

export class GameManager {

    constructor() {
        this.pendingUser = null;
        this.users = []
        this.games = []; // games property is created and initialized here
    }

    addUser(socket) {
        this.users.push(socket);
        this.addHandler(socket);
    }

    removeUser(socket) {
        this.users = this.users.find(user => user !== socket);
    }

    //handles socket events and routes it accordingly
    addHandler(socket) {
        socket.on("message", (data)=>{
            const message = JSON.parse(data);
            if(message.type == "init_game"){
                if(this.pendingUser){
                    //start game
                    const game = new Game(socket, this.pendingUser)
                    this.games.push(game);
                }else{
                    this.pendingUser = socket; // pendingUser is assigned the value of socket
                }
            }

            if(message.type == "move"){
                const game = this.games.find(game => game.player1 === socket || game.player2 === socket);
                if(game){
                    game.makeMove(socket, message.move);
                }
            }
        })
        
    }
}

