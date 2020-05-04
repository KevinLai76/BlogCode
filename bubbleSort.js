let array = [6,2,4,3,1]

function bubbleSort(array) {
    let length = array.length

    for(let i = 0; i < length; i++) {
        let swap = false

        for(let j = 0; j < length; j++) {
            if(array[j] > array[j + 1 ]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                swap = true
            }
        }

        if(!swap){ break }
        console.log(`iteration ${i + 1}:`, array)
    }

    return array
}

console.log(bubbleSort(array)) // [1, 2, 3, 4, 6]

