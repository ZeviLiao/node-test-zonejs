function add(a, b, c) {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        // sum += arguments[i];
        console.log(arguments[i])
    }
    return sum;
}

add(10, 2, 4, 5, 6)
 // 27

