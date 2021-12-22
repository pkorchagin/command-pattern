import { IExecutable, IUndoable } from './interfaces'

abstract class Command implements IExecutable, IUndoable {
    public abstract execute(): void

    public abstract undo(): void
}

export default Command
