import express, { Request, Response } from "express"
// Import api endpoints
import { routes } from "./routes.js"
// Import api router
import { api } from "./api/index.js"
// Dotenv config
import { EXPRESS_PORT } from "./dotenv.config.js"

const app = express()
app.use(api)

app.get(routes.home, (req: Request, res: Response) => {
    res.json({
        message: "Servidor Don Bosco Labs"
    })
})

app.listen(EXPRESS_PORT, ()=>{
    console.log(`Listening on port ${EXPRESS_PORT}:\n\thttp://localhost:${EXPRESS_PORT}`);
})