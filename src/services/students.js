import { Student } from "../db/models/student.js";

export const getAllStudents = async () => {
// throw new Error('some error!!!');
return await Student.find({});
};


export const getStudentById = async (id) => {
const student = await Student.findById(id);
if (!student) {
    throw new Error('Student was not faund');
  }
  return student;
};
