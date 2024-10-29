import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User.js"
import { Movie } from "./entity/Movie.js"
import { Category } from "./entity/Categories.js"

export const AppDataSource = new DataSource({
	type: "sqlite",
	database: "database.sqlite",
	synchronize: true,
	logging: false,
	entities: [User, Movie, Category],
	migrations: [],
	subscribers: [],
})
