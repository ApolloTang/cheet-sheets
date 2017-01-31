

// --------
// for...in
// --------

[!] • Will interate up the prototype chain.
    • Only enumerable perties will be iterated.


// --------
// for...of
// --------

[!] Only work on iterable values.

const iterable = [1,2,3];
for (const element of iterable ) {
    console.log(element);
}
for (const [index, element] of iterable.entries() ) {
    console.log(index,element);
}


