import Command from '../Command'
import Receiver from '../Receiver'

class StopCommand extends Command {
    private receiver

    public constructor(receiver: Receiver) {
        super()
        this.receiver = receiver
        log('StopCommand instance CREATED')
    }

    public execute(): void {
        log('StopCommand: EXECUTE')
        this.receiver.stop()
    }

    public undo(): void {
        log('StopCommand: UNDO')
        this.receiver.start()
    }
}

export default StopCommand
