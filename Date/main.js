/**
 * Đối tượng date
 */

var date = new Date();
console.log(typeof date);
console.log(date); //trả về string
console.log(date.toString());
console.log(date.getMonth()); //trả về từ 0 - 11. Phải cộng thêm 1 mới ra kết quả đúng


var dateNow = Date();
console.log(typeof dateNow);
console.log(date);

console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);

