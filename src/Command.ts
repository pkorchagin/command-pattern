import { IExecutable, IUndoable } from './interfaces'

class Command implements IExecutable, IUndoable {
    protected constructor() {
        if (this.constructor.name === 'Command') {
            throw new Error(`${this.constructor.name}: can not create instance of interface`)
        }
    }

    public execute(): void {
        throw new Error(`Method "execute" not defined in class ${this.constructor.name}`)
    }

    public undo(): void {
        throw new Error(`Method "undo" not defined in class ${this.constructor.name}`)
    }
}

export default Command
