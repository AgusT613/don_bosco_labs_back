import { DatabaseError } from "pg"
import { pool } from "../db/config.js"
import { Request, Response } from "express"

export const getStaff = async (req: Request, res: Response) => {
    const response = await pool.query("SELECT * FROM staff")
    res.json(response.rows)
}

export const getStaffById = async (req: Request, res: Response) => {
    const user_id = req.params.id
    try {
        const query = {
            text: "SELECT * FROM staff WHERE user_id = $1",
            values: [user_id]
        }
        const response = await pool.query(query)
        return res.json(response.rows[0] || response.rows)
    } 
    catch (error: any) {
        if (error instanceof DatabaseError) {
            console.error(error);
            return res.json({ message: `Failed to get user with id ${user_id}`})
        }
    }
}

export const postStaff = async (req: Request, res: Response) => {
    const { name, surname, address, dni, email, password, entry_date, area_id, job_position_id } = req.body

    if (!name || !surname || !email || !password) {
        res.status(404).json({message: "$name, $surname, $email, $password are required"})
    }

    try {
        const query = {
            text: "INSERT INTO staff(name, surname, address, dni, email, password, entry_date, area_id, job_position_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",
            values: [name, surname, address, dni, email, password, entry_date, area_id, job_position_id]
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

export const putStaff = async (req: Request, res: Response) => {
    try {
        const user_id = req.params.id
        const { name, surname, address, dni, email, password, entry_date, area_id, job_position_id } = req.body
        const query = {
            text: "UPDATE staff SET name=$1, surname=$2, address=$3, dni=$4, email=$5, password=$6, entry_date=$7, area_id=$8, job_position_id=$9 WHERE user_id=$10 RETURNING *",
            values: [name, surname, address, dni, email, password, entry_date, area_id, job_position_id, user_id]
        }
        const response = await pool.query(query)
        return res.json({
            message: `User ${name} with id ${user_id} was updated successfully`,
            data: response.rows[0]
        })
    }
    catch (error: any) {
        if (error instanceof DatabaseError) {
            console.error(error);
            return res.json({message: error})
        }
    }
}

export const deleteStaff = async (req: Request, res: Response) => {
    const user_id = req.params.id
    try {
        const query = {
            text: "DELETE FROM staff WHERE user_id=$1 RETURNING *",
            values: [user_id]
        }
        await pool.query(query)
        return res.json({ message: `User with id ${user_id} was deleted successfully` })
    } 
    catch (error: any) {
        if (error instanceof DatabaseError) {
            console.error(error);
            return res.json({message: error})
        }
    }
}