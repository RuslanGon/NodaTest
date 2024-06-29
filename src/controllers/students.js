import { Types } from "mongoose";
import { createStudent, deleteStudentById, getAllStudents, getStudentById, upsertStudent } from "../services/students.js";
import createHttpError from "http-errors";

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

    if(Types.ObjectId.isValid(id)){
return next(createHttpError(400, 'Invalid Id'));
    }

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
