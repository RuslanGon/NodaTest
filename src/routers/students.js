import { Router } from 'express';
import { createStudentController, deleteStudentByIdController, getStudentByIdController, getStudentsController } from '../controllers/students.js';
import { ctrlWrapper } from '../middlewars/ctrlWrapper.js';

const studentsRouter = Router();

studentsRouter.get('/students', ctrlWrapper(getStudentsController) );

studentsRouter.get('/students/:studentId', ctrlWrapper(getStudentByIdController) );

studentsRouter.post('/students', ctrlWrapper(createStudentController) );

studentsRouter.delete('/students/:studentId', ctrlWrapper(deleteStudentByIdController) );


export default studentsRouter;
