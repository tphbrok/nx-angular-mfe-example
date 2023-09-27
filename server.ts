import express from 'express';
import path from 'path';
import cors from 'cors';

// Server to host the host app
express()
  .use(cors())
  .use(express.static(path.join(__dirname, '/dist/host')))
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/host/index.html'));
  })
  .listen(4200, () => {
    console.log('server running at http://localhost:4200');
  });

// Server to host the mfe-1 microfrontend
express()
  .use(cors())
  .use(express.static(path.join(__dirname, '/dist/mfe-1')))
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/mfe-1/index.html'));
  })
  .listen(4201, () => {
    console.log('server running at http://localhost:4201');
  });
