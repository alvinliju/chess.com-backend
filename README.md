# Chess Game Backend

A hobby project to explore WebSocket-based game management and real-time user interactions. This backend implementation serves as a learning ground for various concepts including user session management, real-time communication, and game state handling.

## 🎯 Learning Objectives

This project was created to understand:
- WebSocket implementation in Node.js
- Real-time user management and matchmaking
- Game state management
- Test-driven development with Jest
- Event-driven architecture

## 🛠 Tech Stack

- **Node.js** - Runtime environment
- **WebSocket (ws)** - Real-time communication
- **chess.js** - Chess move validation and game state management
- **Jest** - Testing framework
- **Babel** - JavaScript compiler

## 🚀 Features

- Real-time WebSocket communication
- Player matchmaking system
- Game state management
- Move validation
- Disconnect handling
- Automated testing suite

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/alvinliju/chess.com-backend.git

# Navigate to project directory
cd chess.com-backend

# Install dependencies
npm install
```

## 🧪 Running Tests

```bash
npm test
```

## 🏗 Project Structure

```
chess.com-backend/
├── src/
│   └── GameManager.js      # Core game management logic
├── tests/
│   └── GameManager.test.js # Test suite
├── .babelrc               # Babel configuration
├── jest.config.js         # Jest configuration
└── package.json          # Project dependencies and scripts
```

## 🎮 Game Flow

1. Player connects to WebSocket server
2. Player waits for opponent
3. When second player connects, game initializes
4. Players make moves alternately
5. Game ends when:
   - Checkmate occurs
   - Player disconnects
   - Player resigns

## 💡 Key Learnings

- WebSocket connection management
- Real-time event handling
- Test-driven development practices
- User session management
- Error handling in real-time applications

## 🔍 Future Improvements

- [ ] Add game history tracking
- [ ] Implement time controls
- [ ] Add support for game spectators
- [ ] Enhance error handling
- [ ] Add game position validation
- [ ] Implement draw offers

## 📝 Note

This is a learning project and not intended for production use. It serves as a playground for exploring various backend concepts and WebSocket implementation.

## 📄 License

MIT

---

*This project was created as a hobby project to learn about backend development, WebSocket implementation, and user management systems.*
```
