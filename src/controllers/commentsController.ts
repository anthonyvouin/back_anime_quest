import {FastifyReply, FastifyRequest} from "fastify";
import {AppDataSource} from "../data-source.js";
import {Movie} from "../entity/Movie.js";

export async function createComment(request: FastifyRequest, reply: FastifyReply) {
    try {
        const {body} = request as { body: { movie?: number } };
        let movie: Movie | null = null;
        if (body.movie) {
            movie = await AppDataSource.getRepository(Movie).findOne({where: {id: body.movie}});
        }
        if (!movie) {
            throw new Error('film non trouvé')
        }

        const comment = await AppDataSource.getRepository('Comments').save({...body, movie});
        return reply.send(comment);
    } catch (error) {
        return reply.status(500).send({error: (error as Error).message});
    }
}

export async function deleteComments(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const movie = await AppDataSource.getRepository('Comments').findOne({ where: { id } });
    if (movie) {
        await AppDataSource.getRepository('Comments').delete(id);
        return reply.send({ message: 'Commentaire supprimé avec succès', status: 200 });
    } else {
        return reply.status(404).send({ message: 'Film non trouvé' });
    }
}

