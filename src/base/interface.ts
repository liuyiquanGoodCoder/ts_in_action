interface List {
    readonly id: number;
    name: string;
    //[x:string]:any;
    age?:number;
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach((value)=>{
        console.log(value.id,value.name)
    })
}

let result = {
    data:[
        {id: 1, name: 'A',sex: 'male'},
        {id: 2, name: 'B',age:12}
    ]
}

// render({data:[
//     {id: 1, name: 'A',sex: 'male'},
//     {id: 2, name: 'B'}
// ]})
//render(result)

interface StringArray {
    [index: number]: string
}

interface Add{
    (x :number, y:number):number
}

type Add1 = (x: number, y: number) => number

let addType : Add = (a,b) => a+b

interface Lib {
    ():void;
    version:string;
    doSomething():void;
}

function getLib(){
    let lib: Lib = (()=>{}) as Lib
    lib.version = '1.0'
    lib.doSomething = () => {}
    return lib
}

let lib1 = getLib();
lib1();
