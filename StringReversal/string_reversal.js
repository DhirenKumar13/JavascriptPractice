const splitReverseJoin = (str) => {
    return str.split('').reverse().join('');
};

const forLoopReverse = (str) => {
    const strArray = str.split('');
    let reverseStr = '';
    for(let char = strArray.length-1 ; char >= 0 ; char --) {
        reverseStr = reverseStr + strArray[char];
    }
    return reverseStr;
}

const forInLoopReverse = (str) => {
    const strArray = str.split('');
    let reverseStr = '';
    for(let char in strArray) {
        reverseStr = strArray[char] + reverseStr ;
    }
    return reverseStr;
}

const forOfLoopReverse = (str) => {
    const strArray = str.split('');
    let reverseStr = '';
    for(let char of strArray) {
        reverseStr = char + reverseStr ;
    }
    return reverseStr;
}

const reduceHighOrderFunction = (str) => {
    let reverseStr = '';
    return str.split('').reduce((reverseStr, char) => {
        return char + reverseStr;
    }, '');
};

const usingForeach = (str) => {
    let reverseStr = '';
    str.split('').forEach((char) => {
        reverseStr = char + reverseStr;
    });
    return reverseStr;
};

module.exports = {
    splitReverseJoin,
    forLoopReverse,
    forInLoopReverse,
    forOfLoopReverse,
    reduceHighOrderFunction,
    usingForeach
}