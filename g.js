// 全域性定義this.i
this.i = 100;
var counterA = new CounterA();
var counterB = new CounterB();
var counterC = new CounterC();
var counterD = new CounterD();
// 不好的示例
function CounterA() {
    // CounterA's `this` 例項 (!! 忽略這裡)
    this.i = 0;
    setTimeout(function () {
        // `this` 指全域性物件，而不是 CounterA's `this`
        // 因此，開始計數與100，而不是0 (本地的 this.i)
        this.i;
        // document.getElementById("counterA").innerHTML = this.i;
        console.log('a', this)
    }, 500);
}
// 手動繫結 that = this
function CounterB() {
    this.i = 0;
    var that = this;
    setTimeout(function () {
        that.i;
        // document.getElementById("counterB").innerHTML = that.i;
        console.log('b', this)
    }, 500);
}
// 使用 .bind(this)
function CounterC() {
    this.i = 0;
    setTimeout(function () {
        this.i;
        // document.getElementById("counterC").innerHTML = this.i;
        console.log('c', this)
    }.bind(this), 500);
}
// 使用 arrow函式
function CounterD() {
    this.i = 0;
    setTimeout(() => {
        this.i;
        // document.getElementById("counterD").innerHTML = this.i;
        console.log('d', this)
    }, 500);
}