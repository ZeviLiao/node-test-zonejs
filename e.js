function Person(name) {
    this.name = name;
    this.sayName = function () {
        console.log("Hello my name is: ", this.name);
        return this;
    };
    this.changeName = function (name) {
        this.name = name;
        return this;
    };
}

// 

// 單位移
// 雙位移
console.log(~~-12.88) // -> -12
console.log(Math.floor(-12.88)) // -> -12
console.log(Math.ceil(-12.88)) // -> -12


