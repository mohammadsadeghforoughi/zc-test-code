function sum(a, b) {

    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    else {

        throw Error('type error, chagi');
    }
}

module.exports = sum