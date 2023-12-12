import express from 'express';
import remindersRouter from '../routers/reminders';

const app = express();
const port = 3000;

app.use(express.json());
app.use('./reminders', remindersRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port} `);
});
