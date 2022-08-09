import { Router } from 'express'
export const userRoutes = Router()
userRoutes.post('/create', (req, res)=>{
    return res.json({data:'sss'})
})
// userRoutes.get('list', ()=>{})
// userRoutes.get('show', ()=>{})
// userRoutes.put('update', ()=>{})
// userRoutes.delete('delete', ()=>{})