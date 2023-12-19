const express = require('express');
const { spawn } = require('child_process');
const app = express();
const port = 3001;

app.get('/video', (req, res) => {
  // Replace 'path/to/your/video.mp4' with the path to your video file
  const videoPath = 'metapreview.mp4';

  // Set content type to 'video/mp4' for proper video streaming
  res.header('Content-Type', 'video/mp4');

  // FFmpeg command
  const ffmpeg = spawn('ffmpeg', [
    '-i', videoPath,
    '-c:v', 'libx264',
    '-c:a', 'aac',
    '-movflags', 'frag_keyframe+empty_moov',
    '-f', 'mp4',
    'pipe:1'
  ]);

  // Pipe FFmpeg output to response
  ffmpeg.stdout.pipe(res);

  // Handle FFmpeg errors
  ffmpeg.stderr.on('data', (data) => {
    console.error(`FFmpeg stderr: ${data}`);
  });

  ffmpeg.on('close', (code) => {
    if (code !== 0) {
      console.error(`FFmpeg process exited with code ${code}`);
      res.status(500).end('Internal Server Error');
    } else {
      console.log('Streaming finished');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
