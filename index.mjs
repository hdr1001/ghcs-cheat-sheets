import express from 'express';

const app = express();

const port = 3003;

app.get('/', (req, res) => {
  res.send('My cheat cheets hosted on GitHub Codespaces')
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`)
});
