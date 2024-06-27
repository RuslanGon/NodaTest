import { getAllStudents, getStudentById } from "../services/students.js";

export const getStudentsController = async (req, res) => {
    const students = await getAllStudents();
    res.json({
      status: 200,
      message: 'get all students',
      data: students,
    });
};

export const getStudentByIdController = async (req, res) => {
    const id = req.params.studentId;
    const student = await getStudentById(id);

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
  };


