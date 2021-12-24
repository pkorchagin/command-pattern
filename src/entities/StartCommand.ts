import { AbstractCommand } from '../abstract'
import Receiver from './Receiver'

class StartCommand extends AbstractCommand {
    protected receiver

    public constructor(receiver: Receiver) {
        super()
        this.receiver = receiver
        log('StartCommand instance CREATED')
    }

    public execute(): void {
        log('StartCommand: EXECUTE')
        this.receiver.start()
    }
    public undo(): void {
        log('StartCommand: UNDO')
        this.receiver.stop()
    }
}

export default StartCommand