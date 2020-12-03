

let a = {
    af: function (a, b) {
        console.log(this)
        console.log(a + b)

    },
    bf: (a, b) => {
        console.log(this)
        console.log(a + b)
    }
}

// a.af(1, 2)

a.af.call({}, 2, 3)
a.bf.call(undefined, 2, 3)