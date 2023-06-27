import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./User"

 export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Shine107&.",
    database: "Project",
    logging: false,
    synchronize: true,
    entities: [User]
})