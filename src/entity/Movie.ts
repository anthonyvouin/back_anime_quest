import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany} from "typeorm";
import { Category } from "./Categories.js";
import {Comments} from "./Comments.js";

@Entity()
export class Movie {
	@PrimaryGeneratedColumn()
	id!: number

	@Column('varchar')
	original_name!: string

	@Column('text')
	overview!: string

	@Column('varchar')
	original_language!: string

	@Column({ type: "simple-array" })
	origin_country!: string[]

	@Column('date')
	first_air_date!: string

	@Column('float')
	vote_average!: number

	@Column('float')
	vote_count!: number

	@Column('float')
	popularity!: number

	@Column('boolean')
	adult!: boolean

	@Column('varchar')
	backdrop_path!: string

	@Column('varchar')
	poster_path!: string

	@ManyToMany(() => Category, (category) => category.movies)
	@JoinTable()
	categories!: Promise<Category[]>;

	@OneToMany(() => Comments, (comment) => comment.movie, { cascade: true })
	comments!: Promise<Comments[]>;
}
