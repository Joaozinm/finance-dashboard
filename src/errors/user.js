export class EmailAlreadyInUseError extends Error {
    constructor(email) {
        super(
            `The provided email: ${email} is already in use, try another one.`,
        )
        this.name = 'EmailAlreadyInUseError'
    }
}
