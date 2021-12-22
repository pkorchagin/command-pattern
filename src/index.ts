import global from './types' // eslint-disable-line
import './utils/logger'

import Invoker from './Invoker'
import Receiver from './Receiver'
import { StartCommand, StopCommand, ResetCommand, CommandsQueue } from './commands'

const receiver = new Receiver()
const commandStart = new StartCommand(receiver)
const commandStop = new StopCommand(receiver)
const commandReset = new ResetCommand(receiver)
const commandsQueue = new CommandsQueue(receiver, commandStart, commandReset, commandStop)
const invoker = new Invoker()

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
