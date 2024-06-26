import { Request, Response, Router } from "express";
import { routes } from "../routes.js";
import { getStaff, postStaff, putStaff, deleteStaff, getStaffById } from "./controllers/staff.controller.js";

export const api = Router()

api.get(routes.api.index, (req: Request, res: Response) => {
    res.json({ message: "API REST Don Bosco Labs" })
})

// Staff
api.get(routes.api.staff, getStaff)
api.get(`${routes.api.staff}/:id`, getStaffById)
api.post(routes.api.staff, postStaff)
api.put(`${routes.api.staff}/:id`, putStaff)
api.delete(`${routes.api.staff}/:id`, deleteStaff)