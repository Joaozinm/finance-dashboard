import { PostgresHelper } from '../db/postgres/helper.js'

export const badRequest = (body) => ({
    statusCode: 400,
    body,
})

export const created = (body) => ({
    statusCode: 201,
    body,
})

export const serverError = () => ({
    statusCode: 500,
    body: {
        message: 'Internal server error',
    },
})

export class PostgresEmailCheck {
    async execute(param) {
        const passedEmail = await PostgresHelper.query(
            'SELECT EXISTS (SELECT 1 FROM users WHERE email = $1) AS "exists"',
            [param],
        )
        return passedEmail
    }
}

export const ok = (body) => ({
    statusCode: 200,
    body,
})
