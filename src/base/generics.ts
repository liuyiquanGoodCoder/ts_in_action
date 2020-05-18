function log<T>(value: T): T{
    //console.log(value);
    return value;
}
log<string[]>(['a','b'])
log(['a','b'])

// type Log = <T>(value: T) => T
// let myLog: Log = log


interface Log<T = string>{
   (value: T): T
}

let myLog: Log = log
myLog('a')

class output<T> {
    run(value: T){
        //console.log(value)
        return value
    }
}

let log1 = new output<number>()
log1.run(1)
let log2 = new output()
log2.run(1)

interface Length {
    length: number
}
function outPutLog<T extends Length>(value: T): T{
    //console.log(value,value.length)
    return value
}
outPutLog('123')
outPutLog({length:4})