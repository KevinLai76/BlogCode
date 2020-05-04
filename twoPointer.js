// let A = [1,2,3,4,5,6,7]
// let X = 13

// function isPairSum(A, X){
//     for(let i = 0; i < A.length; i++){
//         for(let j = 0; j < A.length; j++){
//             if(A[i] + A[j] == X){
                
//                 return console.log(A[i], A[j], true)
//             }

//             if(A[i] + A[j] > X){
//                 break
//             }
//         }
//     }

//     return console.log(false)

// }

// isPairSum(A, X)

let A = [1,2,3,4,5,6,7]
let X = 13

function twoPointer(A, X){
    let i = 0
    let j = A.length - 1

    while(i < j){
        if(A[i] + A[j] == X){
            return console.log(A[i], A[j], true)
        }else if(A[i] + A[j] < X) {
            // sum of pointers < X ? move towards 
            // higher values by incrementing i
            i++
        }else {
            // condition: (A[i] + A[j] > X)
            // sum of pointers > X ? move to
            // lower values by decrementing j
            j--
        }
    }

    return console.log(false)
}

twoPointer(A, X)

