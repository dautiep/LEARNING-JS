/**
 * Chuỗi trong javascript
 * 
 *      1. Tạo chuỗi
 *          - Các cách tạo chuỗi
 *          - Nên dùng cách nào? Lý do?
 *          - Kiểm tra data type
 *      2. Một số trường hợp sử dụng backlash (\)
 *      3. Xem độ dài chuỗi
 *      4. Chú ý độ dài khi viết code
 *      5. Template string ES6
 */

//1. Tạo chuỗi
var fullName = 'Dau Tiep' //cách 1
var fullName = new String('Dau Tiep') //cách 2
//=> Nên sử dụng cách số 1 vì nhanh hơn và cách 2 số tạo ra data type không mong muốn (object)

//2. Một số trường hợp dùng backlash
var textStr = 'Day là \'sieu nhan\''; // dùng \' để in ra ' trong chuỗi
var textStr1 = 'Day la dau \\'; // dùng \\ để in ra \ trong chuỗi
console.log(textStr);
console.log(textStr1);

//3. Kiểm tra độ dài một chuỗi
var myName = 'Dau Tiep   ';
console.log(myName.length);

//4. Chú ý độ dài khi viết code
//Nếu text quá dài thì nên xuống dòng (80 ký tự trên một hàng)
var textTest = 'Một số trường hợp sử dụng backlash'
+ '1. Một số trường hợp sử dụng backlash'
+ '2. Một số trường hợp sử dụng backlash'
+ '3. Một số trường hợp sử dụng backlash';
console.log(textTest);

//5. Template string
var firstName = 'Tiep';
var lastName = 'Dau';
console.log('Toi la ' + lastName + ' ' + firstName);// cách thông thường
console.log(`Toi la ${lastName} ${firstName}`); // template string

console.log('-------------Làm việc với chuỗi-------------');


/**
 * Làm việc với chuỗi
 * 
 *      1. Length
 *      2. Find index
 *      3. Cut string
 *      4. Replace
 *      5. Convert to upper case
 *      6. Convert to lower case
 *      7. Trim
 *      8. Split
 *      9. Get a character by index
 */

var myString  = 'Hoc JS JS JS tai F8';
//length: Lấy độ dài chuỗi
console.log('Độ dài của myString là:', myString.length); 

//find index: Tìm vị trí của chuỗi
console.log('JS nằm ở vị trí:', myString.indexOf('JS')); //trả về chuỗi JS  đầu tiên trong myString
console.log('SS nằm ở vị trí:', myString.indexOf('SS'));//nếu không tìm thấy sẽ trả về kết quả -1
console.log('JS thứ 2 nằm ở vị trí:', myString.indexOf('JS', 6));//trả về kết qảu của vị trí chuỗi Js thứ 2, 6 ở đây là vị trí hàm bắt đầu tìm kiếm trong myString
console.log('JS cuối cùng nằm ở vị trí:', myString.lastIndexOf('JS'));//trả về kết quả vị trí của chuỗi JS cuối cùng nằm trong myString
console.log('JS nằm ở vị trí:', myString.search('JS'));
/**
 * Search khác với indexOf ở:
 * - Không có param thứ 2
 * - Có thể search với biểu thức chính quy, param thứ 1 có thể truyền vào biểu thức chính quy
 */

//Cut string: Cắt chuỗi
console.log('Cắt chuỗi JS:', myString.slice(4, 6));
console.log('Cắt từ chuỗi Js đến hết:', myString.slice(4));
console.log('Cắt chuỗi F8 theo hướng ngược lại:', myString.slice(-2));
/**
 * Hàm slice nhận vào param:
 * - start: vị trí bắt đầu cắt chuỗi
 * - end: vị trí kết thúc
 * 
 * Muốn cắt từ vị trí a đến heets thì chi cần truyền vào start (vị trí bắt đầu)
 * Muốn cắt từ phải qua trái thì truyền start và end là các số âm đếm từ 0 -> -1 ,..
 */

//Replace: Thay thế
/**
 * Hàm replace nhận vào param:
 * - String hoặc regex: biếu thức chính quy để tìm ra chuỗi cần thay thế hoặc string của chuỗi đó
 * - String: chuỗi thay thế thế thành
 */
console.log('Chuỗi JS được thay thế thành Javascript:', myString.replace('JS', 'Javascript')); // thay thể chuỗi đầu tiên
console.log('Tất cả chuỗi JS thay thế thành Javascript:', myString.replace(/JS/g, 'Javascript')); //thay thế tất cả bằng regex

//Convert to upper case: Chuyển đổi chuỗi thành chữ hoa
console.log('Chuỗi thành chữ hoa:', myString.toUpperCase());

//Convert to lower case: Chuyển đổi chuỗi thành chữ thường
console.log('Chuỗi thành chữ thường:', myString.toLowerCase());

//trim: Xóa khoảng trắng ở 2 đầu
var textToTrim = '    Toi la lap trinh vien   ';
console.log(textToTrim.trim());

//Split: Cắt một chuỗi thành array theo một quy tắc
var languages = 'Javascript, PHP, Ruby';
var lang = 'PHP';
console.log(languages.split(', '));
console.log(lang.split(''));

//Get a character by index: Lấy ra phân từ từ một vị trí
var myString2 = 'Dau Tiep';
console.log(myString2.charAt(2));
console.log(myString2[2]);
console.log(myString2.charAt(20)); //nếu không tìm được, kết quả ra về là chuỗi rỗng ''
console.log(myString2[20]);// nếu không tìm được, kết quả trả về là undefined




