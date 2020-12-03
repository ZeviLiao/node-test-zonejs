
require('zone.js/dist/zone-node.js');

function f1() {
    console.log("F1");
}
function f2() {
    console.log("F2");
}
function MyZone() {
    f1(); // Sync
    setTimeout(f2, 5000); //Async
}

var z = Zone.current.fork({
    onHasTask: function (parent, current, target, hasTask) {
    console.timeLog();
}
});
console.time();
z.run(function () {
    MyZone();
});