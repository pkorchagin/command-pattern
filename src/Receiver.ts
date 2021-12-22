import { IStartable, IStoppable, IResettable } from './interfaces'

class Receiver implements IStartable, IStoppable, IResettable {
    public constructor() {
        log('Receiver instance CREATED')
    }

    public start(): void {
        log('Receiver: START')
    }

    public stop(): void {
        log('Receiver: STOP')
    }

    public reset(): void {
        log('Receiver: RESET')
    }
}

export default Receiver
