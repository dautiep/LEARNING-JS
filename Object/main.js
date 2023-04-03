/**
 * Object trong javascript
 */
var emailKey = 'email';

var myInfo = {
    name: 'Dau Tiep',
    age: 25,
    address: 'Ha Noi, VN',
    [emailKey]: 'dauquoctiep98@gmail.com',
    getName: function() {
        return this.name;
    }
};

myInfo.myEmail = 'dautiep123@gmail.com';

var myKey = 'address';

//xóa key-value
delete myInfo.age;
delete myInfo.address;


//khi key là function --> phương thức (method)
//những trường hợp còn lại --> thuộc tính (property)
console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo['aaa']); //key không tồn tại tra về undefined
console.log(myInfo[myKey]);
console.log(myInfo.getName());

/**
 * Object constructor : Xây dựng đối tượng
 */

console.log('-----------Object constructor-----------');

//dùng function (declaration/exprssion) để định nghĩa object constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar  = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

var author = new User('Tiep', 'Dau', '123.png');
var user = new User('Vu', 'Nguyen', '123.png');

//Các object vẫn được thêm thuộc tính và phương thức độc lập với nhau
author.title = 'Chia sẻ tại F8';
user.comment = 'Liệu có khóa...';

console.log(author.constructor === User);
console.log(author);
console.log(user);
console.log(user.getName());

/**
 * Object prototype - basic : Nguyên mẫu đối tượng
 */
console.log('-----------Object prototype-----------');
//có thể add được sau khi tạo constructor. Tất cả các đối tượng đều có chung prototype

//thuộc tính
User.prototype.className = 'F8'; 
//phương thức
User.prototype.getClassName = function() {
    return this.className;
}

console.log(author.className);
console.log(user.getClassName());
