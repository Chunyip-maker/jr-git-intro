// 变量， let， const

//ES6   之前定义的变量方式
var str = "Hello World!";
console.log(str);


//var 会出现诡异的作用域问题

// {
//     var userName = "David"
// }

// 这里有400行代码。。

// var userName = "大卫";

// console.log(userName);

// function testScope() {
//     var userName = "大卫";
// }

// console.log(userName);

// ES6 全新的 let 关键字
// {
//     let userName = "David";
// }

// console.log(userName);


//变量定义： 小驼峰法则
let userName = "David";
// let userName = "大卫";

class User {

}

// ES6 const 常量
const PI = Math.PI; //3.1315926...
// PI = Math.PI;  // 不可以重复赋值

const BASE_PRICE = 1.5;


const user = {
    name: "demo",
    age: 18
}

user.name = "david";
console.log(user);

const arr = [];
arr[0] = "str1";
arr[1] = "str2";

// arr = []; // 这是不允许的