import express from 'express';
import { indexPage, messagePage, addMessage } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagePage);
indexRouter.post('/messages', addMessage);

export default indexRouter;
