import {userRoutes} from './userRoutes.js'
import { Router } from "express";
export const routeIndex = Router()
// routeIndex.use('/user',(req,res)=> res.json({dd:'dd'}))
routeIndex.use('/user',userRoutes)
