/**
 * Hàm - Function trong Javascript
 * 
 *      1. Hàm?
 *          - Một khối mã
 *          - Làm một việc cụ thể
 * 
 *      2. Loại hàm
 *          - Buildt-in
 *          - Tự định nghĩa
 * 
 *      3. Tính chất
 *          - Không thực thi khi định nghĩa
 *          - Sẽ thực thi khi được gọi
 *          - Có thể nhận tham số
 *          - Có thể trả về một giá trị
 * 
 *      4. Tạo hàm đầu tiên
 */

//Hàm là một khối mã và chỉ làm một việc cụ thể

//Tạo hàm
function showDialog() {
    //code
    console.log('Hi, xin chào các bạn!');
}

//call ()
showDialog();

/**
 * Tham số hàm
 * 
 *      1. Tham số?
 *          - Định nghĩa? Tham số là giá trị truyền vào ghi mà gọi tới một function
 *          - Kiểu dữ liệu?
 *          - Tính private
 *          - 1 tham số
 *          - Nhiều tham số
 * 
 *      2. Truyền tham số
 *          - 1 tham số
 *          - Nhiều tham số
 * 
 *      3. Aguments? Đối số
 *          - Đối tượng aguments?
 *          - Giới thiệu vòng lặp for of
 */

function writeLog(message, message2, message3) {
    console.log(message);
    console.log(message2);
    console.log(arguments);//in ra danh sách tham số truyền vào function
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `;
    }
    console.log(myString);
}

writeLog('Text message', 'aaa', 'bbbb'); //nếu như tham số không truyền thì mặc định sẽ là undefined

/**
 * Return trong function
 */

console.log('------------Return trong function------------');

function add(a, b) {
    return a + b;
}

//Nếu một hàm không có trả về thì mặc định giá trị trả về là undefined. Các dòng dưới return sẽ không được thực thi

var result = add(2, 8);
console.log('Kết quả là:', result);


/**
 * Hiểu rõ hơn về function
 * 
 *      1. Khi function đặt trùng tên
 *      2. Khai báo biến trong hàm (đặt được bình thường)
 *      3. Định nghĩa hàm trong hàm
 */

//1. Khi có các function trùng tên thì chỉ có function được định nghĩa sau cùng trùng tên mới thực thi khi gọi
function showMess1() {
    console.log('Msg 1');
}

function showMess1() {
    console.log('Msg 2');
}

showMess1();


//2. Hoàn toàn có thể đặt biến trong function thì nó chỉ có tác dụng, quyền sử dụng trong function đó

//3. Hoàn toàn có thể định nghĩa hàm trong hàm thì nó chỉ có tác dụng, quyền sử dụng trong function đó

function showMess2() {
    function showMess3() {
        console.log('run');
    }

    showMess3();
}

showMess2();

/**
 * Các loại function
 * 
 *      1. Declaration function
 *      2. Expression function
 *      3. Arrow function
 */

//1. Declaration function (function định nghĩa)
showToast(); //có thể gọi trước khi định nghĩa
function showToast() {
    console.log('Declation function');
}

//2. Express function (không cần đặt tên function)
//Đặt tên để đọc dễ hiểu hơn thôi
//Không thể gọi trước khi định nghĩa
var result = function showToast1() {
    console.log('Expression function');
}

setTimeout(function showToast2() {

});

var myObject = {
    showToast3: function() {

    }
}









