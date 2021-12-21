import Command from './Command'
import { IExecutable, IUndoable, ICanSetCommand as ICanSetCommandForYouSelf } from './interfaces'

class Invoker implements IExecutable, IUndoable, ICanSetCommandForYouSelf {
    protected command: Command

    constructor() {
        log('Invoker instance CREATED')
    }

    public set(command: Command): this {
        this.command = command
        return this
    }

    public execute(): this {
        this.command.execute()
        return this
    }

    public undo(): this {
        this.command.undo()
        return this
    }
}

export default Invoker
