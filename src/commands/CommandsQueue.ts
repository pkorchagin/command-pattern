import Command from '../Command'
import Receiver from '../Receiver'

class CommandsQueue extends Command {
    protected receiver
    protected commands

    public constructor(receiver: Receiver, ...commands: Command[]) {
        super()
        this.commands = commands
        this.receiver = receiver
    }

    public execute(): void {
        for (const command of this.commands) {
            command.execute()
        }
    }

    public undo(): void {
        for (const command of this.commands) {
            command.undo()
        }
    }
}

export default CommandsQueue
