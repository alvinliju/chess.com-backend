### Chess.com fullstack application

##### Why build this?
- wanted to learn how to connect frontend-backend
- scaling
- scoket.io
- system design
- building proper react frontend


## Architecture
-> Scenario: we have 2 browsers and the evetns happening in a browser should be pushed to other users browsers
- we cant use http coz its stateless
- using webscokets is the easiest way to do this, using this for connection persistance
- init_game -> ws remembers that browser 1 is waiting till another user calls init_game and pairs them togther


### Intresting stuffs learned
-> **React Routes**: routes are used to define the different paths in your application and the components that should be rendered when those paths are accessed. React Router is a popular library for handling routing in React applications.
- **WebSocket Communication**: Implementing real-time communication using WebSockets to enable persistent connections between the server and clients.
- **Game State Management**: Managing the state of the chess game on the server, including tracking player moves, game status, and turn validation.
- **User Management**: Handling multiple users and pairing them for a game session, managing user connections and disconnections gracefully.
- **Error Handling**: Implementing robust error handling to manage invalid moves, connection issues, and other potential errors.
- **Scalability Considerations**: Designing the backend to handle multiple concurrent games and users, considering how to scale the application as the number of users grows.
- **System Design**: Designing the overall architecture of the application, ensuring that the system is modular and maintainable.