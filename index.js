import 'dotenv/config'
import express from 'express'

const app = express()

app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log('listening os port 8000')
})
