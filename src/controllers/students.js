import { createStudent, getAllStudents, getStudentById } from "../services/students.js";

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
    res.json({
      status: 200,
      message: `get one student by id ${id}`,
      data: student,
    });
  };

  export const createStudentController = async (req, res) => {
    const {body} = req;
    const student = await createStudent(body);
    res.status(201).json({
      status: 200,
      message: `get one create student`,
      data: student,
    });

  };
