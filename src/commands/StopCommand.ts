import Command from '../Command'
import Receiver from '../Receiver'

class StopCommand extends Command {
    private receiver

    constructor(receiver: Receiver) {
        super()
        this.receiver = receiver
        log('StopCommand instance CREATED')
    }

    execute() {
        log('StopCommand: EXECUTE')
        this.receiver.stop()
    }

    undo() {
        log('StopCommand: UNDO')
        this.receiver.start()
    }
}

export default StopCommand
