
require('zone.js/dist/zone-node.js');

Zone.current.fork({}).run(function () {
    Zone.current.inTheZone = true;

    setTimeout(function () {
        console.log('in the zone: ' + !!Zone.current.inTheZone);
    }, 0);
});

console.log('in the zone: ' + !!Zone.current.inTheZone);