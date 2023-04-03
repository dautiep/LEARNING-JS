/**
 * Câu lệnh rẽ nhánh - Switch Case
 */

var date = 9;
switch (date) {
    case 2:
        console.log(`Hôm nay là thứ ${date}`);
        break;
    case 3: // === để so sánh
        console.log(`Hôm nay là thứ ${date}`);
        break;
    case 4:
        console.log(`Hôm nay là thứ ${date}`);
        break;
    case 5:
        console.log(`Hôm nay là thứ ${date}`);
        break;
    default:
        console.log('Không biết');
}

//Tính từ case đúng nếu không break; từng case thì nó sẽ lọt vào các case phía sau. Trừ khi có lệnh break;


//Ứng dụng của switch case
var dateNow = 2;
switch (dateNow) {
    case 2:
    case 3: // === để so sánh
    case 4:
        console.log(`Hôm nay là thứ 2, 3, 4`);
        break;
    case 5:
        console.log(`Hôm nay là thứ ${dateNow}`);
        break;
    default:
        console.log('Không biết');
}

//Khi cần so sánh tính đúng sai thì dùng if/else
//Khi biết trước giá trị của biến thì dùng switch case
//nếu < 3 case dùng if else, =>3 thì dùng switch case

