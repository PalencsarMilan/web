// All or Nothing
function possiblyPerfect(key, answers) {
    let allCorrect = true;
    let allIncorrect = true;
      for (let i = 0; i < key.length; i++) {
        if (key[i] !== '_') {
            if (key[i] !== answers[i]) {
              allCorrect = false;
            } else {
              allIncorrect = false;
            }
          }
        }
      
        return allCorrect || allIncorrect;
}

console.log( possiblyPerfect([..."A_C_B"],[..."ADCEB"]) + " >> true ");
console.log( possiblyPerfect([..."B_B"],[..."BDC"]) + " >> false ");
console.log( possiblyPerfect([..."T_FFF"],[..."FFTTT"]) + " >> true ");
console.log( possiblyPerfect([..."BA__"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABA_"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABC_"],[..."BACC"]) + " >> false ");
console.log( possiblyPerfect([..."B_"],[..."CA"]) + " >> true ");
console.log( possiblyPerfect([..."BA"],[..."CA"]) + " >> false ");
console.log( possiblyPerfect([..."B"],[..."B"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TFFF"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TTFT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."TTFT"]) + " >> false ");
console.log( possiblyPerfect([..."_TTT"],[..."TTTT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."FFFF"]) + " >> true ");
console.log( possiblyPerfect([..."____"],[..."FFFF"]) + " >> true ");



// Mean vs. Median
function meanVsMedian(numbers) {
    if(numbers.reduce((a, b) => a + b, 0) / numbers.length > numbers.sort((a, b) => a - b)[1]) return 'mean';
    if(numbers.reduce((a, b) => a + b, 0) / numbers.length < numbers.sort((a, b) => a - b)[1]) return 'median';
    if(numbers.reduce((a, b) => a + b, 0) / numbers.length === numbers.sort((a, b) => a - b)[1]) return 'same';
}

console.log(meanVsMedian([1, 1, 1]), ' >> same');
console.log(meanVsMedian([1, 2, 37]), ' >> mean');
console.log(meanVsMedian([7, 14, -70]), ' >> median');



// Swap the head and the tail
function swapHeadAndTail(arr) {
    if (arr.length % 2 != 0) {
        let index = (arr.length + 1)/2 -1;
        let kozepso = arr.splice(index, 1)
        for (let i = 0; i < arr.length/2; i++) {
          arr.push(arr.shift())
        }
        arr.splice(index, 0, ...kozepso)
      }
      else {
        for (let i = 0; i < arr.length/2; i++) {
          arr.push(arr.shift())
       }
      }
    return arr;
}

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);
