const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let students = [];

app.get('/students', (req, res) => {
  res.json(students);
});

app.post('/createStudent', (req, res) => {
  const { id, name } = req.body;
  students.push({ id, name });
  res.status(201).json({ message: 'Student created' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
