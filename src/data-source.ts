import "reflect-metadata"
import { DataSource } from "typeorm"
import { Movie } from "./entity/Movie.js"
import { Category } from "./entity/Categories.js"

const db = process.env.DATABASE

export const AppDataSource = new DataSource({
    type: "postgres",
    url: db,
    synchronize: true,
    logging: false,
    entities: [Movie, Category],
    migrations: [],
    subscribers: [],
});