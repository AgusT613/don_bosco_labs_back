import { pool } from "../db/config.js"
import { Request, Response } from "express"

export const getStaff = async (req: Request, res: Response) => {
    const response = await pool.query("SELECT * FROM staff")
    res.json(response.rows)
}

export const postStaff = (req: Request, res: Response) => {
    // POST
}

export const putStaff = (req: Request, res: Response) => {
    // UPDATE
}

export const deleteStaff = (req: Request, res: Response) => {
    // Delete
}