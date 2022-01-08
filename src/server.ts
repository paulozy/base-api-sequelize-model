import express, { Request, Response } from 'express'
import path from 'path'
import dotenv from 'dotenv'
import { routes } from './routes'
import { db } from './database'

dotenv.config()

const app = express()

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.use((req: Request, res: Response) => {
  res.status(400)
  res.json({ error: 'Not found!' })
})

app.listen(process.env.PORT, async () => {
  await db.sync()
  console.log(`listening on port ${process.env.PORT}`)
})