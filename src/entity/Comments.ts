import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation} from "typeorm";
import { Movie } from "./Movie.js";

@Entity()
export class Comments {
    @PrimaryGeneratedColumn()
    id!: number

    @Column('varchar')
    pseudo!: string

    @Column('text')
    comment!: string

    @ManyToOne(() => Movie, (movie) => movie.comments, { onDelete: 'CASCADE' })
    movie!: Relation<Movie>;
}