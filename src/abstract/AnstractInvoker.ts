import { AbstractCommand } from '../abstract'

abstract class AbstractInvoker {
    protected command: AbstractCommand

    protected constructor() {
        log(`${this.constructor.name} instance CREATED`)
    }

    protected execute(): this {
        // when disabled strictPropertyInitialization
        if (!this.command) {
            throw Error('No command has been set')
        }
        this.command.execute()
        return this
    }

    public abstract undo(): this
}

export { AbstractInvoker }
