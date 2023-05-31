import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import router from './src/routes/index';

dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT;
const mode = process.env.NODE_ENV;

app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on mode ${mode} on port ${port}`);
});
