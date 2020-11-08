import express from 'express';
import { indexPage, messagePage } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagePage);

export default indexRouter;
