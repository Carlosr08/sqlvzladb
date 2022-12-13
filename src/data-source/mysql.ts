//import { createPool, Pool } from "mysql2/promise";
import { createPool, Pool } from "mysql2/promise";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT } from "../config";

export async function connect(): Promise<Pool> {
  const connection = await createPool({
    user: 'root',
    password: 'OTJVS2vtQnTikEFi8uym',
    host: 'containers-us-west-104.railway.app',
    port: '3306',
    database: 'railway',
  });
  return connection;
}

connect();
