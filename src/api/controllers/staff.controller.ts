import { DatabaseError } from "pg"
import { pool } from "../db/config.js"
import { Request, Response } from "express"

export const getStaff = async (req: Request, res: Response) => {
    const response = await pool.query("SELECT * FROM staff")
    res.json(response.rows)
}

export const postStaff = async (req: Request, res: Response) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(404).json({message: "$email and $password are required"})
    }

    try {
        const query = {
            text: "INSERT INTO staff(email, password) VALUES ($1, $2) RETURNING *",
            values: [email, password]
        }
        const response = await pool.query(query)
        res.json({message: "User created succesfully", data: response.rows[0]})
    } 
    catch (error: any) {
        if (error instanceof DatabaseError) {
            const detail = error.detail
            const name = error.name
            res.json({message: `${name}: ${detail}`})
        } else {
            res.json({message: error})
        }
    }
}

export const putStaff = (req: Request, res: Response) => {
    // UPDATE
}

export const deleteStaff = (req: Request, res: Response) => {
    // Delete
}