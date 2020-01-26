function concatArray(firstArray, secondArray) {
    return [...firstArray, ...secondArray];
}

console.log(concatArray([1, 3], [3, 5]));