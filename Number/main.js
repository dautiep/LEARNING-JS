/**
 * Kiểu số (Number) trong javascript
 * 
 *      1. Tạo giá trị number
 *          - Các cách tạo
 *          - Dùng cách nào? Tại sao?
 *          - Kiểm tra data type
 * 
 *      2. Làm việc với number
 *          - To string
 *          - To Fixed
 */

//Cách 1:
var age = 18;
var PI = 3.14;

//Cách 2:
var otherNumber = new Number(9);

//=> Nên dùng cách 1, vì cách 2 nó dài hơn và khởi tạo 1 đối tượng

var result = 20 / 'ABC';
console.log(result); //NaN: đại diện một số không hợp lệ
console.log(typeof result); // number

//Kiểm tra xem biến đó có phải là NaN
console.log(isNaN(result));

//Làm việc với number
console.log(age.toString()); // conver number -> string

console.log(PI.toFixed()); // convert number -> string, làm tròn
//Tham số truyền vào là số thập phân làm tròn sau dấu ,
var number1 = 3.1234543;
console.log(number1.toFixed(4));// 3.1235