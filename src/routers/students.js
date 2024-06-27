import { Router } from "express";
import { getAllStudents, getStudentById } from "../services/students.js";

const studentsRouter = Router();

studentsRouter.get('/students', async (req, res) => {
    const students = await getAllStudents();
    res.json({
      status: 200,
      message: 'get all students',
      data: students
    });
  });

  studentsRouter.get('/students/:studentId', async (req, res) => {
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

  export default studentsRouter;
