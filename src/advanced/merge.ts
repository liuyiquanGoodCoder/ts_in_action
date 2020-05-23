//接口合并的顺序,带自变量参数的函数顺序在前,其他的按照接口命名顺序从后往前依次排序

interface A {
    x: number
    foo (bar: number): number //5
    foo (bar: 'a'): number //2
}

interface A {
    y: number
    foo (bar: string): string //3
    foo (bar: number[]): number[] //4
    foo (bar: 'b'): number //1
}

let aa: A = {
    x:1,
    y:1,
    foo(bar: any){
        return bar
    }
}