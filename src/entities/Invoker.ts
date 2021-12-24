import { AbstractCommand } from '../abstract'
import { IExecutable, IUndoable, ICanSetCommand as ICanSetCommandForYouSelf } from '../interfaces'
import { AbstractInvoker } from '../abstract'

class Invoker extends AbstractInvoker implements IExecutable, IUndoable, ICanSetCommandForYouSelf {
    public constructor() {
        super()
    }

    public set(command: AbstractCommand): this {
        this.command = command
        return this
    }

    public execute(): this {
        return super.execute()
    }

    public undo(): this {
        this.command.undo()
        return this
    }
}

export default Invoker
