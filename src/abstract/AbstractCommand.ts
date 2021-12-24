import { IExecutable, IUndoable } from '../interfaces'

abstract class AbstractCommand implements IExecutable, IUndoable {
    public abstract execute(): void

    public abstract undo(): void
}

export { AbstractCommand }
