import Command from '../Command'
import Receiver from '../Receiver'

class StartCommand extends Command {
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
