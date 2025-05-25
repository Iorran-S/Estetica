import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import pg from 'pg'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // necessário para Render
})

app.get('/api/hello', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() as now')
    res.json({ message: 'Olá do servidor!', dbTime: result.rows[0].now })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
