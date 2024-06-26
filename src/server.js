import express from 'express';
import cors from 'cors';
import { env } from './utils/env.js';
import { ENV_VARS } from './constants/index.js';
import { notFaundMiddleware } from './middlewars/notFaundMiddleware.js';
import { errorMiddleware } from './middlewars/errorMiddleware.js';
import { getAllStudents, getStudentById } from './services/students.js';




const app = express();

app.use(cors());

app.get('/students', async (req, res) => {
  const students = await getAllStudents();
  res.json({
    status: 200,
    message: 'get all students',
    data: students
  });
});

app.get('/students/:studentId', async (req, res) => {
  const id = req.params.studentId;
  const student = await getStudentById();

  if (!student) {
    res.status(404).json({
      status: 404,
      message: `get one student by id ${id} not faund`,
      data: student,
    });
  }

  res.json({
    status: 200,
    message: `get one student by id ${id}`,
    data: student,
  });
});


app.use(notFaundMiddleware);
app.use(errorMiddleware);

const PORT = env(ENV_VARS.PORT, 3000);

export const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
