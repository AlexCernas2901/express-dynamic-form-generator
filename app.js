// inicializar servidor con express
import express from 'express'
import { dbConection } from './src/db.js'
import formRoutes from './src/routes/routes.js'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use(cors())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/forms', formRoutes)

dbConection()
app.listen(port, () => {
  console.log(`Server on port ${port}`)
})
