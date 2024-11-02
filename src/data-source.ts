import "reflect-metadata"
import {DataSource} from "typeorm"
import {entities} from "./config/entities.js";

const db = process.env.DATABASE

export const AppDataSource: DataSource = new DataSource({
    type: "postgres",
    url: db,
    synchronize: true,
    logging: false,
    entities: entities,
    migrations: [],
    subscribers: [],
});