import { Student } from "../db/models/student";

export const getAllStudents = async () => {
return await Student.find({});
};
