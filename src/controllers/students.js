import { createStudent, deleteStudentById, getAllStudents, getStudentById, upsertStudent } from "../services/students.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";


export const getStudentsController = async (req, res) => {
const { page, perPage } = parsePaginationParams(req.query);
const { sortBy, sortOrder } = req.query;

    const students = await getAllStudents({ page, perPage, sortBy, sortOrder });
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
      status: 201,
      message: `get one create student`,
      data: student,
    });

  };

  export const deleteStudentByIdController = async (req, res) => {
    const id = req.params.studentId;
    await deleteStudentById(id);
    res.status(204).send();
  };

  export const patchStudentController = async (req, res) => {
    const {body} = req;
    const {studentId} = req.params;
    const {student} = await upsertStudent(body, studentId);
    res.status(200).json({
      status: 200,
      message: `get patched student`,
      data: student,
    });

  };

  export const putStudentController = async (req, res) => {
    const { body } = req;
    const { studentId } = req.params;
    const { isNew, student } = await upsertStudent(body, studentId, {
      upsert: true,
    });
    const status = isNew ? 201 : 200;
    res.status(status).json({
      status,
      message: `get upserted student`,
      data: student,
    });
  };
