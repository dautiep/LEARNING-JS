/**
 * Giới thiệu về toán tử trong javascript
 *      1. Toán tử số học - Arithmetic
 *      2. Toán tử gán - Assignment
 *      3. Toán tử so sánh - Comparision
 *      4. Toán tử logic - Logical
 *      5. Toán tử chuỗi - String
 */


/** 
 * 4. Toán tử số logic - Logical
 *      4.1. &&      --> AND (tất cả mệnh đề đều trả về TRUE)
 *      4.2. ||      --> OR (một trong các mệnh đề trả về TRUE)
 *      4.3. !       --> NOT (phủ định)
 *      4.4. ===
 *      4.5. !==
*/

console.log('--------------Toán tử logic--------------');

var a = 1;
var b = 2;
var c = 3;

//Toán tử &&
if (a > 0 && b > 0 && c > 0) {
    console.log('Dieu kien dung');
}

/**
 * Kiểm tra từng số hạng trong toán tử nếu có số hạng convert sang boolean = false thì sẽ gán result = số hạng đó và trả về kết quả
 * Ngược lại sẽ kiếm tra đến hết và gán cho số hạng cuối cùng
 * 
 * Các bước thực hiện cho result
 * Step 1: Kiểm tra 'A', không nằm trong 6 giá trị convert sang boolean = false => Chuyển sang số hạng tiếp theo
 * Step 2: Kiểm tra 'B', không nằm trong 6 giá trị convert sang boolean = false => Chuyển sang số hạng tiếp theo
 * Step 3: Vì 'C' là số hạng cuối cùng nên 'C' sẽ được gán cho result. Và kết quả trả về là 'C'
 * 
 * Các bước thực hiện cho resultFail
 * Step 1: Kiểm tra 0, nằm trong 6 giá trị convert sang boolean = false => 0 được gán cho resultFail và trả về kết quả là 0
 * Step 2: Vì resultFail = 0, convert sang boolean là false. Nên câu lệnh if trả về 'Dieu kien sai'
 */
var result = 'A' && 'B' && 'C';
var resultFail = 0 && 'B' && 'C'
console.log('result:', result); // kết quả trả về là C
console.log('Result fail:', resultFail);// kết quả trả về là 0
if (resultFail) {
    console.log('Dieu kien dung');
} else {
    console.log('Dieu kien sai'); // kết quả
}



//Toán tử ||
if (a > 0 || b < 2) {
    console.log('Dieu kien dung');
}

/**
 * Kiểm tra từng số hạng trong toán tử nếu số hạng đó convert sang boolean = true thì sẽ gán result = số hạng đó và trả về kết quả
 * Ngược lại sẽ kiếm tra đến số hạng tiếp theo
 * 
 * Các bước thực hiện cho result2
 * Step 1: Kiểm tra 'A', không nằm trong 6 giá trị convert sang boolean = false => Gán 'A' cho result2 và trả về kết quả
 * 
 * Các bước thực hiện cho result3
 * Step 1: Kiểm tra 0, nằm trong 6 giá trị convert sang boolean = false => 0, chuyển đến số hạng tiếp theo
 * Step 2: Kiểm tra 'B', không nằm trong 6 giá trị convert sang boolean = false => Gán 'B' cho result2 và trả về kết quả
 */
var result2 = 'A' || 'B' || 'C';
var result3 = 0 || 'B' || 'C';
console.log('result2', result2);
console.log('result3', result3);

//Toán tử !
if (!(a - b > 0)) {
    console.log('Dieu kien dung');
}

//Toán tử ===
var a1 = 1;
var b1 = 1;
var c1 = '1';
console.log(a1 == b1); // so sánh value => true
console.log(a1 === c1); //so sánh cả value và data type => false

//Toán tử !==
console.log(a1 != b1); // false
console.log(a1 !== c1); //true