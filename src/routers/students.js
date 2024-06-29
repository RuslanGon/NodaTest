import { Router } from 'express';
import {
  createStudentController,
  deleteStudentByIdController,
  getStudentByIdController,
  getStudentsController,
  patchStudentController,
  putStudentController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../middlewars/ctrlWrapper.js';
import { validateMongoId } from '../middlewars/validateMongoId.js';
import { validateBody } from '../middlewars/validateBody.js';
import { createStudentSchema } from '../validation/createStudentSchema.js';



const studentsRouter = Router();

studentsRouter.use('/students/:studentId', validateMongoId('studentId'),);

studentsRouter.get(
  '/students',
  ctrlWrapper(getStudentsController),
);

studentsRouter.get(
  '/students/:studentId',
  ctrlWrapper(getStudentByIdController),
);

studentsRouter.post('/students',validateBody(createStudentSchema), ctrlWrapper(createStudentController));

studentsRouter.delete(
  '/students/:studentId',
  ctrlWrapper(deleteStudentByIdController),
);

studentsRouter.patch(
  '/students/:studentId',
  ctrlWrapper(patchStudentController),
);

studentsRouter.put(
  '/students/:studentId',
  ctrlWrapper(putStudentController),
);

export default studentsRouter;
