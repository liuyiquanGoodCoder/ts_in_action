interface DogInterface {
    run(): void
}

interface CatInterface {
    jump(): void
}

let pet: DogInterface & CatInterface = {
    run() {},
    jump() {}
}

let a: number | string = 1
let b: 'a' | 'b' | 'c'
let c: 1 | 2 | 3

class BigDog implements DogInterface {
    run() {}
    eat() {}
}

class SmallCat implements CatInterface{
    jump() {}
    eat() {}
}

enum Master {Boy,Girl}

function getPet(master: Master) {
    let pet = master === Master.Boy ? new BigDog() : new SmallCat()
    pet.eat()

    return pet
}

interface Square {
    kind: 'square';
    size: number;
}

interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

interface Circle {
    kind: 'circle';
    r: number;
}

type Shape = Square | Rectangle | Circle
function area(s: Shape){
    switch(s.kind){
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.width * s.height;
        case "circle":
            return s.r * s.r * Math.PI;
        default:
            return ((e: never) => {throw new Error(e)})(s)
        
    }
}
//console.log(area({kind:'circle',r:1}))

let obj1 = {
    a:1,
    b:2,
    c:3
}

function getValue<T,K extends keyof T>(obj: T,keys: K[]): T[K][]{
    return keys.map(key => obj[key])

}
//console.log(getValue(obj1,['a','b']))

//keyof T

interface Obj{
    a: number
    b: string
}

//let key: keyof Obj

//mapping
interface Obj1{
    a: string
    b: number
    c: boolean
}

type ReadoblyObj = Readonly<Obj1>

type PartialObj = Partial<Obj1>

type PickObj = Pick<Obj1,'a' | 'b'>

type RecordObj = Record<'x' | 'y',Obj1>

//T extends U ? x : y
type TypeName<T> = 
    T extends string ? 'string' :
    T extends number ? 'number' :
    T extends boolean ? 'boolean' :
    T extends undefined ? 'undefined' :
    T extends Function ? 'function' :
    'object'

type T1 = TypeName<string>
type T12 = TypeName<string[]>

type T13 = TypeName<string | string[]>

type Diff<T,U> = T extends U ? never : T

type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>
// Diff<'a','a' | 'e'> |  Diff<'b','a' | 'e'> |  Diff<'c','a' | 'e'>
// never | 'b' | 'c'
// 'b' | 'c'

type NotNull<T> = Diff<T,undefined | null>
type T5 = NotNull<string | number | undefined | null>

//Exclude<T,U> Diff
//Extract<T,U> 

type T6 = Extract<'a'|'b'|'c','a'|'e'>

//ReturnType

type T7 = ReturnType<() => string>