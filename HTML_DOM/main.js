//HTML DOM (Document Object Model) hiểu nôm ma là mô hình tài liệu được thể hiện dưới 
//dạng đối tượng
/**
 * Bao gồm 3 thành phần:
 * - Element (thẻ tag)
 * - Attribute (thuộc tính của thẻ)
 * - Text (Nội dung text)
 * 
 * Chú ý: Node có thể đại diện cho Element, Attribute hoặc Text
 */

/**
 * Sự khác nhau của HTML DOM và Javascript
 * - HTML DOM là quy chuẩn của W3school
 * - Javascript cung cấp các hàm để truy cập vào các node của HTML DOM
 */

/**
 * Hiểu rõ hơn về Document:
 * - Document đại diện cho website (node to nhất)
 * - Muốn truy xuất vào các node nhỏ hơn thì phải đi qua Document
 */

document.write('HELLO GUYS!'); //Hiển thị text HELLO GUYS ở sau phần tử cuối cùng trong thẻ <body>

/**
 * Các phương thức get element trong HTML DOM
 * - Get qua ID, class, tag, css selector, html collection
 */

//Get qua ID
var headNode = document.getElementById('heading'); //vì chỉ có một name Id trên 1 trang web nên hàm mới để là getElementById. Kết quả trả về là một object
console.log({
    element: headNode
});

//Get qua class
var headerNodes = document.getElementsByClassName('head');
console.log(headerNodes); //Kết quả trả về là HTML Collection (mảng)

//Get qua tag
var headerNodeByTag = document.getElementsByTagName('h2');
console.log(headerNodeByTag); //Kết quả trả về là HTML Collection (mảng)

//Get qua CSS selector
var headerNodeByCssSelector = document.querySelector('.box .heading-2:first-child');
console.log({element: headerNodeByCssSelector}); //Kết quả trả về là một object

var headerNodesByCssSelector = document.querySelectorAll('.box .heading-2');
console.log(headerNodesByCssSelector);

//Get qua HTML Collection
console.log(document.forms);

//Nâng cao
var boxNode = document.querySelector('.box-1');

//Công việc 1: sử dụng tới thằng boxNode
console.log(boxNode);

//Công việc 2: Sử dụng tới các li element của box-1
var listItemNodes = boxNode.querySelectorAll('li');
console.log(listItemNodes)

var pNode = boxNode.querySelector('p');
console.log(pNode);

/**
 * Attribute: là thuộc tính trong một thẻ mở của tag
 */

var elementNode = document.querySelector('#header');
elementNode.title = 'heading'; // thêm một attribute hợp lệ của dối tượng
elementNode.setAttribute('class', 'heading-1'); //thêm một attribute bất kỳ
elementNode.setAttribute('data', 'test data');
console.log(elementNode);
console.log(elementNode.getAttribute('title')); //get value của attribute
console.log(elementNode.getAttribute('data'));

/**
 * Text: là nội dung text của một element
 * - geter: lấy value
 * - seter: thiết lập value
 * - Sự khác nhau giữa innerText và textContent
 * + innerText: lấy giá trị nhìn thấy được trong DOM
 * + textContent: lấy ra giá trị thực của element đó 
 */

//Get text của một element
console.log(elementNode.innerText);
console.log(elementNode.textContent); //geter 

//Chỉnh sửa text
elementNode.innerText = 'New heading'; //seter 
console.log(elementNode.innerText);
console.log(elementNode.textContent);

var headingNode = document.querySelector('#header-1');
console.log(headingNode.innerText); //lấy ra toàn bộ text trong element (giống với mình nhìn thấy trên web)
console.log(headingNode.textContent); //lấy ra toàn bộ text node trong element (chỉ loại bỏ thẻ đóng và mở)

//innerHTML và outerHTML
/**
 * innerHTML: tạo ra element con bên trong element
 * outterHTML: ghi đè HTML của chính element đó
 */
elementNode.innerHTML = '<i class = "text-class">test text</i>';
console.log(elementNode.querySelector('i').innerText);
console.log(elementNode.innerHTML);

console.log(elementNode.outerHTML);
elementNode.outerHTML = '<span>Test</span>'; //trong DOM đã không còn nôi dung eleement node trước đó


/**
 * Node property
 * - Element node:
 * + attributes: trả về một mảng các attribute trong element
 * 
 * Chú ý: contenteditable="" thêm vào HTML sẽ biến một element bình thường thành input
 */

