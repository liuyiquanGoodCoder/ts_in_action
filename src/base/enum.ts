//数字枚举 反向映射
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
//console.log(Role.Developer)

//字符串枚举

enum Message {
    Success = 'Successfull!',
    Fail = 'Failed!'
}
//console.log(Message)

//枚举成员

enum Char {
//const
    a,
    b = Char.a,
    c = 1 + 3,
//computes
    d = Math.random(),
    e = '123'.length
}

//常量枚举
const enum Month {
    Jan,
    Feb,
    Mar
}

