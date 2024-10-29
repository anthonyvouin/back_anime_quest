import Fastify from 'fastify'
import cors from '@fastify/cors'
import 'dotenv/config'
import movieRoutes from './src/routes/movies';
import categoryRoutes from './src/routes/categories';
import seederRoutes from './src/routes/seeder';
import { AppDataSource } from './src/data-source';


const startServer = async () => {
	const fastify = Fastify({
		logger: true,
	})

	await fastify.register(cors, {
		origin: '*',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
	});

	await fastify.register(movieRoutes);
	await fastify.register(categoryRoutes);
	await fastify.register(seederRoutes)

	try {
		await fastify.listen({ port: 3000 });
		await AppDataSource.initialize();
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};

startServer();