console.log("Hello World!");

/**
File javascript sẽ chạy từ trên xuống dưới, sai ở đâu sẽ dừng ở đó.
2 loại bug;
+ Bug syntax: do code sai cú pháp, không chạy được
+ Bug logic: chạy được => kết quả sai
*/

console.log("Hello you");

// Data types - Kiểu dữ liệu

/**
--------- 1. Primitive types - Kiểu dữ liệu nguyên thủy
- Number: Số nguyên, số thực
- String: Chuỗi ký tự
- Boolean: Kiểu dữ liệu logic, true/false
- Undefined: Biến chưa được khởi tạo
- Null: Biến đã được khởi tạo nhưng không có giá trị
*/

// let tên_biến = giá_trị;
let age = 30; // number
let name = "Nguyen Van A"; //   " " , ' ' ,` ` // string
let isStudent = true; // boolean
let username = undefined; // undefined
let address = null; // null

// console.log variables=> in ra giá trị của biến
console.log(age);

// cập nhật giá trị của biến
age = 31; // cập nhật giá trị của biến age
console.log(age);
