const R = require('ramda');

const getXY = ([min, max], number) => {
    if ( R.contains(number)(R.range(min, max)) ) {
        const dist = distanceRange(number);
        const sector = ~~((number - min) / (max - min) * 4);

        const sideLength = (max - min) / 4;

        const sectorDistance = ~~((number - min));

        return dist + Math.abs(sectorDistance % sideLength - (sideLength/2 - 1));
    } else {
        return false;
    }
}

const spiralRange = n => n > 1 ? [2 + R.range(1, n).map(x => x * 8).reduce((a, b) => a + b), 2 + R.range(1, n + 1).map(x => x * 8).reduce((a, b) => a + b)] : [1, 2];

const findRange = n => R.last(R.range(1, ~~Math.sqrt(n)).map(spiralRange).filter(([min, max]) => min <= n))

const distanceRange = n => R.range(1, ~~Math.sqrt(n)).map(spiralRange).filter(([min, max]) => min <= n).length;

const n = 361527;

const r = findRange(n);

console.log(getXY(r, n));
