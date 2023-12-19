# video-streaming

video streaming server using ffmpeg in Node.js. This example uses express for the web server and child_process to spawn an ffmpeg process for video streaming.
Prerequisites:
1.Make sure you have Node.js installed on your machine.
2.Install the required npm packages:
	npm init -y
	npm install express
3.Make sure you have ffmpeg installed on your system. You can download it from https://ffmpeg.org/download.html or install it using a package manager.

This example creates a basic video streaming server using Node.js and ffmpeg. It uses HTTP streaming, and the video is accessible at the /video endpoint. When a client requests the video, an ffmpeg process is spawned to stream the video content to the client's browser.