function factorial(num) {
    //Terminal Condition: prevents wrong data from being passed in
    if(num < 0) return;
    
    //Base Case: indicator of end of recursion
    if(num === 0) return 1;
    
    //Recursion
    return num * factorial(num -1)
}

console.log(factorial(4))

