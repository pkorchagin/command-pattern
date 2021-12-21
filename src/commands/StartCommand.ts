import Command from '../Command'
import Receiver from '../Receiver'

class StartCommand extends Command {
    protected receiver

    constructor(receiver: Receiver) {
        super()
        this.receiver = receiver
        log('StartCommand instance CREATED')
    }

    execute() {
        log('StartCommand: EXECUTE')
        this.receiver.start()
    }
    undo() {
        log('StartCommand: UNDO')
        this.receiver.stop()
    }
}

export default StartCommand
