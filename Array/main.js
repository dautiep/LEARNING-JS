/**
 * Mảng trong javascript - Array
 * 
 *      1. Tạo mảng
 *          - Tạo mảng
 *          - Sử dụng cách nào? Tại sao?
 *          - Kiểm tra data type
 *      2. Truy xuất mảng
 *          - Độ dài mảng
 *          - Lấy phần tử theo index
 */

//Cách 1:
var languages = ['PHP', 'Javascript', 'Ruby', 'Nodejs'];
console.log(languages);

//Cách 2:
var langs = new Array('PHP', 'Javascript', 'Ruby', 'Nodejs');
console.log(langs);
//=> Nên dùng cách 1, vì cách 2 tạo instance

//Kiểm tra xem biến đó có phải là array hay không
console.log(Array.isArray(languages));

//Đếm độ dài của mảng
console.log(languages.length);

//Lấy phần tử của mảng theo index
console.log(languages[2]);



/**
 * Làm việc với mảng
 * 
 *      1. To string
 *      2. Join
 *      3. Pop
 *      4. Push
 *      5. Shift
 *      6. Unshift
 *      7. Splicing
 *      8. Concat
 *      9. Slicing
 */

console.log('----------Làm việc với mảng----------');

var programLanguages = ['Javascript', 'PHP', 'Ruby'];
//To string : Biến đổi mange thành chuỗi
console.log('Biến đổi thành chuỗi:', programLanguages.toString()); //tự động thêm dấu , để ngăn cách các phần tử của mảng
console.log ('Kiểm tra data type:', typeof programLanguages.toString());

//Join: Biến đổi mảng thành chuối
console.log('Biến đổi thành chuỗi:', programLanguages.join(' - '));
//tương tự như toString chỉ có điều param truyền vào là dấu quy định ngăn cách các phần tử của mảng

//Pop: Xóa đi phần tử ở cuối mảng rồi trả về phần tử đó
console.log('Mảng trước khi xóa:', programLanguages);
console.log('Xóa đi phân tử cuối:', programLanguages.pop());
console.log('Mảng sau khi xóa', programLanguages);
//Khi mảng không còn phần tử nào để xóa, thì kết quả trả về pop là undefined

//Push: Thêm một hoặc phần tử vào cuối mảng, trả về độ dài mới của mảng
console.log('Thêm một phần tử vào cuối mảng:', programLanguages.push('Dart'));
console.log('Thêm một vài phần tử của cuối mảng:', programLanguages.push('Java', 'Apex'));
console.log('Mảng sau khi thêm:', programLanguages);

//Shift: Xóa đi một phần tử ở đầu mảng rồi trả về phần tử đó
console.log('Xóa đi phần tử đầu:', programLanguages.shift());
console.log('Mảng sau khi xóa:', programLanguages);
//Khi mảng không còn phần tử nào để xóa, thì kết quả trả về shift là undefined

//Unshift: Thêm một hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng
console.log('Thêm một phần tử vào đầu mảng:', programLanguages.unshift('Javascript'));
console.log('Thêm một vài phần tử vào đầu mảng:', programLanguages.unshift('C++', 'C#'));
console.log('Mảng sau khi thêm:', programLanguages);

//Splicing: xóa, cắt chèn cả phần tử mới vào mảng
//Xóa element: gồm 2 param: vị trí bắt đầu, số lượng phần tử thực hiện.
programLanguages.splice(1, 2);
console.log('Mảng sau khi xóa:', programLanguages);

//Chèn gồm 3 param: vị trí bắt đầu, số lượng xóa, chèn thêm phần tử
programLanguages.splice(1, 0, 'LWC');
console.log('Mảng sau khi chèn:', programLanguages);

//Concat: Nối 2 array
var programLanguages2 = ['C', 'Flutter'];
console.log('Mảng sau khi nối:', programLanguages.concat(programLanguages2));

//Slicing: Cắt một vài element hoặc tất cả element của mảng
//Bao gồm 2 param: Vị trí bắt đàu cắt, cắt bao nhiêu phần tử, tương tự như string
console.log(programLanguages.splice(1, 2));
console.log('Mảng sau khi cắt:', programLanguages);

