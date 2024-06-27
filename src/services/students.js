import { Student } from "../db/models/student.js";

export const getAllStudents = async () => {
// throw new Error('some error!!!');
return await Student.find({});
};


export const getStudentById = async (id) => {
return await Student.findById(id);
};
