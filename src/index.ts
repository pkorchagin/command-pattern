import global from './types'

import './utils/logger'
import Invoker from './Invoker'
import Receiver from './Receiver'
import { StartCommand, StopCommand, ResetCommand, CommandsQueue } from './commands'

const invoker = new Invoker()
const receiver = new Receiver()
const commandStart = new StartCommand(receiver)
const commandStop = new StopCommand(receiver)
const commandReset = new ResetCommand(receiver)
const commandsQueue = new CommandsQueue(receiver, commandStart, commandReset, commandStop)

invoker.set(commandStart).execute()

invoker.set(commandStop).execute().undo()

invoker.set(commandReset).execute().undo()

invoker.set(commandsQueue).execute().undo()

process.exit(0)
