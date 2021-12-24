import { IExecutable, IUndoable } from '../interfaces'

abstract class AbstractCommand implements IExecutable, IUndoable {
    private readonly name: string

    protected constructor() {
        this.name = this.constructor.name
        log(`${this.name} instance CREATED`)
    }

    public execute(): void {
        log(`${this.name}: EXECUTE`)
    }

    public undo(): void {
        log(`${this.name}: UNDO`)
    }
}

export { AbstractCommand }
