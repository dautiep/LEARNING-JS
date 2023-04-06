//Set: các phần tử trong set là unique
var array = ['a', 'b', 'c', 'a', 'b', 'd', 'e'];
console.log([...(new Set(array))]);

//Đệ quy
/**
 * 1. Xác định được điểm dừng
 * 2. Phải có phần xử lý logic (tạo ra điểm dừng)
 */
function countDown(num) {
    if (num > 0) {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}

countDown(10);

console.log('------------------');
function loop(start, end, callback) {
    if (start <= end) {
        callback(start);
        return loop(start + 1, end, callback);
    }
}

loop(0, array.length-1, function(index) {
    console.log(array[index]);
});


//tính giai thừa
//Cách 1: Loop
function giaiThua(num) {
    var output = 1;
    for (var i = num; i > 0; i--) {
        output *= i;
    }
    return output;
}
console.log(giaiThua(6));

//Cách 2: Đệ quy

function giaThuaRecur(num) {
    if (num > 0) {
        return num * giaThuaRecur(num - 1);
    }
    return 1;
}
console.log(giaThuaRecur(6));
