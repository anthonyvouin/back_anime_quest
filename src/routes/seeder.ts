import { FastifyInstance } from 'fastify';
import { seedDatabase } from '../controllers/seederController';


export default async function seederRoutes(fastify: FastifyInstance) {
	fastify.get('/api/seed', seedDatabase);
}
