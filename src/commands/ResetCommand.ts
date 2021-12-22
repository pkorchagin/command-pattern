import Command from '../Command'
import Receiver from '../Receiver'

class ResetCommand extends Command {
    private receiver

    public constructor(receiver: Receiver) {
        super()
        this.receiver = receiver
        log('ResetCommand instance CREATED')
    }

    public execute(): void {
        log('ResetCommand: EXECUTE')
        this.receiver.reset()
    }

    public undo(): void {
        log('ResetCommand: UNDO [Reset undoing is not possible]')
    }
}

export default ResetCommand
