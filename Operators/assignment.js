/**
 * Giới thiệu về toán tử trong javascript
 *      1. Toán tử số học - Arithmetic
 *      2. Toán tử gán - Assignment
 *      3. Toán tử so sánh - Comparision
 *      4. Toán tử logic - Logical
 *      5. Toán tử chuỗi - String
 */

/** 
 * 2. Toán tử gán - Assignment
 *      2.1. =      --> x = y <=> x = y
 *      2.2. +=     --> x += y <=> x = x + y
 *      2.3. -=     --> x -= y <=> x = x - y
 *      2.4. *=     --> x *= y <=> x = x * y
 *      2.5. /=     --> x /= y <=> x = x / y
 *      2.6. **=    --> x **= y <=> x = x ** y
*/

console.log('--------------Toán tử gán--------------');

//Toán tử '='
var a = 1; // vế phải được gán cho vế trái => 1 được gán cho a

//Toán tử '+='
a += 2; // a + 2 được gán lại cho a
console.log('a = a += 2 :', a);

//Toán tử '-='
a -= 2;
console.log('a = a -= 2 : ', a);

//Toán tử '*='
a *= 2;
console.log('a = a *= 2 : ', a);

//Toán tử '/='
a /= 2;
console.log('a = a /= 2 : ', a);

//Toán tử '**='
a **= 2;
console.log('a = a **= 2 : ', a);