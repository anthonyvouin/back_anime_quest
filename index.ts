import Fastify from 'fastify'
import cors from '@fastify/cors'
import 'dotenv/config'
import movieRoutes from './src/routes/movies.js';
import categoryRoutes from './src/routes/categories.js';
import seederRoutes from './src/routes/seeder.js';
import {AppDataSource} from './src/data-source.js';
import commentsRoutes from "./src/routes/comments";


const startServer = async (): Promise<void> => {
    const fastify = Fastify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    });

    await fastify.register(movieRoutes);
    await fastify.register(categoryRoutes);
    await fastify.register(commentsRoutes);
    await fastify.register(seederRoutes)

    try {
        await fastify.listen({port: 3000});
        await AppDataSource.initialize();
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

startServer();