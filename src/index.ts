import global from './types' // eslint-disable-line
import './utils/logger'
import { Receiver, Invoker, InstantInvoker, CommandsQueue, ResetCommand, StartCommand, StopCommand } from './entities'

const receiver = new Receiver()
const commandStart = new StartCommand(receiver)
const commandStop = new StopCommand(receiver)
const commandReset = new ResetCommand(receiver)
const commandsQueue = new CommandsQueue(receiver, commandStart, commandReset, commandStop)
const invoker = new Invoker()

log('---- instant execution without using the set method, and with using a static method ----')
InstantInvoker.execute(new ResetCommand(new Receiver())).set(commandReset).execute()

log('---- deferred execution ----')
invoker
    .set(commandStart)
    .execute()
    .set(commandStop)
    .execute()
    .undo()
    .set(commandReset)
    .execute()
    .undo()
    .set(commandsQueue)
    .execute()
    .undo()

process.exit(0)