/**
 * Làm việc với mảng phần 2
 * 
 *      1. forEach()
 *      2. every()
 *      3. some()
 *      4. find()
 *      5. filter()
 *      6. map()
 *      7. reduce()
 */

console.log('----------Làm việc với mảng (tiếp theo)----------');
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'PHP',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'HTML, CSS',
        coin: 500
    },
    {
        id: 5,
        name: 'Ruby',
        coin: 400
    },
];

//1 forEach()
// kết quả trả về là undefined
courses.forEach(function(item, index) {
    console.log(index, item);
});

//2 every()
//Kiểm tra tất cả các phần tử của mảng thỏa mãn một điều kiện nào đó? Trả về giá trị boolean. Khi gặp phần tử không thỏa điều kiện thì return false luôn

var isFree = courses.every(function(item, index) {
    return item.coin === 0;
});

console.log(isFree);

//3 some()
//Kiểm tra một phần tử của mảng thỏa mãn một điều kiện nào đó? Trả về giá trị boolean. Khi gặp một phần tử thỏa điều kiện thì return true luôn
var isFree = courses.some(function(item, index) {
    return item.coin === 0;
});

console.log(isFree);

//4 find()
//Tìm kiếm phần tử theo điều kiện nào đó? Nếu có trả về chính phân tử đó còn không có thì trả về undefined. Chỉ trả về 1 phần tử đầu tiên
var course = courses.find(function(item, index) {
    return item.name === 'Ruby';
});

console.log(course);

//5 filter
//Tương tự find nhưng trả về tất cả phần tử thỏa mãn
var courseResult = courses.filter(function(item, index) {
    return item.name === 'Ruby';
});

console.log(courseResult);

//6 map()
//Trả về một array mới có số lượng phần tử = với số lượng phần tử của array gốc. Function map trả về gì thì phần tử của array mới sẽ như thế
var newCourses = courses.map(function(item, index) {
    return {
        id: item.id,
        name: `Khoa hoc: ${item.name}`,
        coin: item.coin,
        coninText: `Gia: ${item.coin}`,
        index: index,
    };
});

console.log(newCourses);

//7 reduce()
//Trả về một giá trị khi duyệt qua array

//Cách 1:
var totalCoin = 0;
for (var course of courses) {
    totalCoin += course.coin;
}
console.log(totalCoin);

//Cách 2
//courses.reduce(function(accumulator(biến lưu trữ), curentValue, curentIndex, originArray) {}
var i  = 0;
var coins = courses.reduce(function(accumulator, curentValue) {
    // i++;
    // console.table({
    //     'Lượt chạy: ': i,
    //     'Biến lưu trữ: ': accumulator,
    //     'Giá khóa học: ': curentValue.coin,
    //     'Tích trưc được: ':  accumulator + curentValue.coin
    // });
    // console.log(curentValue);
    return accumulator + curentValue.coin;
}, 0) //initial không bắt buộc
 
//Khi không có initial thì lần chạy đầu tiên sẽ trả về phần tử đầu tiên của array
//Khi mong muốn nhận cái giá trị cuối cùng là gì thì biến initial phải để cungd kiểu dữ liệu

console.log(coins);

//Khi mảng là mảng đơn và có kiểu dữ liệu trung với kiểu dữ liệu của mihf mong muốn xử lý thì không cần phải truyền initial
var numbers =  [250, 0, 0, 500, 400];
var total = numbers.reduce(function(all, number){
    return all + number;
});

console.log(total);

/**Bài tập */
console.log('----Bài tập----');
//Bài 1: Làm phẳng mảng sau (quy về mảng một chiều)
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var platArray = depthArray.reduce(function(platOutput, depthItem) {
    return platOutput.concat(depthItem);
}, []);
console.log('Kết quả sau khi làm phẳng', platArray);

//Bài 2: Lấy ra các khóa học và đưa vào một mảng mới
var topics = [
    {
        topic: 'Front-end',
        course: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'Javascript'
            }
        ]
    },
    {
        topic: 'Back-end',
        course: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NodeJS'
            }
        ]
    }
];
var newCourses = topics.reduce(function(courses, topic) {
    return courses.concat(topic.course);
}, []);
console.log('Mảng các môn học sau khi xử lý', newCourses);

