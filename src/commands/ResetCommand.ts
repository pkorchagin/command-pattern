import Command from '../Command'
import Receiver from '../Receiver'

class ResetCommand extends Command {
    private receiver

    constructor(receiver: Receiver) {
        super()
        this.receiver = receiver
        log('ResetCommand instance CREATED')
    }

    execute() {
        log('ResetCommand: EXECUTE')
        this.receiver.reset()
    }

    undo() {
        log('ResetCommand: UNDO [Reset undoing is not possible]')
    }
}

export default ResetCommand
