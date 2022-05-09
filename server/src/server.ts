import express from 'express'
import cors from 'cors'
import { router } from './routes'
import dotenv from  'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb'}))
app.use(router)

app.listen(3333, () => {
    console.log('Server running on port 3333')
})
