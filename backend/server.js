import express from 'express'
import path from 'path'
import connectDb from './config/db.js'

dotenv.config()

connectDb()

const app = express()

app.use(express.json())