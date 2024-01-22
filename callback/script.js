function szamolas(muvelet, szam1, szam2){
    return muvelet(szam1, szam2);
}

function osszeadas(szam1, szam2){
    return szam1 + szam2;
}

function kivonas(szam1 , szam2){
    return szam1 - szam2;
}

function szorzas(szam1 , szam2){
    return szam1 * szam2;
}

function osztas(szam1, szam2){
    if(szam2 == 0){return}
    return szam1 / szam2;
}

let eredmeny = szamolas(osszeadas, 5, 3);
console.log('összeadás értéke= 8, a számítás= ' + eredmeny);

eredmeny = szamolas(kivonas, 8, 2);
console.log('A kivonás értéke= 6, a számíltás= ' + eredmeny);

eredmeny =  szamolas(szorzas, 4, 6);
console.log('A szorzás értéke= 24, a számíltás= ' + eredmeny);

eredmeny =  szamolas(osztas, 9, 3);
console.log('Az osztás értéke= 3, a számíltás= ' + eredmeny);
