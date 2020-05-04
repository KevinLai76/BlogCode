let array = [-2, 1, 3, -2, 1, 4, -5, 1]

function kadanesAlgorithm(array) {
    let maxSum = array[0]
    let currentSum = maxSum

    for(let i = 1; i < array.length; i++) {
        currentSum = Math.max(currentSum + array[i], array[i])
        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum
}

kadanesAlgorithm(array) // maxSum = 7


