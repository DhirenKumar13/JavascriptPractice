const reverseString = require('./StringReversal/string_reversal');
const check = require('./PallindromeString/pallindrome');
const intReverse = require('./ReverseInteger/reverse_int');
const capitalize = require('./CapitalizeInitialWord/capitalize');

console.log("##################################################");
console.log("STRING REVERSAL CHALLENGE FOR 'Dhiren' ");
console.log("##################################################");

console.log('Using split() reverse() and join() ', reverseString.splitReverseJoin('Dhiren'));
console.log('Using for loop                     ', reverseString.forLoopReverse('Dhiren'));
console.log('Using for in loop                  ', reverseString.forInLoopReverse('Dhiren'));
console.log('Using for of loop                  ', reverseString.forOfLoopReverse('Dhiren'));
console.log('Using reduce func                  ', reverseString.reduceHighOrderFunction('Dhiren'));
console.log('Using foreach funcn                ', reverseString.usingForeach('Dhiren'));

console.log("##################################################");
console.log("STRING PALINDROME CHALLENGE");
console.log("##################################################");


console.log('Check for Palindrome for Dhiren   ',
    check.checkPalindrome('Dhiren', reverseString.usingForeach('Dhiren')));

console.log('Check for Pallindrome for racecar  ',
    check.checkPalindrome('racecar', reverseString.usingForeach('racecar')));

console.log('Check for Pallindrome for Racecar  ',
    check.checkPalindrome('racecar', reverseString.usingForeach('racecar')));

console.log("##################################################");
console.log("INTEGER NUMBER REVERSE CHALLENGE");
console.log("##################################################");

console.log('Reverse of Integer 12345 is        ',intReverse.reverseAnInteger(12345));
console.log('Reverse of Integer -12345 is       ',intReverse.reverseAnInteger(-12345));

console.log("##################################################");
console.log("CAPITALIZE INITIAL CHARACTER OF EACH WORD CHALLENGE");
console.log("##################################################");

console.log('Capitalizing I love anushka        ',capitalize.capitalizeInitialWord('I love anushka'));
console.log('Capitalizing i lOve anUsHka        ',capitalize.capitalizeInitialWord('i lOve anUsHka'));