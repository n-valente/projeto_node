import express from 'express'
import cors from  'cors'
import 'dotenv/config'
import  {routeIndex}  from './routes/index.js'
const app = express()
app.use(express.json())
app.use('/', routeIndex)
app.use(cors())
const PORT = process.env.PORT || 3030
app.listen(PORT, ()=> console.log('Servidor rodando na porta ' + PORT))