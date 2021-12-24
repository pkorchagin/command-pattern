import { AbstractCommand } from '../abstract'
import Invoker from './Invoker'

export default class InstantInvoker extends Invoker {
    public static execute(command: AbstractCommand): InstantInvoker {
        return new InstantInvoker().set(command).execute()
    }
}
