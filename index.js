import 'dotenv/config.js'
import express from 'express'
import { CreateUserController } from './src/controllers/create-user.js'
import { GetUserByIdController } from './src/controllers/get-user-by-id.js'
import { UpdateUserController } from './src/controllers/update-user.js'

const app = express()

app.use(express.json())

app.post('/api/users', async (request, response) => {
    const createUserController = new CreateUserController()

    const createUserResponse = await createUserController.execute(request)

    response.status(createUserResponse.statusCode).json(createUserResponse.body)
})

app.patch('/api/users/:userId', async (request, response) => {
    const updateUserController = new UpdateUserController()

    const { statusCode, body } = await updateUserController.execute(request)

    response.status(statusCode).send(body)
})

app.get('/api/users/:userId', async (request, response) => {
    const getUserByIdController = new GetUserByIdController()

    const { statusCode, body } = await getUserByIdController.execute(request)

    response.status(statusCode).send(body)
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})
