import { AbstractCommand } from '../abstract'
import Receiver from './Receiver'

class ResetCommand extends AbstractCommand {
    private receiver

    public constructor(receiver: Receiver) {
        super()
        this.receiver = receiver
    }

    public execute(): void {
        this.receiver.reset()
    }

    public undo(): void {
        log(`${this.constructor.name}: UNDO [Reset undoing is not possible]`)
    }
}

export default ResetCommand
