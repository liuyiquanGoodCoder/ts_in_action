let a = 1

let c =(x = 1) => x + 1

window.onkeydown = (event: KeyboardEvent) => {
    //console.log(1)
    console.log(event.AT_TARGET)
}

interface Foo {
    bar:number
}
let foo: Foo = {
    bar:1
}

let s: string = 'a'

/* X 兼容 Y: X(目标类型) = Y(源类型) 
*/

//接口兼容性
interface X {
    a: any;
    b: any;
}

interface Y {
    a: any;
    b: any;
    c: any;
}

let x: X = {a:1, b:2}
let y: Y = {a:1, b:2, c:3}
x = y
console.log(x)
//y = x 
