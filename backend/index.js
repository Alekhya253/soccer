import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';

const app = express();
const PORT = 3000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/soccerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get('/', (req, res) =>
  res.send(`Our Soccer application is running on port ${PORT}`)
);

app.listen(PORT, () => {
  console.log(`Your Soccer server is running on ${PORT}`);
});
