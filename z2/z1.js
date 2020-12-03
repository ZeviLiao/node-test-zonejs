function main() {
    b1.addEventListener('click', bindSecondButton);
}

function bindSecondButton() {
    b2.addEventListener('click', throwError);
}

function throwError() {
    throw new Error('aw shucks');
}

Zone.current.fork(
    {
        onHandleError: function (parentZoneDelegate, currentZone, targetZone, error) {
            console.log(error.stack);
        }
    }
).fork(Zone.longStackTraceZoneSpec).run(main);