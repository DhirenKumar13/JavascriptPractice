module.exports.capitalizeInitialWord = (str) => {

    return str.toLowerCase().split(' ').map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(' ');

};