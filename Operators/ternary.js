/**
 * Toán tử 3 ngôi - ternary operator
 */

console.log('-------------Toán tử 3 ngôi-------------');
var course = {
    name: 'Javascript',
    coin: 250
};

if (course.coin > 0) {
    console.log(`${course.coin} coin`);
} else {
    console.log('Miễn phí');
}

var result = course.coin > 0 ? `${course.coin} coin` : 'Miễn phí';
console.log(result);


var a = 1;
var b = 2;
var c = a > 0 ? a : b;