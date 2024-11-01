import "reflect-metadata"
import {DataSource} from "typeorm"
import {Movie} from "./entity/Movie.js"
import {Category} from "./entity/Categories.js"
import {Comments} from "./entity/Comments";

const db = process.env.DATABASE

export const AppDataSource: DataSource = new DataSource({
    type: "postgres",
    url: db,
    synchronize: true,
    logging: false,
    entities: [Movie, Category, Comments],
    migrations: [],
    subscribers: [],
});