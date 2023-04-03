//Kiểm tra số nguyên dương trong mảng
const numbers  = [1, 2, 3, 4, -1, -2, 0, '1'];
const res = numbers.reduce((nums, item) => {
    if (Number.isInteger(item) && item > 0) {
        nums.push(item);
    }
    return nums;
}, []);
console.log(res);

//Tính tổng của các số nguyên dương trong một mảng
const inputArray = [1, 2, 3, 4, -1, -2, 0, '1'];
const resTotal = inputArray.reduce((total, item) => {
    if (Number.isInteger(item) && item > 0) {
        total +=item;
    }
    return total;
}, 0);
console.log(resTotal);

//Giải phương trình bậc 1
function handleSimpleEquation(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return 'phương trình không hợp lệ';
    if (a == 0) {
        if (b != 0) return 'phương trình vô nghiệm';
        return 'phương trình vô số nghiệm';
    }
    return `x = ${-b/a}`;
}

//Kiểm tra số nguyên tố
function checkPrimeNumber(n) {
    if (typeof n !== 'number') return false;
    if (!Number.isInteger(n)) return false;
    if (n == 2) return true;
    if (n < 2 || n % 2 == 0) return false;
    for (let i =3; i <= Math.sqrt(n); i+=2) {
        if (n % i == 0) return false;
        
    }
    return true;
}

let re = handleSimpleEquation(2, 1);
console.log(re);

let rePrime = [1, -1, 'aa', 7, 9, 13, 17];
const re1 =  rePrime.reduce((nums, item) => {
   if (checkPrimeNumber(item)) {
       nums.push(item);
   }
   return nums;
}, []);
console.log(re1);

