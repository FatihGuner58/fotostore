function karsilastirIfElse(a, b) {
    if (a > b) {
        return a + ", " + b + " büyük";
    } else {
        return a + ", " + b + " küçük";
    }
}

console.log(karsilastirIfElse(5, 3));