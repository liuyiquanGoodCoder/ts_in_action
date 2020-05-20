// let a = 1

// let c =(x = 1) => x + 1

// window.onkeydown = (event: KeyboardEvent) => {
//     //console.log(1)
//     console.log(event.AT_TARGET)
// }

// interface Foo {
//     bar:number
// }
// let foo: Foo = {
//     bar:1
// }

// let s: string = 'a'

// /* X 兼容 Y: X(目标类型) = Y(源类型) 
// */

// //接口兼容性
// interface X {
//     a: any;
//     b: any;
// }

// interface Y {
//     a: any;
//     b: any;
//     c: any;
// }

// let x: X = {a:1, b:2}
// let y: Y = {a:1, b:2, c:3}
// x = y
// console.log(x)
// //y = x 
// type Handler = (a: number, b: number) => void 

// function hof(handler: Handler){
//     return handler
// }

// let handler1 = (a: number) => {}
// hof(handler1)

// let handler2 = (a: number,b: number,c: number) => {}

// //hof(handler2)
// interface Point3D{
//     x: number
//     y: number
//     z: number
// }

// interface Point2D{
//     x: number
//     y: number
// }
// let p3d = (point: Point3D) => {};
// let p2d = (point: Point2D) => {};

// p3d = p2d
// //p2d = p3d


// enum Fruit {Apple, Banana}
// enum Color {Red, Yellow}

enum Type {Srong, Week}

class Java {
    helloJava(){
        //console.log('Hello Java')
    }
    java:any
}

class JavaScript {
    helloJavaScript(){
        //console.log('Hello JavaScript')
    }
    javascript:any
}
function isJava(lang: Java | JavaScript): lang is Java{
    return (lang as Java).helloJava !== undefined
}
function getLanuage(type: Type,x: String | number){
    let lang = type === Type.Srong ? new Java() : new JavaScript()
    //报错了
    // if((lang as Java).helloJava){
    //     (lang as Java).helloJava()
    // }else{
    //     (lang as JavaScript).helloJavaScript()
    // }
    //instanceof
    if(lang instanceof Java){
        lang.helloJava()
    }else{
        lang.helloJavaScript()
    }

    //in
    if('java' in lang){
        lang.helloJava()
    }else{
        lang.helloJavaScript()
    }

    //typeof
    if(typeof x === 'string'){
        //console.log(x.length)
    }else{
        //console.log((x as number).toFixed(2))
    }

    //function
    if(isJava(lang)){
        lang.helloJava()
    }else{
        lang.helloJavaScript()
    }

    return lang
}

getLanuage(Type.Week,5)