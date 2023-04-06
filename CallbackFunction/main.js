/**
 * Callback function
 * 
 * 1. Là Hàm được truyền qua đối số
 * 2. Khi gọi hàm khác
 */


function myFunction(param) {
    if (typeof param === 'function')
    param('Học lập trình');
}

function myCallback(value) {
    console.log('Value: ', value)
}

myFunction(myCallback);


//ví dụ tạo một function
Array.prototype.map2 = function(callback) {
    // console.log(this); => courses (chính thằng gọi tới phương thức này )
    let arrayLength = this.length;
    let output = [];
    for (var i = 0; i < arrayLength; i++) {
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

var html = courses.map2(function(course) {
    return `<h2>${course}</h2>`;
});

console.log(html);



var htmls = courses.map(function(course, index) {
    return `<h2>${course}</h2>`;
});

console.log(htmls);


//Bài tập chọn ngẫu nhiên một phương thức: forEach, reduce, find, filter
console.log('------Bài tập------');

console.log('------forEach------');
var fruits = [
    'apple',
    'mango',
    'peach'
];

fruits.forEach(function(item, index) {
    let fruit = item + ' vietnam';
    fruits[index] = fruit;
});

console.log('Kết quả hàm nguyên bản:',fruits);

var fruitList = [
    'apple',
    'mango',
    'peach'
];

//tạo hàm custom
Array.prototype.forEachCustom = function(callback) {
    let arrFruit = [];
    for (let index in this) {
        //kiểm tra index có phải là property hay không
        if(this.hasOwnProperty(index)) {
            var fruit =  callback(this[index], index);
            arrFruit.push(fruit);
        }
    }
    return arrFruit;
}

fruitList.forEachCustom(function(item, index){
    let fruit = item + ' vietnam';
    fruitList[index] = fruit;
});

console.log('Kết quả hàm custom:', fruitList);

console.log('------Reduce------');

var books = [
    {
        name: 'Book a',
        price: 400,
        course: [
            {
                name: 'Book d',
                price: 100
            },
            {
                name: 'Book e',
                price: 200
            }
        ]
    },
    {
        name: 'Book b',
        price: 500,
    },
    {
        name: 'Book c',
        price: 600,
    }
];

var strResult =  books.reduce(function(result, item, index) {
    if (item.course !== undefined) {
        result = result.concat(item.course);
        let temp = {...item};
        delete temp.course;
        result = result.concat(temp);
        return result;
    }
    return result.concat(item);
    //Cách xử lý 2 
    // if (index != 0) {
    //     let nameBookStr = item.name.slice(5);
    //     return str + `${nameBookStr} `;
    // }
    // return str + `${item.name} `;

    //Cách xử lý 3
    // return str * item.price;
}, []);

console.log('Kết quả hàm nguyên bản:', strResult);

//Tạo hàm custom
Array.prototype.reduceCustom = function(callback, initialValue) {
    let arrLength = this.length;
    let resultValue = initialValue;
    for (let i  = 0; i < arrLength; i++) {
        var temp = callback(resultValue, this[i], i);
        resultValue = temp;
    }
    return resultValue;
}

var strResultCustom =  books.reduceCustom(function(result, item, index) {
    if (item.course !== undefined) {
        result = result.concat(item.course);
        delete item.course;
        result = result.concat(item);
        return result;
    }
    return result.concat(item); 
    // if (index != 0) {
    //     let nameBookStr = item.name.slice(5);
    //     return str + `${nameBookStr} `;
    // }
    // return str + `${item.name} `;
    // return str * item.price;
}, []);

console.log('Kết quả hàm custom:', strResultCustom);

