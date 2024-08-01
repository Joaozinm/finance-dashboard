import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'

import { PostgresCreateUserRepository } from '../repositories/postgres/create-user.js'
import { PostgresGetUserByEmailRepository } from '../repositories/postgres/get-user-by-email.js'
import { EmailAlreadyInUseError } from '../errors/user.js'

export class CreateUserUseCase {
    async execute(createUserParams) {
        const postgreEmailCheck = new PostgresGetUserByEmailRepository()

        const emailChecking = await postgreEmailCheck.execute(
            createUserParams.email,
        )

        if (emailChecking) {
            throw new EmailAlreadyInUseError(createUserParams.email)
        }
        // generate user ID
        const userId = uuidv4()

        // encrypt password
        const hashedPassword = await bcrypt.hash(createUserParams.password, 10)

        // insert user on db
        const user = {
            ...createUserParams,
            id: userId,
            password: hashedPassword,
        }

        //call repositoy
        const postgresCreateUserRepository = new PostgresCreateUserRepository()

        const createdUser = await postgresCreateUserRepository.execute(user)

        return createdUser
    }
}
