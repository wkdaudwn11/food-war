import express from 'express';
import serverless from 'serverless-http';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors'; // CORS를 허용하기 위한 모듈

/** Import router */
import userRouter from './router/userRouter';

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));

/** CORS 관련 코드 시작 */
var whitelist = ['https://wkdaudwn11.github.io'];
var corsOptions = {
  origin: function(origin, callback) {
    // whiteList에 속하거나, 자기자신일 경우엔 CORS 허용
    if (whitelist.indexOf(origin) !== -1 || origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));
/** CORS 관련 코드 시작 */

/** Routing */
app.use('/user', userRouter);

const PORT = process.env.PORT || 4000;
const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}..`);

app.listen(PORT, err => {
  if (err) {
    return console.log(err);
  }
  handleListening();
});

export const handler = serverless(app);
