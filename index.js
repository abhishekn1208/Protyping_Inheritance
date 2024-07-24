
let animalObj ={
    makeSound : function(){
        console.log("Woof...")
    }
}

function createAnimal(name,sound){
    let obj ={}
    obj.name = name;
    obj.sound = sound;
    Object.setPrototypeOf(obj,animalObj)
    return obj
}


let dogObj = {
    fetch : function(){
       console.log( `${this.name} fetches the ball`)
    }
}

function createDog(name,sound,breed){
    let obj1 = createAnimal(name,sound)
    Object.setPrototypeOf(obj1,dogObj)
    obj1.breed  = breed;

    return obj1
}

Object.setPrototypeOf(dogObj,animalObj)
let p2 = createDog("Buddy","Woof","Labrador")
console.log(p2.makeSound())
console.log(p2.fetch())