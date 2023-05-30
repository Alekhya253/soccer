import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/soccerRoutes';
import cors from 'cors';

const app = express();
const PORT = 4000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/soccerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//CORS setup
app.use(cors());

routes(app);

app.get('/', (req, res) =>
  res.send(`Our Soccer application is running on port ${PORT}`)
);

app.listen(PORT, () => {
  console.log(`Your Soccer server is running on ${PORT}`);
});
