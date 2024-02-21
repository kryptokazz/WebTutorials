let count: number = 0;

function incrementCount(): void {
    count++; // Modifying the global variable 'count'
    console.log(count);
}

incrementCount(); // Outputs: 1

