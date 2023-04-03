/**
 * Câu lệnh điều kiện if - else.
 * Biểu thức điều kiện sẽ được tự động covert sang boolean
 * Nếu convert thành true -> nhảy vào if
 * Nếu convert thành false -> nhảy vào else
 */

/**
 * Các giá trị convert sang boolean là false. Còn lại convert sang là true
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 */

var isSuccess = 0 < 1;
if (isSuccess) {
    console.log('Dieu kien dung');
} else {
    console.log('Dieu kien sai');
}

if (0) {
    console.log('Dieu kien dung');
} else {
    console.log('Dieu kien sai');
}

var a = 1;
var b = 2;
if (a < b) {
    console.log('A < B');
} else {
    console.log('A > B');
}

console.log('-------------Hiểu rõ hơn về if/else');

var date = 9;

if (date === 2) {
    console.log(`Hôm nay là thứ ${date}`);
} else if (date === 3) {
    console.log(`Hôm nay là thứ ${date}`);
} else if (date === 4) {
    console.log(`Hôm nay là thứ ${date}`);
} else {
    console.log('Không biết');
}

//nếu dùng else if luôn luôn chạy vào một nhánh




