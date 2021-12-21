import Command from '../Command'
import Receiver from '../Receiver'

class CommandsQueue extends Command {
    protected receiver
    protected commands

    constructor(receiver: Receiver, ...commands: Command[]) {
        super()
        this.commands = commands
        this.receiver = receiver
    }
    execute() {
        log('CommandsQueue: EXECUTE')
        for (const command of this.commands) {
            command.execute()
        }
    }
    undo() {
        log('CommandsQueue: UNDO')
        for (const command of this.commands) {
            command.undo()
        }
    }
}

export default CommandsQueue
