import { IStartable, IStoppable, IResettable } from './interfaces'

class Receiver implements IStartable, IStoppable, IResettable {
    constructor() {
        log('Receiver instance CREATED')
    }

    start(): void {
        log('Receiver: START')
    }

    stop(): void {
        log('Receiver: STOP')
    }

    reset(): void {
        log('Receiver: RESET')
    }
}

export default Receiver
