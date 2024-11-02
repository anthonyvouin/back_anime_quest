import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, Relation} from "typeorm"
import { Movie } from "./Movie.js";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number | undefined

    @Column('varchar')
    name: string | undefined

    @Column('varchar', {nullable: true})
    description: string | undefined

    @ManyToMany(() => Movie, (movie) => movie.categories)
    movies!: Relation<Movie[]|undefined>;
}
