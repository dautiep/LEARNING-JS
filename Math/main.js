/**
 * Math Object
 * 
 * - Math.PI
 * - Math.round()
 * - Math.abs()
 * - Math.ceil()
 * - Math.floor()
 * - Math.random()
 * - Math.min()
 * - Math.max()
 */

//Math.PI : in ra số pi
console.log('Số PI là:', Math.PI);

//Math.round(): làm trong số
console.log('Số 3.14789 khi làm trong là:', Math.round(3.14789));

//Math.abs(): trị tuyệt đối
console.log('Trị tuyệt đối của -4:', Math.abs(-4));

//Math.ceil(): làm tròn lên. Chỉ khi có một số nào đó sau thập phân lớn hơn 1 thì sẽ làm trong số đó lên
console.log('Số sau khi làm tròn', Math.ceil(4.00000001));
console.log('Số sau khi làm tròn', Math.ceil(4.00000000));

//Math.floor(): làm tròn dưới, ngược lại với ceil
console.log('Số sau khi làm tròn', Math.floor(4.9999999));
console.log('Số sau khi làm tròn', Math.floor(4.00000000));

//Math.random(): tạo ra số ngẫu nhiên
console.log(Math.floor(Math.random() * 1000)); //lấy số ngẫu nhiên 0 -> 1000

//Math.min(): lấy số nhỏ nhất
console.log(Math.min(-100, 200, 50));

//Math.max(): Lấy số lớn nhất
console.log(Math.max(100, 200, 300));
