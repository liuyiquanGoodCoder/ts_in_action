interface Human{
    name: string;
    eat(): void
}

class Asian implements Human{
    constructor(public name: string){
        this.name = name;
    }
    eat(){}
}

interface Man extends Human{
    run():void
}

interface Child{
    cry():void
}

interface Boy extends Man,Child {}

let boy: Boy = {
    name:'ted',
    run(){},
    eat(){},
    cry(){}
}

class Auto {
    state = 1
    private stateA = 0
}

interface AutoInterface extends Auto{

}

// class C implements AutoInterface{
//     state = 1
// }

class Bus extends Auto implements AutoInterface {

}