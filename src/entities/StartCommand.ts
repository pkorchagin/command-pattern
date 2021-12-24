import { AbstractCommand } from '../abstract'
import Receiver from './Receiver'

class StartCommand extends AbstractCommand {
    protected receiver

    public constructor(receiver: Receiver) {
        super()
        this.receiver = receiver
    }

    public execute(): void {
        this.receiver.start()
    }
    public undo(): void {
        this.receiver.stop()
    }
}

export default StartCommand
