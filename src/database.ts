import { getConnectionManager } from "typeorm";

export default async function connect () {
  const connectionManager = await getConnectionManager();
  const connection = connectionManager.create({
    name: "default",
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [`${process.env.NODE_ENV === 'production' ? 'dist' : 'src'}/entities/*.*`],
    ssl: process.env.NODE_ENV === 'production'
  });
  await connection.connect();
  return connection;
}
