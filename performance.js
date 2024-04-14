// Approach 1: Dynamic array allocation
let startTimeDynamic = process.hrtime.bigint();
let arrayDynamic = [];
for (let i = 0; i < 1000000; i++) {
    arrayDynamic.push(i);
}
let endTimeDynamic = process.hrtime.bigint();

// Approach 2: Preallocated array
let startTimePreallocated = process.hrtime.bigint();
let arrayPreallocated = new Array(1000000);
for (let i = 0; i < 1000000; i++) {
    arrayPreallocated[i] = i;
}
let endTimePreallocated = process.hrtime.bigint();

// Calculate execution times in nanoseconds
let dynamicTimeNano = Number(endTimeDynamic - startTimeDynamic);
let preallocatedTimeNano = Number(endTimePreallocated - startTimePreallocated);

// Convert nanoseconds to microseconds and milliseconds
let dynamicTimeMicro = dynamicTimeNano / 1000;
let preallocatedTimeMicro = preallocatedTimeNano / 1000;
let dynamicTimeMilli = dynamicTimeMicro / 1000;
let preallocatedTimeMilli = preallocatedTimeMicro / 1000;

// Print results
console.log("Dynamic allocation time:");
console.log("Nanoseconds: " + dynamicTimeNano + " ns");
console.log("Microseconds: " + dynamicTimeMicro + " µs");
console.log("Milliseconds: " + dynamicTimeMilli + " ms");

console.log("\nPreallocated time:");
console.log("Nanoseconds: " + preallocatedTimeNano + " ns");
console.log("Microseconds: " + preallocatedTimeMicro + " µs");
console.log("Milliseconds: " + preallocatedTimeMilli + " ms");

// Print comparison
if (dynamicTimeNano < preallocatedTimeNano) {
    console.log("\nDynamic allocation is faster by " + (preallocatedTimeNano - dynamicTimeNano) + " ns");
} else if (preallocatedTimeNano < dynamicTimeNano) {
    console.log("\nPreallocation is faster by " + (dynamicTimeNano - preallocatedTimeNano) + " ns");
} else {
    console.log("\nBoth approaches have similar execution times");
}
