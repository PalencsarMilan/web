function sumOfArraySingles(arr) {
    let map = new Map();
    let sum = 0;

    for (let num of arr) {
        if (map.has(num)) {
            map.delete(num);
            sum -= num;
        } else {
            map.set(num, true);
            sum += num;
        }
    }

    return sum;
}

console.log(sumOfArraySingles([4, 5, 7, 5, 4, 8]), 15)
console.log(sumOfArraySingles([9, 10, 19, 13, 19, 13]), 19)
console.log(sumOfArraySingles([16, 0, 11, 4, 8, 16, 0, 11]), 12)
console.log(sumOfArraySingles([5, 17, 18, 11, 13, 18, 11, 13]), 22)
console.log(sumOfArraySingles([5, 10, 19, 13, 10, 13]), 24)

function sortArraysIgnoringCase(arr) {
    return arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

console.log(sortArraysIgnoringCase(["Hello", "there", "I'm", "fine"]), ["fine", "Hello", "I'm", "there"])
console.log(sortArraysIgnoringCase(["C", "d", "a", "B"]), ["a", "B", "C", "d"])
console.log(sortArraysIgnoringCase(["CodeWars"]), ["CodeWars"])
console.log(sortArraysIgnoringCase([]), [])

function insertDash(num) {
    let numStr = num.toString();
    let result = numStr[0];

    for (let i = 1; i < numStr.length; i++) {
        if (parseInt(numStr[i - 1]) % 2 !== 0 && parseInt(numStr[i]) % 2 !== 0) {
            result += '-' + numStr[i];
        } else {
            result += numStr[i];
        }
    }

    return result;
}

console.log(insertDash(454793), '4547-9-3')
console.log(insertDash(123456), '123456')
console.log(insertDash(1003567), '1003-567')
console.log(insertDash(13570), '1-3-5-70')
console.log(insertDash(0), '0')
