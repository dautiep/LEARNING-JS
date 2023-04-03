/**
 * Giới thiệu về toán tử trong javascript
 *      1. Toán tử số học - Arithmetic
 *      2. Toán tử gán - Assignment
 *      3. Toán tử so sánh - Comparision
 *      4. Toán tử logic - Logical
 *      5. Toán tử chuỗi - String
 */


/** 
 * 1. Toán tử số học - Airthmetic
 *      1.1. +      --> Cộng
 *      1.2. -      --> Trừ
 *      1.3. *      --> Nhân
 *      1.4. **     --> Lũy thừa
 *      1.5. /      --> Chia
 *      1.6. %      --> Chia lấy số dư
 *      1.7. ++     --> Tăng 1 giá trị số
 *      1.8. --     --> Giảm một giá trị số
*/

console.log('--------------Toán tử số học--------------');

//Cộng
var a = 1;
var b = 2;
var c = a + b;// a cộng b
console.log('c = a + b =' + c);

//Trừ
var a1 = 1;
var b1 = 2;
var c1 = a1 - b1; // a trừ b
console.log('c1 = a1 - b1 =' + c1);

//Nhân
var a2 = 1;
var b2 = 2;
var c2 = a2 * b2; // a nhân b
console.log('c2 = a2 * b2 = ' + c2);

//Lũy thừa
var a3 = 3;
var b3 = 2;
var c3 = a3 ** b3; // a lũy thừa b
console.log('c3 = a3 ** b3 = ' + c3);

//Chia lấy số dư
var a4 = 3;
var b4 = 2;
var c4 = a4 % b4; // a chia lấy số dư b
console.log('c4 = a4 % b4 = ' + c4);

//Chia
var a5 = 3;
var b5 = 2;
var c5 = a5 / b5;
console.log('c5 = a5 / b5 = ' + c5);

//Tăng lên một giá trị số
var a6 = 5;
a6++;
console.log('a6 = a6++ = ' + a6);

//Giảm xuống một giá trị số
var a7 = 5;
a7--;
console.log('a7 = a7-- = ' + a7);

/**
 * Toán tử  ++ --
 * Prefix (tiền tố) & Postfix (hậu tố)
 */

/**
 * Prefix
 * Step 1: a7 = a7 + 1
 * Step 2: return a, assign a for output
 */
var a7 = 6;
var output = ++a7;
console.log('output: ', output);
console.log('a7: ', a7);

/**
 * Prefix
 * Step 1: Assign a8 for output1
 * Step 2: a8 = a8 + 1
 * Step 3: return output1
 */
var a8 = 6;
var output1 = a8++;
console.log('output1: ', output1);
console.log('a8: ', a8);

//Example
var number = 6;
var out = number++ + --number;
/**
 * Step 1: Thực hiện number++ trả về là 6
 * Step 2: Lúc này number  = 7, Thực hiện --number trả về là 6
 * Step 3: Thực hiện 6 + 6 = 12
 */
console.log('out: ', out);
