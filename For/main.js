/**
 * Vòng lặp - Loop
 * 
 *      1. for - lặp với điều kiện đúng
 *      2. for/in - Lặp qua key của đối tượng
 *      3. for/of - Lặp qua value của đối tượng
 *      4. while - Lặp khi điêu kiện đúng
 *      5. do/while - Lặp lại ít nhất 1 lần. Sau đó lặp nếu điều kiện đúng.
 */

//1. for
console.log('----------vòng lặp for----------');

for (let i = 1; i <=  10; i++) {
    //code
    console.log(i);
}
console.log('---------------');
var i = 1;
for (; i <= 10; i++) {
    console.log(i);
}

/**
 * Các trường hợp gây ra vòng lặp for vô hạn
 *      1. Biếu thức điều kiện luôn đúng (True) hoặc bỏ trống
 *      2. Bỏ trống biểu thức điều kiện
 *      3. Không có biểu thức tịnh tiến (biểu thức cuối)
 */

//Ứng dụng của for để lấy phần tử của mảng
console.log('----------Ứng dụng của for để lấy phần tử của mảng----------');

var myArray = [
    'Javascript',
    'PHP',
    'Java',
    'Dart',
    'Ruby',
    'Python'
];

var length = myArray.length;
for (let i = 0; i < length; i++) {
    console.log(myArray[i]);
}
//=> Hiệu suất tốt hơn

//2. for/in
console.log('----------vòng lặp for/in----------');

var myInfo = {
    name: 'Dau Tiep',
    age: 25,
    address: 'TP.HCM, VN'
};

for (let key in myInfo) {
    console.log(myInfo[key]);
}

console.log('---------------');
var languages = [
    'Javascript',
    'PHP',
    'Ruby'
];

for (let key in languages) {
    console.log(languages[key]);
}

console.log('---------------');
var myString = 'Javascript';

for (let key in myString) {
    console.log(myString[key]);
}

//3. for/of
console.log('----------vòng lặp for/of----------');

var langs = [
    'Javascript',
    'PHP',
    'Ruby'
];

for (let value of langs) {
    console.log(value);
}

console.log('---------------');
var textString = 'Javascript';

for (let value of textString) {
    console.log(value);
}

console.log('---------------');

var textInfo = {
    name: 'Dau Tiep',
    age: 25
};

console.log(Object.keys(textInfo));

for (let value of Object.keys(textInfo)) {
    console.log(textInfo[value]);
}

for (let value of Object.values(textInfo)) {
    console.log(value);
}

//4. while
console.log('----------vòng lặp while----------');

var i = 0;
var j = 0;
var textArray = [
    'Javascript',
    'PHP'
];
var lengthArr = textArray.length;


while (i < 10) {
    i++;
    console.log(i);
}

while (j < lengthArr) {
    console.log(textArray[j]);
    j++;
}

//5. do while
//Kiểm tra điều kiện từ lần lặp thứ 2
console.log('----------vòng lặp do while----------');

var  i = 0;
do {
    i++;
    console.log(i);
} while (i < 10);


var isSuccess = false;
var z = 0;
do {
    z++;
    //success
    console.log('Nạp thẻ lần ' + z);
    if (false) {
        isSuccess = true;
    }
} while (!isSuccess && z <= 3);


//break/continue
console.log('----------Break/continue----------');
for (let i = 0; i < 10; i++) {
    if (i > 5) break;
    console.log(i);
     
}

console.log('---------------');
for (let i = 0; i < 10; i++) {
    if (i %2 !== 0) {
        continue;
    }
    console.log(i);
}

//vòng lặp lồng nhau
console.log('----------Vòng lặp lồng nhau (nested loop)----------');

var testArr = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for (let i = 0; i < testArr.length; i++) {
    for (let j = 0; j < testArr[i].length; j++) {
        console.log(testArr[i][j]);
    }
}

//Bổ sung thêm về vòng lặp
for (let i = 100; i > 0; i -= 5) {
    console.log(i);
}



