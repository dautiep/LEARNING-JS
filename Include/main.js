/**
 * Includes method: dùng cho array và string
 */

console.log(Array.prototype.includes);
console.log(String.prototype.includes);

/**
 * Khi dùng cho thì có 2 param
 * param 1: chuỗi cần tìm
 * param 2: thứ tự bắt đầu tìm (nếu không chuyền vào thì mặc định là 0). nếu truyền số âm thứ tự tìm kiếm là length + (số âm đó) (ít dùng param thứ 2)
 * Kết quả trả về true hoặc false
 */
var title = 'Responsive web design';
console.log(title.includes('web'));
console.log(title.includes('abc'));

var courses = ['Javascript', 'PHP'];
console.log(courses.includes('PHP'));
console.log(courses.includes('Ruby'));

