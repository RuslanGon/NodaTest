import createHttpError from "http-errors";
import { Student } from "../db/models/student.js";

const createPaginationInformation = (page, perPage, count) => {


  return {
    page,
    perPage,
    totalItems: count,
    totalPages:
    hasPreviosPage:
    hasNextPage:
  };
};

export const getAllStudents = async ({ page = 1, perPage = 5}) => {
const skip = perPage * (page - 1);
const students = await Student.find().skip(skip).limit(perPage);
const studetnsCount = await Student.find().countDocuments()

const paginationInformation = createPaginationInformation(page, perPage, studetnsCount)
return {
  students,
...paginationInformation
}
};

export const getStudentById = async (id) => {
const student = await Student.findById(id);
if (!student) {
    throw createHttpError(404, 'Student not faund!!!');
  }
  return student;
};

export const createStudent = async (payload) => {
  const student = await Student.create(payload);

    return student;
};

export const deleteStudentById = async (studentId) => {
await Student.findByIdAndDelete(studentId);
};

export const upsertStudent = async (id, payload, options= {}) => {
  const rawResult = await Student.findByIdAndUpdate(id, payload, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });

  if (!rawResult || !rawResult.value) {
    throw createHttpError(404, 'Student not faund!!!');
  }
  return{
    student: rawResult.value,
    isNew: !rawResult?.lastErrorObject?.updatedExisting
  } ;
};
