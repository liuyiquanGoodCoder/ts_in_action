abstract class Animal{
    eat(){
        console.log('eat')
    }
    abstract sleep():void
}
class Dog extends Animal{
    constructor(name:string){
        super()
        this.name = name
    }
    name: string
    run() {}
    sleep(){
        console.log('dog sleep')
    }
    private pri(){}
    protected pro(){}
    readonly legs: number = 4
    static food: string = 'bones'
}

class Cat extends Animal{
    sleep(){
        console.log('Cat sleep')
    }
}
let cat = new Cat()
let dog = new Dog('cider')
let animals: Animal[] = [dog,cat]
animals.forEach(i => {
    //i.sleep()
})

class WorkFlow{
    step1(){
        return this;
    }
    step2(){
        return this;
    }
}
new WorkFlow().step1().step2();

class Myflow extends WorkFlow{
    next(){
        return this;
    }
}

// console.log(Dog.prototype)
//let animal = new Animal() 
//let dog = new Dog('cider')
//console.log(dog.legs)
//console.log(Dog.food)
//console.log(dog.food)
//dog.sleep()
class Husky extends Dog{
    constructor(name:string,public color:string){
        super(name)
        this.color = color
        //this.pri()
        this.pro()
    }
    //color:string
}
//console.log(Husky.food)