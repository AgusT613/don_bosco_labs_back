import express, {Request, Response} from "express"

const app = express()

app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Servidor Don Bosco Labs",
        statusCode: res.statusCode
    })
})

app.listen(8080, ()=>{
    console.log("Listening on port 8080:\n\thttp://localhost:8080");
})