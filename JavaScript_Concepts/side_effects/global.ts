function doubleValue(num: number): number {
    let doubledValue: number = num * 2; // Create a new variable instead of modifying the argument
    console.log(doubledValue);
    return doubledValue;
}

let num: number = 5;
doubleValue(num); // Outputs: 10
console.log(num); // Outputs: 5 (the original value of 'num' remains unchanged)

