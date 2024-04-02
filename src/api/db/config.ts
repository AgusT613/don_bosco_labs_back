import pkg from "pg"
import { PG_DATABASE, PG_HOST, PG_PASSWORD, PG_PORT, PG_USER } from "../../dotenv.config.js";

const { Pool } = pkg
const config = {
    host: PG_HOST,
    // fix dotenv-type-checking-typescript
    port: 5432 || PG_PORT,
    database: PG_DATABASE,
    user: PG_USER,
    password: PG_PASSWORD
}

export const pool = new Pool(config)