import { FastifyInstance } from 'fastify';
import { seedDatabase } from '../controllers/seederController.js';


export default async function seederRoutes(fastify: FastifyInstance) {
	fastify.get('/seed', seedDatabase);
}
