function factorial(num) {
    //Terminal Condition
    if(num < 0) return;
    
    //Base Case
    if(num === 0) return 1;
    
    //Recursion
    return num * factorial(num -1)
}

console.log(factorial(4))

