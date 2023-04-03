/**
 * Kiểu dữ liệu trong javascript
 * 
 *      1. Dữ liệu nguyên thủy - Primitive Data
 *          - Number
 *          - String
 *          - Boolean
 *          - Undefined
 *          - Null
 *          - Symbol
 * 
 *      2. Dữ liệu phức tạp = Complex Data
 *          - Function
 *          - Object
 */

//Dữ liệu nguyên thủy
var a = 1; // số 1 được tạo ra và lưu vào một ô nhớ (vùng nhớ tạm ở RAM) và gán địa chỉ ô nhớ của số 1 cho a
a = 2; //Giá trị của số 1 được update thành 2 và gán địa chỉ ô nhớ của số 2 cho a.

//Number type
var a = 1;
var b = 1.5;
console.log(typeof a); // check type của biến. Kết quả trả về là Number

//String type
var fullName = 'Dau Tiep';
var firstName = "Tiep";
var fullN = 'Dau Le \'Quoc\' Tiep';
console.log(fullN);

//Boolean type
var isSuccess = true;
var isFail = false;

//Undifined type
var age; // khai báo biến nhưng không gán giá trị
console.log(age);

//Null type
var isNull = null;
console.log(isNull);
console.log(typeof isNull); // Đối với null type, khi check type kết quả trả về là Object

//Symbol type
var id = Symbol('id'); //unique
var id2 = Symbol('id'); //unique
console.log(id == id2);


//Dữ liệu phức tạp

//Function type
var myFuncton = function () {
    alert('Hi. Xin chào các bạn'); //function không được chạy. Nó chỉ cahyj khi được call
}

//Object type
var myObj = {
    name: 'Dau Tiep',
    age: 25,
    address: 'Ho Chi Minh',
    myFunction: function () {
        console.log('Function nè');
    }
};
console.log(typeof myObj); //object

console.log('myObject:', myObj);

var myArray = [
    'Javescript',
    'PHP',
    'Ruby'
]; //Thực chất array vẫn có dạng key => value nhưng key nó được set mặc định bắt đầu từ 0
console.log(myArray);
console.log(typeof myArray); //object






