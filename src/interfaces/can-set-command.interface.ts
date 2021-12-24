import { AbstractCommand } from '../abstract'

export default interface ICanSetCommand {
    set(command: AbstractCommand): void | this
}
