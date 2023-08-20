const socket = new WebSocket("ws://localhost:3000/ws");

socket.addEventListener("open", () => {
  console.log("WebSocket connection opened");
});

socket.addEventListener("message", (event) => {
  console.log(`Received message from server: ${event.data}`);
  // Handle received messages from the server
});

socket.addEventListener("close", () => {
  console.log("WebSocket connection closed");
});
