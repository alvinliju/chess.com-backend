import { GameManager } from "../src/GameManager.js";

class MockWebSocket {
  constructor() {
    this.messages = [];
  }

  send(message) {
    this.messages.push(JSON.parse(message));
  }
}

describe("GameManager", () => {
  let gameManager;
  let player1;
  let player2;

  beforeEach(() => {
    gameManager = new GameManager();
    player1 = new MockWebSocket();
    player2 = new MockWebSocket();
  });

  test("should add users and create game", () => {
    gameManager.addUser(player1);
    expect(player1.messages[0]).toEqual({
      type: "waiting",
      message: "Waiting for opponent",
    });

    gameManager.addUser(player2);
    expect(player1.messages[1]).toEqual({
      type: "game_start",
      color: "white",
    });
    expect(player2.messages[0]).toEqual({
      type: "game_start",
      color: "black",
    });
  });

  test("should handle valid moves", () => {
    gameManager.addUser(player1);
    gameManager.addUser(player2);

    gameManager.handleMove(player1, { from: "e2", to: "e4" });
    expect(player1.messages[2].type).toBe("move");
    expect(player2.messages[1].type).toBe("move");
  });

  test("should handle player disconnection", () => {
    gameManager.addUser(player1);
    gameManager.addUser(player2);

    gameManager.removeUser(player1);
    expect(player2.messages[1]).toEqual({
      type: "game_over",
      reason: "opponent_disconnected",
    });
  });
});
