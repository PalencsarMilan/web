let fizetes = {
    Anna: 2100,
    Cecil: 1890,
    Emil: 2050,
    Gerald: 2920
};

let osszeg = 0;
for (let szemely in fizetes) {
    if (fizetes.hasOwnProperty(szemely)) {
        console.log(`${szemely} fizetése: ${fizetes[szemely]} Ft`);
        osszeg += fizetes[szemely];
    }
}

console.log(`\nAz összkereset: ${osszeg} Ft`);