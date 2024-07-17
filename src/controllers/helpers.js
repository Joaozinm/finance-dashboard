import { PostgresHelper } from '../db/postgres/helper.js'

export const badRequest = (body) => {
    return {
        statusCode: 400,
        body,
    }
}

export const created = (body) => {
    return {
        statusCode: 201,
        body,
    }
}

export const serverError = () => {
    return {
        statusCode: 500,
        body: {
            message: 'Internal server error',
        },
    }
}

export class PostgresEmailCheck {
    async execute(param) {
        const passedEmail = await PostgresHelper.query(
            'SELECT EXISTS (SELECT 1 FROM users WHERE email = $1) AS "exists"',
            [param],
        )
        return passedEmail
    }
}

// export class PostgresCompareEmail {
//     async execute(email) {
//         try {
//             const result = await PostgresHelper.query(
//                 'SELECT EXISTS (SELECT 1 FROM users WHERE email = $1) AS "exists"',
//                 [email],
//             )
//             return result
//         } catch (error) {
//             console.error('Error in emailExists function:', error)
//             throw error
//         }
//     }
// }

// const postgresCompareEmail = new PostgresCompareEmail()
// const emailExistsResult = await postgresCompareEmail.execute(params.email)
// const emailExists = emailExistsResult[0].exists
// if (emailExists) {
//     return badRequest({
//         message: 'Email already in use. Please choose another one.',
//     })
// }
