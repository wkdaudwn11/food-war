import express from 'express';

const app = express();

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(4000, err => {
  if (err) {
    return console.log(err);
  }
  console.log('Server is running on port 4000..');
});
