let array = [1,2,3]

function add(num){
    let result = []
    for(let i = 0; i < array.length; i++){
        result.push(array[i] + num)
    }

    return result
}

console.log(add(10))  //returns [11, 12, 13]
console.log(add(100)) //returns [101, 102, 103]








// function add10(array){
//     let result = []

//     for(let i = 0; i < array.length; i++){
//         result.push(array[i] + 10)
//     }
    
//     return result
// }

// function add100(array){
//     let result = []

//     for(let i = 0; i < array.length; i++){
//         result.push(array[i] + 100)
//     }
    
//     return result
// }

// console.log(add10(array))  //returns [11, 12, 13]
// console.log(add100(array)) //returns [101, 102, 103]

