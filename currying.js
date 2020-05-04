function multiply(a,b) {
    return a * b
}

console.log(multiply(8, 20)) // = 160
console.log(multiply(8, 21)) // = 168


function curryMultiply(a) {
    return function(b) {
        debugger
        return a * b
    }
}

// console.log(curryMultiply(8)(20)) // = 160

let multiplyBythree = curryMultiply(3)

console.log(multiplyBythree)
console.log(multiplyBythree(30)) // = 90

