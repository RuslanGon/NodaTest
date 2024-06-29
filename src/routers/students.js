import { Router } from 'express';
import { createStudentController, deleteStudentByIdController, getStudentByIdController, getStudentsController, patchStudentController, putStudentController } from '../controllers/students.js';
import { ctrlWrapper } from '../middlewars/ctrlWrapper.js';
import { validateMongoId } from '../middlewars/validateMongoId.js';

const studentsRouter = Router();

studentsRouter.get('/students', validateMongoId, ctrlWrapper(getStudentsController) );

studentsRouter.get('/students/:studentId', validateMongoId, ctrlWrapper(getStudentByIdController) );

studentsRouter.post('/students', ctrlWrapper(createStudentController) );

studentsRouter.delete('/students/:studentId',validateMongoId, ctrlWrapper(deleteStudentByIdController) );

studentsRouter.patch('/students/:studentId', validateMongoId,  ctrlWrapper(patchStudentController) );

studentsRouter.put('/students/:studentId',validateMongoId, ctrlWrapper(putStudentController) );

export default studentsRouter;
