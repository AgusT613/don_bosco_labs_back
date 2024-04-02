import express, {Request, Response} from "express"
import { EXPRESS_PORT } from "./config/dotenv.config.js"

const app = express()

app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Servidor Don Bosco Labs",
        statusCode: res.statusCode
    })
})

app.listen(EXPRESS_PORT, ()=>{
    console.log(`Listening on port ${EXPRESS_PORT}:\n\thttp://localhost:${EXPRESS_PORT}`);
})