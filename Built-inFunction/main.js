/**Built-in funciton là một số hàm được javascript xây dựng sẵn, chỉ việc gọi ra và sử dụng
 * Một số hàm buidt-in:
 *      1. Alert
 *      2. Console
 *      3. Confirm
 *      4. Prompt
 *      5. Set timeout
 *      6. Set interval
 */

//Console
var fullName = 'DAU LE QUOC TIEP';
var age = 25;
console.log(fullName); // in ra một dòng log với nội dung DAU LE QUOC TIEP
console.warn(fullName); //in ra một dòng cảnh báo (warning) với nội dung DAU LE QUOC TIEP (có hình tam giác ! màu vàng)
console.error(fullName); //in ra một lỗi (error) với nội dung DAU LE QUOC TIEP (màu đỏ)

//Confirm
confirm('Xac nhan ban du tuoi'); // hiển thị lên hộp thoại xác nhận

//Prompt
prompt('Xac nhan ban du tuoi'); // hiển thị hộp thoại dạng form để nhập thông tin

//Set timeout
setTimeout(function() {
    console.log(fullName);
}, 1000); //chạy một đoạn code sau một khoảng thời gian cài đặt. Thời gian cài đặt là mili giây

//Set interval
setInterval(function() {
    console.log(age);
}, 1000); //Chạy một đoạn code sau một khoảng thời gian được cài đặt lặp đi lặp lại. Thời gian cài đặt là mili giây


