import Command from '../Command'

export default interface ICanSetCommand {
    set(command: Command): void | this
}
