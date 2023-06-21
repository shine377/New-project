import { DataSource } from "typeorm";

const myDataSource = async () => {
  try {
    await new DataSource({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "Shine-serber",
      password: "Shine107&.",
      database: "Project",
      logging: true,
      synchronize: true,
    });

    console.log("connected");
  } catch (error) {
    console.error(error);
    throw new Error("unable to connect");
  }
};

myDataSource()