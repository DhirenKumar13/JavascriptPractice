module.exports.reverseAnInteger = (int) => {
    let reverseInt = int.toString().split('').reverse().join('');
    return parseInt(reverseInt) * Math.sign(int);
};