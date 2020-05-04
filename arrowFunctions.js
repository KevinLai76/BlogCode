// // 'original'
// function example0(name) {
//     return `hi ${name}`
// }

// // 'default'
// let example1 = (name) => {return `hi ${name}`}

// // if one parameter parentheses are optional
// let example2 = name => {return `hi ${name}`}

// // if the only statement is a return we can remove the curly brackets and the return
// let example3 = name => `hi ${name}`

// console.log(example0('dave'))
// console.log(example1('dave'))
// console.log(example2('dave'))
// console.log(example3('dave'))

class Person {
    constructor(name) {
        this.name = name
    }

    sayNameArrow() {
        setTimeout(() => {
            console.log('Arrow:', this.name)
        },)
    }

    sayNameFunction() {
        setTimeout(function() {
            console.log('Function:', this.name)
        },)
    }
}

let person = new Person('Fred')
person.sayNameArrow()
person.sayNameFunction()
console.log(this.name)

