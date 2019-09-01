import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

app.listen(4000, err => {
  if (err) {
    return console.log(err);
  }
  console.log('Server is running on port 4000..');
});

export const handler = serverless(app);
