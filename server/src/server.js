import express from 'express';
import serverless from 'serverless-http';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

/** Import router */
import userRouter from './router/userRouter';

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));

/** Routing */
app.use('/user', userRouter);

const PORT = process.env.PORT || 4000;
const handleListening = () => console.log(`Listening on: http://localhost:${PORT}..`);

app.listen(PORT, err => {
  if (err) {
    return console.log(err);
  }
  handleListening();
});

export const handler = serverless(app);
