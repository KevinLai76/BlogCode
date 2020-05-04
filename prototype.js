let person = {};
person.name = 'Gary'
person.age = 50
person.stamina = 100

person.speak = function(){
    if(this.stamina <= 0){
        console.log(`${this.name} needs to sleep!`)
    } else {
        console.log(`Hello I'm ${this.name}`)
        this.stamina -= 25
        console.log(`Stamina: ${this.stamina}`)
    }
}

// person.sleep = function(){
//     console.log(`${this.name} is sleeping 💤`)
//     this.stamina = 100
//     console.log(`${this.name} feels refreshed. Stamina: ${this.stamina}`)
// }

// function Person (name, age, stamina=100){
//     let person = {}
//     person.name = name
//     person.age = age
//     person.stamina = stamina

//     person.speak = function(){
//         if(this.stamina <= 0){
//             console.log(`${this.name} needs to sleep!`)
//         } else {
//             console.log(`Hello I'm ${this.name}`)
//             this.stamina -= 25
//             console.log(`Stamina: ${this.stamina}`)
//         }
//     }

//     person.sleep = function(){
//         console.log(`${this.name} is sleeping 💤`)
//         this.stamina = 100
//         console.log(`${this.name} feels refreshed. Stamina: ${this.stamina}`)
//     }

//     return person
// }

// let gary = Person('Gary', 50)
// let joe = Person('Joe', 20)

// let personFunctions = {
//     speak(){
//         if(this.stamina <= 0){
//             console.log(`${this.name} needs to sleep!`)
//         } else {
//             console.log(`Hello I'm ${this.name}`)
//             this.stamina -= 25
//             console.log(`Stamina: ${this.stamina}`)
//         }    
//     },
    
//     sleep() {
//         console.log(`${this.name} is sleeping 💤`)
//         this.stamina = 100
//         console.log(`${this.name} feels refreshed. Stamina: ${this.stamina}`)
//     }
// }

// function Person(name, age, stamina=100){
//     let person = {};
//     person.name = name
//     person.age = age
//     person.stamina = stamina
//     person.speak = personFunctions.speak

//     return person
// }

// let gary = Person('Gary', 50)

// let parent = {
//     name: 'George',
//     age: 77,
//     eyeColor: 'purple'
// }

// let child = Object.create(parent)
// child.name = 'Gary'
// child.age = 50

// let personFunctions = {
//     speak(){
//         if(this.stamina <= 0){
//             console.log(`${this.name} needs to sleep!`)
//         } else {
//             console.log(`Hello I'm ${this.name}`)
//             this.stamina -= 25
//             console.log(`Stamina: ${this.stamina}`)
//         }    
//     },
    
//     sleep() {
//         console.log(`${this.name} is sleeping 💤`)
//         this.stamina = 100
//         console.log(`${this.name} feels refreshed. Stamina: ${this.stamina}`)
//     }
// }

// function Person(name, age, stamina=100){
//     let person = Object.create(personFunctions)
//     person.name = name
//     person.age = age
//     person.stamina = stamina

//     return person
// } 

// let gary = Person('Gary', 50)
// let joe = Person('Joe', 20)
// console.log(gary)
// console.log(joe)

// function Person(name, age, stamina=100){
//     let person = Object.create(Person.prototype)
//     person.name = name
//     person.age = age
//     person.stamina = stamina

//     return person
// }

// Person.prototype.speak = function(){
//     if(this.stamina <= 0){
//         console.log(`${this.name} needs to sleep!`)
//     } else {
//         console.log(`Hello I'm ${this.name}`)
//         this.stamina -= 25
//         console.log(`Stamina: ${this.stamina}`)
//     }    
// }

// Person.prototype.sleep = function(){
//     console.log(`${this.name} is sleeping 💤`)
//     this.stamina = 100
//     console.log(`${this.name} feels refreshed. Stamina: ${this.stamina}`)
// }

// const gary = Person('Gary', 50)
// const joe = Person('Joe', 20)

// gary.speak()
// joe.sleep()

// function Person(name, age, stamina=100){
//     this.name = name
//     this.age = age
//     this.stamina = stamina
// }

// Person.prototype.speak = function(){
//     if(this.stamina <= 0){
//         console.log(`${this.name} needs to sleep!`)
//     } else {
//         console.log(`Hello I'm ${this.name}`)
//         this.stamina -= 25
//         console.log(`Stamina: ${this.stamina}`)
//     }    
// }

// Person.prototype.sleep = function(){
//     console.log(`${this.name} is sleeping 💤`)
//     this.stamina = 100
//     console.log(`${this.name} feels refreshed. Stamina: ${this.stamina}`)
// }

// const gary = new Person('Gary', 50)
// const joe = new Person('Joe', 20)

// class Person{
//     constructor(name, age, stamina=100){
//         this.name = name
//         this.age = age
//         this.stamina = stamina
//     }

//     speak(){
//         if(this.stamina <= 0){
//             console.log(`${this.name} needs to sleep!`)
//         } else {
//             console.log(`Hello I'm ${this.name}`)
//             this.stamina -= 25
//             console.log(`Stamina: ${this.stamina}`)
//         }    
//     }

//     sleep(){
//         console.log(`${this.name} is sleeping 💤`)
//         this.stamina = 100
//         console.log(`${this.name} feels refreshed. Stamina: ${this.stamina}`)
//     }
// }

// const gary = new Person('Gary', 50)
// const joe = new Person('Joe', 20)
