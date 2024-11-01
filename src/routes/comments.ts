import { FastifyInstance } from 'fastify';
import {createComment, deleteComments} from "../controllers/commentsController";

export default async function commentsRoutes(fastify: FastifyInstance) {
    fastify.post('/api/comments', createComment);
    fastify.delete('/api/comments/:id', deleteComments);

}
