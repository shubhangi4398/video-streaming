# video-streaming

Live Streaming in node js
Creating a live streaming application in Node.js involves using technologies that support real-time communication between the server and clients. One common approach is to use WebSockets for real-time bidirectional communication. Below is a simple example using the express framework and the socket.io library to achieve live streaming.

Install the required npm packages:
npm install express socket.io
In this example, the server listens for WebSocket connections and broadcasts images received from the webcam of one client to all connected clients. The client-side script captures webcam images, converts them to base64-encoded JPEG format, and emits them to the server. The server then broadcasts these images to all connected clients, and each client displays the received images.
Remember to replace the video element with your preferred HTML5 video player or customize the code to suit your specific requirements. Additionally, this example uses the setInterval function to capture and emit images every 1/30th of a second; adjust this interval based on your application's needs.