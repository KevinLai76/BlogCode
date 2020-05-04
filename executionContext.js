// Creation Phase

var name
var age

function person() {
    return{
        name: name,
        age: age
    }
}

// At the end of the Creation phase we have:
// name: undefined
// age: undefined
// person: person ƒ person() { return { name: name, age: age } }

// Execution Phase

// At this point name and age are assigned the value of undefined
console.log('name: ', name)      // name: undefined
console.log('age: ', age)        // age: undefined
console.log('person: ', person)  // person: person ƒ person() { return { name: name, age: age } }

// Below this is when our variables name and age are assigned their values of 'John' and 60
var name = 'John'
var age = 60

function person() {
    return{
        name: name,
        age: age
    }
}