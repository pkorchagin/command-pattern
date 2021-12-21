const defaultConsoleLog = console.log

const custom = (...args: any): void => {
    const date = new Date(Date.now())
    const hours = date.getHours()
    const minutes = '0' + date.getMinutes()
    const seconds = '0' + date.getSeconds()
    const milliseconds = '0' + date.getMilliseconds()
    const formattedTime = hours + ':' + minutes.slice(-2) + ':' + seconds.slice(-2) + ':' + milliseconds
    args.unshift(`ⓣ ${formattedTime} ⓜ `)
    defaultConsoleLog.apply(null, args)
}

console.log = custom
globalThis.log = custom
