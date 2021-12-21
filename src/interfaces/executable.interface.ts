import Receiver from '../Receiver'

export default interface IExecutable {
    execute(receiver: Receiver): void | this
}
