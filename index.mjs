import express from 'express';

const app = express();

const port = 3001;

app.get('/', (req, res) => {
  res.send('My cheat sheets hosted on GitHub Codespaces')
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`)
});
