// console.log(`Hello World`);
// console.log(`I like Pizza`);

// window.alert(`This is an alert`);
// window.alert(`I like Pizza`);

// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myP").textContent = `I like Pizza`;

//Comments in Javascript
//This is a comment

/*  
    This 
    is 
    a 
    comment 
*/

// let fullName = "Mayur Gajbhiye";
// let age = 24;   
// let isStudent = false;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `Your age is ${age}`;
// document.getElementById("p3").textContent = `Your student status is : ${isStudent}`;


// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// console.log(`You are ${age} years old`);
// console.log(`The price is $${price}`);
// console.log(`Your gpa is ${gpa}`);


// let firstName = "Mayur";
// let favfood = "Pizza";
// let email  = "fake123@gmail.com";

// console.log(typeof firstName);
// console.log(`Your name is ${firstName}`);
// console.log(`You like ${favfood}`);
// console.log(`Your email address is ${email}`);


// let online = false;
// let forSale = true;
// let isStudent = true;

// console.log(`Bro is online: ${online}`);
// console.log(`Is this car for sale: ${forSale}`);
// console.log(`Enrolled: ${isStudent}`);

// let students = 30;
// students++;
// console.log(students);

// let username = window.prompt("Enter a username");
// console.log(username);

// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username);
// }

// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`;
// }

// let age = window.prompt("How old are you");
// age = Number(age);
// age+= 1; 
// console.log(age, typeof age);


// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


// const PI = 3.14159;
// let radius;
// let circumference;

// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("myH3").textContent = circumference + " cm";
// }


// console.log(Math.PI);
// console.log(Math.E);

// let x = 3;
// let y = 2;
// let z = 1;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.trunc(x);
// z = Math.ceil(x);
// z = Math.pow(y,x);
// z = Math.sqrt(64);
// z = Math.log(2);
// z = Math.sin(45);
// z = Math.cos(45);
// z = Math.tan(45);
// z = Math.abs(x);
// z = Math.sign(x);
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);
// console.log(max);


// const myButton = document.getElementById("myButton");
// const myLabel1 = document.getElementById("myLabel1");
// const myLabel2 = document.getElementById("myLabel2");
// const myLabel3 = document.getElementById("myLabel3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function(){
//    randomNum1 = Math.floor(Math.random() * (max) + min);
//    randomNum2 = Math.floor(Math.random() * (max) + min);
//    randomNum3 = Math.floor(Math.random() * (max) + min);
//    myLabel1.textContent = randomNum1;
//    myLabel2.textContent = randomNum2;
//    myLabel3.textContent = randomNum3;
// }

// let age = 12;

// if(age >= 18){
//     console.log("You are old enough to enter this site");
// }
// else{
//     console.log("You must be 18+ to enter this site");
// }


// let time = 14;  

// if (time < 12){
//     console.log("Good morning");
// }
// else{
//     console.log("Good afternoon");
// }

// let isStudent = true;

// if (isStudent){
//     console.log("you are a student");
// }
// else{
//     console.log("You are not a student");
// }

// let age = 18;
// let hasLicense = true;

// if(age >= 16){
//     console.log("You are old enough to drive");

//     if (hasLicense){
//         console.log("You have your license");
//     }
//     else{
//         console.log("You do not have your license yet");
//     }
// }
// else{
//     console.log("You must be 16+ to have a license")
// }


// const myText = document.getElementById("myText");
// const output = document.getElementById("output");
// const submit = document.getElementById("submit");
// let age;

// submit.onclick = function(){
//     age = myText.value;
//     age = Number(age);

//     if (age >= 100) {
//         output.textContent = "You are too old to enter this site";
//     }
//     else if (age == 0) {
//         output.textContent = "You can't enter as a newborn";
//     }
//     else if (age >= 18) {
//         output.textContent = "You are old enough to enter this site";
//     }
//     else if (age < 0) {
//         output.textContent = "Your age cant be negative";
//     }
//     else {
//         output.textContent = "You must be 18+ to enter this site";
//     }
// }


// const myCheckBox = document.getElementById("myCheckBox");
// const VisaBtn = document.getElementById("VisaBtn");
// const MasterCardBtn = document.getElementById("MasterCardBtn");
// const PayPalBtn = document.getElementById("PayPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function(){
//     if (myCheckBox.checked){
//         subResult.textContent = "You are subscribed!";
//     }
//     else{
//         subResult.textContent = "You are NOT subscribed!!";
//     }
//     if (VisaBtn.checked){
//         paymentResult.textContent = "You have selected VISA payment method";
//     }
//     else if (MasterCardBtn.checked){
//         paymentResult.textContent = "You have selected MasterCard payment method";
//     }
//     else if (PayPalBtn.checked){
//         paymentResult.textContent = "You have selected PayPal payment method";
//     }
//     else{
//         paymentResult.textContent = "You must select a payment method";
//     }
// }


// let age = 13;
// let message = age < 18 ? "you are underage" : "You are above 18";
// console.log(message);

// let time = 19;
// let greeting = time < 12 ? "Good morning" : "Good Afternoon";
// console.log(greeting);

// let isStudent = false;
// let message = isStudent ? "You are a student" : "You are not a student";
// console.log(message);

// let purchaseAmount = 100;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);


// let day = "pizza";
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break
//     default:
//         console.log(`${day} is not a day`);
// }

// let testScore = 39;
// let letterGrade;

// switch(true){
//     case testScore >= 90:
//         letterGrade = "A"
//         break;
//     case testScore >= 80:
//         letterGrade = "B"
//         break;
//     case testScore >= 70:
//         letterGrade = "C"
//         break;
//     case testScore >= 60:
//         letterGrade = "D"
//             break;
//     default:
//         letterGrade = "F";
// }
// console.log(letterGrade);

// let userName = "BroCode";

// console.log(userName.charAt(0));
// console.log(userName.indexOf("o"));
// console.log(userName.lastIndexOf("o"));
// console.log(userName.length);
// console.log(userName.trim());
// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());
// console.log(userName.repeat(2));
// console.log(userName.startsWith("B"));
// console.log(userName.endsWith("e"));
// console.log(userName.includes("e"));


// let phoneNumber = "123-456-7890";
// console.log(phoneNumber.replaceAll("-", "/"));
// console.log(phoneNumber.padStart(15, 0));
// console.log(phoneNumber.padEnd(15, 0));


// const fullName = "Broseph Code";  

// let firstName = fullName.slice(0,4);
// let lastName = fullName.slice(4,8);

// let firstChar = fullName.slice(0,1);
// let lastChar = fullName.slice(-1);

// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);

// const email  = "fake@gmail.com";

// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);

// console.log(username);
// console.log(extension);


// let userName = window.prompt("Enter your username:");

// -----  NO METHOD CHAINING  ------

// userName = userName.trim();
// let letter = userName.charAt(0);   
// letter = letter.toUpperCase();

// let extraChars = userName.slice(1);
// extraChars = extraChars.toLowerCase();
// userName = letter + extraChars;


// ----- METHOD CHAINING  ------

// userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
// console.log(userName);

// const temp = 20;

// if (temp <= 0 || temp > 30 ){
//     console.log("The weather is BAD");  
// }
// else{
//     console.log("The weather is GOOD");
// }

// const isSunny = true;

// if (!isSunny){
//     console.log("It is CLOUDY");
// }
// else{
//     console.log("It is SUNNY");
// }


// const PI = 3.14;

// if (PI !== "3.14"){
//     console.log("That is NOT Pi");
// }
// else{
//     console.log("That is Pi");
// }

// let username; 

// do{
//     username = window.prompt("Enter username");
// }while (username === "");

//     console.log(`Hello ${username}`);

// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt("Enter your username");
//     password = window.prompt("Enter your password");

//     if (username === "myUserName" && password === "myPassWord"){
//         loggedIn = true;
//         console.log("You are logged in");
//     }
//     else{
//         console.log("Invalid Credentials");
//     }
// }


// for(let i = 10; i > 0; i-=2){
//     console.log(i); 
// }
// console.log("Happy New Year");

// for(let i = 1; i <=20; i++){
//     if (i == 13){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }


// function happyBirthday(user,age){
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!");  
//     console.log(`Happy Birthday dear ${user}!`);  
//     console.log("Happy Birthday to you!");  
//     console.log(`You are ${age} years old`);  
// }

// happyBirthday("Mayur", 25);
// happyBirthday("Spongebob", 28);

// function add(a, b){
//     return a + b;
// }

// function subtract(a,b){
//     return a - b;
// }

// function multiply(a, b){
//     return a * b;
// }

// function divide(a, b){
//     return a / b;
// }


// console.log(add(2,3));
// console.log(subtract(2,3));
// console.log(multiply(2,3));
// console.log(divide(2,3));


// function oddEven(num){
//     if (num % 2 === 0){
//         return `${num} is Even`;
//     }
//     else{
//         return `${num} is Odd`;
//     }
// }
// console.log(oddEven(24));


// function isValidEmail(email){
//     if (email.includes("@")){
//         return "Valid email";;
//     }
//     else{
//         return "Invalid email";
//     }
// }

// console.log(isValidEmail("bro@fake.com"));
// console.log(isValidEmail("elonmusk.com"));
// console.log(isValidEmail("zuck@meta.com"));

// let x = 3;

// function function1(){
//     console.log(x);
// }
// function function2(){
//     console.log(x);
// }

// function2();


// let fruits = ["apple", "orange", "banana"];

// fruits[3] = "peach";

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// fruits.push("coconut");
// fruits.pop("coconut");
// fruits.unshift("mango"); //add element in the beginning
// fruits.shift(); //remove element from beginning

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("fdaf");

// console.log(index);

// console.log(numOfFruits);

// console.log(fruits);

// for(let i = fruits.length - 1; i >= 0; i-=1){
//     console.log(fruits[i]);
// }


// for (let fruit of fruits){
//     console.log(fruit);
// }

// console.log(fruits.sort().reverse());

// Spread operator: Allows an iterable such as an array or string to
// be unpacked into separate elements

// let numbers = [1,2,3,4,5];
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// let username = "Mayur Gajbhiye";
// let letters = [...username].join("-");
// console.log(letters);

// let fruits = ["apple", "orange", "banana"];
// let newfruits = [...fruits]; //shallow copy
// let vegetables = ["carrots", "celery", "potatoes"];
// let foods = [...fruits, ...vegetables, "eggs", "milk"];
// console.log(fruits);
// console.log(newfruits);
// console.log(foods); 


// function openFridge(...foods){
//     console.log(...foods);
// }

// function toGetFood(...foods){
//     return foods;
// }

// const food1 = "Pizza";
// const food2= "Hamburger";
// const food3 = "Hotdog";
// const food4 = "Sushi";
// const food5 = "Ramen";

// // openFridge(food1, food2, food3, food4, food5);
// const foods = toGetFood(food1, food2, food3, food4, food5);
// console.log(foods);

// function sum(...nums){
//     let result = 0;
//     for(let num of nums){
//         result += num;
//     }
//     return result;
// }

// const total = sum(1,2,3,4,5);
// console.log(total);


// function getAvg(...nums){
//     let result = 0;
//     for(let num of nums){
//         result += num;
//     }
//     return result / nums.length;
// }

// const average = getAvg(75,100,85,90,50);
// console.log(average);


// function combineStrings(...words){
//        return words.join(" ");
// }

// const fullName = combineStrings("Mr.", "Mayur", "Gajbhiye");
// console.log(fullName);


//RANDOM PASSWORD GENERATOR

// function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numbersChars = "0123456789";
//     const symbolsChars = "!@#$%^&*()_";

//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowercase ? lowercaseChars : "";
//     allowedChars += includeUppercase ? uppercaseChars : "";
//     allowedChars += includeNumbers ? numbersChars : "";
//     allowedChars += includeSymbols ? symbolsChars : "";

//     if (passwordLength <= 0){
//         return `password length must be atleast 1`;
//     }
//     if (allowedChars.length === 0){
//         return `Atleast 1 set of characters needs to be selected`;
//     }
//     for (let i = 0; i < passwordLength; i++){
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex];
//     }
//     return password;
// }

// const passwordLength = 10;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatePassword(passwordLength, 
//                                     includeLowercase,
//                                     includeUppercase, 
//                                     includeNumbers, 
//                                     includeSymbols);


// console.log(`Generated password is : ${password}`);


//CALLBACK IN JS

// hello(wait);

// function hello(callback){
//     console.log("Hello!");
//     callback();
// }

// function wait(){
//     console.log("Wait!");
// }

// function leave(){
//     console.log("Leave!");
// }

// function goodbye(){
//     console.log("Goodbye!");
// }

// sum(2,4,displayPage);

// function sum(x,y,callback){
//     let res = x + y;
//     callback(res);
// }

// function display(res){
//     console.log(res);
// }

// function displayPage(result){
//     document.getElementById("myH1").textContent = result;
// }

// let numbers = [1,2,3,4,5];

// numbers.forEach(cube);
// numbers.forEach(display);

// function display(element){
//     console.log(element);
// }   

// function double(element, index, array){
//     array[index] = element * 2; 
// }

// function triple(element, index, array){
//     array[index] = element * 3; 
// }

// function square(element, index, array){
//     array[index] = element ** 2; 
// }

// function cube(element, index, array){
//     array[index] = element ** 3; 
// }

// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.forEach(capitalize);
// fruits.forEach(display);

// function display(element){
//     console.log(element);
// }

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }

// function lowerCase(element, index, array){
//     array[index] = element.toLowerCase();
// }

// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() + element.slice(1);
// }


// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(cubes);

// function square(element){
//     return Math.pow(element, 2);
// }

// function cube(element){
//     return Math.pow(element, 3);
// }

// const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// const studentsUpper = students.map(uppercase);
// const studentsLower = students.map(lowercase);

// console.log(studentsLower);

// function uppercase(element){
//     return element.toUpperCase();
// }       

// function lowercase(element){
//     return element.toLowerCase();
// }       

// const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
// const arr = dates.map(formatDates);

// console.log(arr);

// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[2]}/${parts[1]}/${parts[0]}`;
// }

// let numbers = [1,2,3,4,5,6,7];

// let even = numbers.filter(isEven);   
// console.log(even);

// let odd = numbers.filter(isOdd);   
// console.log(odd);


// function isEven(element){
//     return element % 2 === 0;
// }

// function isOdd(element){
//     return element % 2 !== 0;
// }

// const ages = [16, 17, 18, 18, 19, 20, 60];
// const adults = ages.filter(isAdult);
// const childs = ages.filter(isChildren);

// console.log(adults);
// console.log(childs);

// function isAdult(element){
//     return element >= 18;
// }

// function isChildren(element){
//     return element < 18;
// }

// const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
// const shorts = words.filter(getShortWords);   
// const longs = words.filter(getLongWords);   

// console.log(shorts);
// console.log(longs);

// function getShortWords(element){
//     return element.length <= 6;
// }

// function getLongWords(element){
//     return element.length > 6;
// }

// const prices = [5, 30, 10, 25, 15, 20];
// const total = prices.reduce(sum);

// console.log(total.toFixed(2));

// function sum(accumulator, element){
//     return accumulator + element;
// }

// const grades = [75, 50, 90, 80, 65, 95];
// const max = grades.reduce(getMax);
// const min = grades.reduce(getMin);

// console.log(max);
// console.log(min);

// function getMax (accumulator, element){
//     return Math.max(accumulator,element);
// }

// function getMin (accumulator, element){
//     return Math.min(accumulator,element);
// }


// const hello = function hello(){
//     console.log("Hello!");
// }
// hello();

// setTimeout(hello, 3000);
// setTimeout(function(){
//     console.log("Hello!");
// }, 3000);

// const numbers = [1,2,3,4,5,6];
// const squares = numbers.map(function(element){
//     return Math.pow(element, 2);
// });

// const cubes = numbers.map(function(element){
//     return Math.pow(element, 3);
// });

// const evenNums = numbers.filter(function(element){
//     return element % 2 === 0;
// })

// const oddNums = numbers.filter(function(element){
//     return element % 2 !== 0;
// })

// const total = numbers.reduce(function(accumulator, element){
//     return accumulator + element;
// })

// console.log(total);

// const hello = (name, age) => {console.log(`Hello ${name}`)
//                               console.log(`You are ${age} years old`)};
             
// hello("Bro",23);

// setTimeout( () => console.log(`Hello`), 3000);

// const numbers = [1,2,3,4,5,6];
// const squares = numbers.map((element) => Math.pow(element, 2));
// const cubes = numbers.map((element) => Math.pow(element, 3));
// const evens = numbers.filter((element) => element % 2 === 0);
// const odds = numbers.filter((element) => element % 2 !== 0);
// const total  = numbers.reduce((accumulator, element) => accumulator + element);

// console.log(total);

// const person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     isEmployed: true,    
//     sayHello: function(){console.log("Hi I am Spongebob!")},
//     eat: function(){console.log("I am eating a Kraby Patty")}
// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 42,
//     isEmployed: false,
//     sayHello: () => console.log("Hi I am Patrick!"),
//     eat: () => console.log("I am eating a Pizza")
// }

// person1.sayHello();
// person2.sayHello();

// person1.eat();
// person2.eat();

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);


// const person1 = {
//     name: "Spongebob",
//     favfood: "hamburgers",
//     sayHello: function(){console.log(`Hi! I am ${this.favfood}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favfood}`)}
// }

// const person2 = {
//     name: "Patrick",
//     favfood: "Pizza",
//     sayHello: function(){console.log(`Hi! I am ${this.favfood}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favfood}`)}
// }

// person1.eat();
// person2.eat();


// function Car(make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,   
//     this.color = color
//     this.drive = function(){console.log(`You drive the ${this.model}`)}
// }

// const car1 = new Car("Ford", "Mustang", 2024, "Red");
// const car2 = new Car("Chevrolet", "Camaro", 2025, "Blue");
// const car3 = new Car("Dodge", "Charger", 2026, "Silver");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);

// console.log(car3.make);
// console.log(car3.model);
// console.log(car3.year);
// console.log(car3.color);

// car1.drive();
// car2.drive();
// car3.drive();

// class Product{
//     constructor (name, price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: $${this.price.toFixed(2)}`);
//     }

//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax);
//     }

// }

// const salesTax = 0.05;

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.50);
// const product3 = new Product("Soap", 3.45);


// product3.displayProduct();  
// const total = product3.calculateTotal(salesTax);
// console.log(`Total Price (with tax): $${total.toFixed(2)}`);

// product2.displayProduct(); 
// product3.displayProduct();  

// class MathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius * 2;
//     }

//     static getCircumference(radius){
//         return 2 * this.PI * radius;
//     }
//     static getArea(radius){
//         return this.PI *  (radius ** 2);
//     }
// } 

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

// class User{
//     static userCount  = 0;

//     constructor(username){
//         this.username = username;
//         User.userCount +=1;
//     }
    
//     static getUserCount(){
//         console.log(`There are ${User.userCount} users online`);
//     }

//     sayHello(){
//          console.log(`Hello, I am ${this.username}`)
//     }
// }   

// const user1 = new User("Spongebob");
// const user2 = new User("Patrick");
// const user3 = new User("Sandy");

// console.log(user1.username);
// console.log(user2.username);
// console.log(user3.username);

// user1.sayHello();
// user2.sayHello();           
// user3.sayHello();
// User.getUserCount();

// console.log(User.userCount);


// class Animal{
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal{
//     name = "rabbit";

//     run(){
//         console.log(`This ${this.name} is running`);
//     }
// }
// class Fish extends Animal{
//     name = "fish";

//     swim(){
//         console.log(`This ${this.name} is swimming`);
//     }
// }
// class Hawk extends Animal{
//     name = "hawk";

//     fly(){
//         console.log(`This ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();    

// rabbit.alive = false;
// console.log(rabbit.alive);

// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// fish.swim();
// hawk.fly();

// console.log(fish.alive);
// fish.eat();
// fish.sleep();

// console.log(hawk.alive);
// hawk.eat();
// hawk.sleep();

 
// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     move(speed){
//         console.log(`The ${this.name} moves at a speed of ${speed}kmph`);
//     }
// }

// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }

//     run(){
//         console.log(`This ${this.name} can run`);
//         super.move(this.runSpeed);
//     }
// }

// class Fish extends Animal{
//     constructor(name, age, swimSpeed){
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }

//     swim(){
//         console.log(`This ${this.name} can swim`);
//         super.move(this.swimSpeed);
//     }
// }

// class Hawk extends Animal{
//     constructor(name, age, flySpeed){
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }

//     fly(){
//         console.log(`This ${this.name} can fly`);
//         super.move(this.flySpeed);
//     }
// }

// const rabbit = new Rabbit("Bunny", 1, 23);
// const fish = new Fish("Fish", 2, 12);
// const hawk = new Hawk("Hawk", 3, 50);


// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flySpeed);

// rabbit.run();
// fish.swim();
// hawk.fly();


// class Rectangle{

//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }
//     set width(newWidth){
//         if (newWidth > 0){
//             this._width = newWidth;
//         }
//         else{
//             console.error("Width must be a positive number");
//         }
//     }

//     set height(newHeight){
//         if (newHeight > 0){
//             this._height = newHeight;
//         }
//         else{
//             console.error("Height must be a positive number");
//         }
//     }

//     get width(){
//         return `${this._width.toFixed(1)} cm`;
//     }

//     get height(){
//         return `${this._height.toFixed(1)} cm`;
//     }

//     get area(){
//         return `${(this._width * this._height).toFixed(1)} cm^2`;
//     }
// }

// const rectangle = new Rectangle(3, 4);

// rectangle.width = 2;
// rectangle.height = 6;

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// class Person{
    
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     set firstName(fname){
//         if (typeof fname === "string" && fname.length > 0){
//             this._firstName = fname;
//         }
//         else{
//             console.error("First name must be a non-empty string");
//         } 
//     }

//     set lastName(lname){
//         if (typeof lname === "string" && lname.length > 0){
//             this._lastName = lname;
//         }
//         else{
//             console.error("Last name must be a non-empty string");
//         } 
//     }

//     set age(newAge){
//         if (typeof newAge === "number" && newAge >= 0){
//             this._age = newAge;
//         }
//         else{
//             console.error("Age must be a positive number");
//         } 
//     }
    
//     get firstName(){    
//         return this._firstName;
//     }
//     get lastName(){ 
//         return this._lastName;
//     }
//     get fullName(){
//         return this._firstName + " " + this._lastName;
//     }
//     get age(){
//         return this._age;
//     }
// }

// const person = new Person("Spongebob", "Squarepants", 24);


// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);
// console.log(person.age);

// let a = 1;
// let b = 2;

// [a,b] = [b,a]

// console.log(a);
// console.log(b);


// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);


// const colors = ["red", "green", "blue", "black", "white"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// const person1 = { 
//     firstName: "SpongeBob",
//     lastName: "Squarepants",
//     age: 30,
//     job: "Fry Cook"
// }

// const person2 = { 
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 34,
// }

// const {firstName, lastName, age, job = "Unemployed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);


// const person1 = { 
//     firstName: "SpongeBob",
//     lastName: "Squarepants",
//     age: 30,
//     job: "Fry Cook"
// }

// const person2 = { 
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 34,
// }

// function displayPerson({firstName, lastName, age, job="Unemployed"}){
//     console.log(`Name: ${firstName} ${lastName}`);
//     console.log(`Age: ${age}`);
//     console.log(`Job: ${job}`);
// }

// displayPerson(person1);

// const person = {
//     fullName: "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate", "jellyfishing", "cooking"],
//     address: {
//         street: "124, Conch St.",
//         city: "Bikini Bottom",
//         country: "Int. Waters"
//     }
// }

// console.log(person.address.street);
// console.log(person.hobbies[2]);

// for (const property in person.address){
//     console.log(person.address[property]);
// }

// class Person{

//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }   
// }

// class Address{

//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("Spongebob", 30, "124 Conc St.", 
//                                             "Bikini Bottom", 
//                                             "Int. Waters");

// const person2 = new Person("Patrick", 37, "128 Conc St.", 
//                                           "Bikini Bottom", 
//                                           "Int. Waters");
                                
// const person3 = new Person("Squidward", 45, "126 Conc St.", 
//                                             "Bikini Bottom", 
//                                             "Int. Waters")


// console.log(person3.name);
// console.log(person3.age);
// console.log(person3.address);

// console.log(person1.address.street);
// console.log(person2.address.street);
// console.log(person3.address.street);


// const fruits = [{name: "apple", color: "red", calories: 95}, 
//                 {name: "orange", color: "orange", calories: 45}, 
//                 {name: "banana", color: "yellow", calories: 105}, 
//                 {name: "coconut", color: "white", calories: 159}, 
//                 {name: "pineapple", color: "yellow", calories: 37}];


// fruits.splice(1,2);
// console.log(fruits);
// fruits.forEach((fruit) => console.log(fruit.calories));

// const fruitNames = fruits.map(fruit => (fruit.name));
// const fruitColors = fruits.map(fruit => (fruit.color));
// const fruitCals = fruits.map(fruit => (fruit.calories));

// console.log(fruitNames);
// console.log(fruitColors);
// console.log(fruitCals);

// const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
// const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
// const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

// console.log(yellowFruits);
// console.log(lowCalFruits);
// console.log(highCalFruits);

// const highestCalFruit = fruits.reduce((max, fruit) => 
//                                        fruit.calories > max.calories ? fruit : max);

// const leastCalFruit = fruits.reduce((min, fruit) => 
//                                         fruit.calories < min.calories ? fruit : min);

// console.log(highestCalFruit);           
// console.log(leastCalFruit);           


// let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

// let nums = [2, 4, 5, 1, 3, 9, 10];

// fruits.sort();
// nums.sort((a, b) => b - a);
// nums.sort((a, b) => a - b);

// console.log(nums); 


// const people = [{name: "Spongebob", age: 30, gpa: 3.0}, 
//                 {name: "Patrick", age: 37, gpa: 1.5}, 
//                 {name: "Squidward", age: 51, gpa: 2.5},
//                 {name: "Sandy", age: 27, gpa: 4.0}];


// people.sort((p1, p2) => p1.gpa - p2.gpa);   

// people.sort((p1, p2) => p1.name.localeCompare(p2.name));  

// people.sort((p1, p2) => p1.name.localeCompare(p2.name));   

// console.log(people);


//Fisher-Yates Algorithm

// const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

// shuffle(cards);

// console.log(cards);

// function shuffle(array){
//     for(let i = array.length - 1; i > 0; i--){
//         const random = Math.floor(Math.random() * (i + 1));
//         [array[i], array[random]] = [array[random], array[i]];
//     }
// }


//Date(year, month, day, hour, minute, second, ms)
// const date = new Date();
// const date = new Date(2024, 0, 1, 2, 3, 4, 5);   
// const date = new Date("2024-01-03T12:00:00Z");  
// const date = new Date(1700000000000);

// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const mins = date.getMinutes(); 
// const secs = date.getSeconds(); 
// const dayOfWeek = date.getDay();

// date.setFullYear(2025);
// date.setMonth(0);
// date.setDate(23);
// date.setHours(2);
// date.setMinutes(32);
// date.setSeconds(12);

// console.log(date);

// const date1 = new Date("2023-12-31");
// const date2 = new Date("2024-01-01");

// if (date2 > date1){
//     console.log("Happy New Year!");
// }

// function outer(){
//     let message = "hello";

//     function inner(){
//         console.log(message);
//     }
//     inner();
// }

// outer();


// function createCounter(){
//     let count = 0;

//     function increment(){
//         count +=1;
//         console.log(`Count increased to ${count}`);   
//     }

//     function getCount(){
//         return count;
//     }

//     return {increment, getCount};
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`The current count is ${counter.getCount()}`);

// console.log(counter.count);


// function createGame(){
//     let score = 0;

//     function increaseScore(points){
//         score += points;
//         console.log(`+${points} pts`);
//     }

//     function decreaseScore(points){
//         score -= points;
//         console.log(`-${points} pts`);
//     }

//     function getScore(){
//         return score;
//     }
//     return {increaseScore, decreaseScore, getScore}
// }


// const game = createGame();
// game.increaseScore(5);
// game.increaseScore(6);
// game.decreaseScore(3);
// console.log(`The final score is ${game.getScore()} pts`);



// function sayHello(){
//     window.alert("Hello!");
// }

// setTimeout(function(){window.alert("Hello!");}, 3000);

// const timeoutId = setTimeout(() => window.alert("Hello!"), 3000);

// clearTimeout(timeoutId);


// let timeoutId;  

// function startTimer(){
//     timeoutId = setTimeout(() => window.alert("Hello!"), 3000);
//     console.log("started");
// }

// function clearTimer(){
//     clearTimeout(timeoutId);
//     console.log("cleared");
// }

// import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

// console.log(PI);

// const circumference = getCircumference(10);
// const area = getArea(10);
// const volume = getVolume(10);


// console.log(`${circumference.toFixed(2)} cm`);
// console.log(`${area.toFixed(2)} cm2`);
// console.log(`${volume.toFixed(2)} cm3`);

// function func1(callback){
//     setTimeout(() => {console.log("Task 1");
//                       callback()}, 3000);
// }

// function func2(){
//     console.log("Task 2");
//     console.log("Task 3");
//     console.log("Task 4");
// }

// func1(func2);


// try{
//     console.log(x);  
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     console.log("This always executes");
// }


// console.log("You have reached the end");  


// try{
//     const dividend = Number(window.prompt("Enter a dividend: "));
//     const divisor = Number(window.prompt("Enter a divisor: "));

//     if (divisor == 0){
//         throw new Error("You can't divide by zero");
//     }
//     if (isNaN(dividend) || isNaN(divisor)){
//         throw new Error("Values must be a number");   
//     }

//     const result = dividend / divisor;
//     console.log(result);
// }
// catch(error){
//     console.error(error);
// }

// console.log("The end!");

// document.title = "My website";

// document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

// console.log(document);  

// const username = "";

// const welcomeMsg = document.getElementById("welcome-msg");

// welcomeMsg.textContent += username === "" ? 'Guest' : username;


// const myHeading = document.getElementById("my-headingg");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";
// console.log(myHeading);

// const fruits = document.getElementsByClassName("fruits");

// fruits[2].style.backgroundColor = "yellow";

// for(let fruit of fruits){
//     // console.log(fruit.textContent);
//     fruit.style.backgroundColor = "yellow";
// }

// console.log(fruits);

// fruits.forEach(); error

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// });

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// h4Elements[0].style.backgroundColor = "yellow";
// h4Elements[1].style.backgroundColor = "yellow";

// for (let h4element of h4Elements){
//     h4element.style.backgroundColor = "yellow";
// }

// for (let li of liElements){
//     li.style.backgroundColor = "lightgreen";
// }

// Array.from(h4Elements).forEach((h4element) => {
//     h4element.style.backgroundColor = "yellow";
// });
 
// Array.from(liElements).forEach((li) => {
//     li.style.backgroundColor = "lightgreen";
// });
 
// console.log(h4Elements);


// const element = document.querySelector(".fruits");
// const element = document.querySelector("ol");
// element.style.backgroundColor = "yellow";   

// const fruits = document.querySelectorAll(".fruits");
// const foods = document.querySelectorAll("li");

// foods[5].style.backgroundColor = "yellow";

// foods.forEach((food) => {
//     food.style.backgroundColor = "yellow";
// });

// console.log(foods);

// const element = document.getElementById("desserts");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");

// ulElements[0].style.backgroundColor = "green";
// ulElements.forEach((ulElement) => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// }); 

// const element = document.getElementById("desserts");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow"; 

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow";
// });


// const element = document.getElementById("vegetables");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";


// const element = document.getElementById("onions");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "yellow";


// const element = document.getElementById("cake");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";


// const element = document.getElementById("fruits");
// const children = element.children;

// children[1].style.backgroundColor = "yellow";

// Array.from(children).forEach(child => {
//     child.style.backgroundColor = "yellow";
// });


// const newH1 = document.createElement("h1");

// newH1.textContent = "I like Pizza";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center"

// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll(".box");

// document.body.insertBefore(newH1, boxes[1]);

// document.getElementById("box1").removeChild(newH1);


// const newListItem = document.createElement("li");

// newListItem.textContent = "coconut";
// newListItem.id = "coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "lightgreen";


// document.body.append(newListItem);
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);


// const orange = document.getElementById("orange");
// const banana = document.getElementById("banana");
// const apple = document.getElementById("apple");

// document.getElementById("fruits").insertBefore(newListItem, apple);

// const listItems = document.querySelectorAll("#fruits li");

// document.getElementById("fruits").insertBefore(newListItem, listItems[3]);

// document.getElementById("fruits").removeChild(newListItem);


// const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton");

// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 🫤";
// }


// myBox.addEventListener("click", function(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 🫤";
// });

// myBox.addEventListener("click", event => {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 🫤";
// });

// myBox.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "Don't do it! 🤨";
// });

// myBox.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Click me 😃";
// });

// myButton.addEventListener("click", event => {
//     myBox.style.backgroundColor = "tomato";
//     myBox.textContent = "OUCH! 🫤";
// });

// myButton.addEventListener("mouseover", event => {
//     myBox.style.backgroundColor = "yellow";
//     myBox.textContent = "Don't do it! 🤨";
// });

// myButton.addEventListener("mouseout", event => {
//     myBox.style.backgroundColor = "lightgreen";
//     myBox.textContent = "Click me 😃";
// });


// const myBox = document.getElementById("myBox");
// const moveAmount = 10;
// let x = 0;
// let y = 0;

// document.addEventListener("keydown", event => {
//     if(event.key.startsWith("Arrow")){

//         event.preventDefault();

//         switch(event.key){
//             case "ArrowUp":
//                 y -= moveAmount;
//                 break;
//             case "ArrowDown":
//                 y += moveAmount;
//                 break;
//             case "ArrowLeft":
//                 x -= moveAmount;
//                 break;
//             case "ArrowRight":
//                 x += moveAmount;
//                 break;
//         }
//         myBox.style.top = `${y}px`;
//         myBox.style.left = `${x}px`;
//     }
// });

// document.addEventListener("keydown", event => {
//     myBox.textContent = "😨";
//     myBox.style.backgroundColor = "tomato";
// });

// document.addEventListener("keyup", event => {
//     myBox.textContent = "😃";
//     myBox.style.backgroundColor = "lightblue";
// });


// document.addEventListener("keydown", event => {
//     console.log(`Key down  = ${event.key}`);
// });

// document.addEventListener("keyup", event => {
//     console.log(`Key up  = ${event.key}`);
// });



// const myButton = document.getElementById("myButton");
// const myImg = document.getElementById("myImg");

// myButton.addEventListener("click", event => {

//     if(myImg.style.visibility === "hidden"){
//         myImg.style.visibility = "visible";
//         myButton.textContent = "Hide";
//     }
//     else{
//         myImg.style.visibility = "hidden"; 
//         myButton.textContent = "Show";
//     }
    
// }); 


// let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent += "😁"
// });

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "green";
//     })
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "orange";
//     })
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "hsla(221, 92%, 47%, 0.514)";
//     })
// });

// const newButton = document.createElement("button");
// newButton.textContent = "Button 5";
// newButton.classList = "myButtons";
// document.body.appendChild(newButton);

// buttons = document.querySelectorAll(".myButtons");

// console.log(buttons);

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.remove();
//         buttons = document.querySelectorAll(".myButtons");
//         console.log(buttons);
//     })
// });


// const myButton = document.getElementById("myButton");
// const myH1 = document.getElementById("myH1");

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover", event => {
//     event.target.classList.add("hover");
// });

// myButton.addEventListener("mouseout", event => {
//     event.target.classList.remove("hover");
// });

// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// });

// myButton.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// });

// myH1.classList.add("enabled");
// myButton.classList.add("enabled");

// myButton.addEventListener("click", event => {

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬";
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }
//     }
// );

// myH1.addEventListener("click", event => {

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬";
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }
//     }
// );

// let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach(button => {
//     button.classList.add("enabled");
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event =>{
//         event.target.classList.toggle("hover");
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event =>{
//         event.target.classList.toggle("hover");
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener("click", event =>{

//         if(event.target.classList.contains("disabled")){
//             event.target.textContent += "🤬";
//         }
//         else{
//             event.target.classList.replace("enabled", "disabled");
//         }
//     });
// }); 


// function task1(callback){

//     setTimeout(() => {
//         console.log("Task 1 complete");
//         callback();
//     }, 2000);
    
// }

// function task2(callback){
//     setTimeout(() => {
//         console.log("Task 2 complete");
//         callback();
//     }, 1000);        
// }

// function task3(callback){
//     setTimeout(() => {
//         console.log("Task 3 complete");
//         callback();
//     }, 3000);        
// }

// function task4(callback){
//     setTimeout(() => {
//         console.log("Task 4 complete");
//         callback();
//     }, 1500);        
// }

// //CALLBACK HELL

// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => console.log("All tasks completed"));
//         });
//     });
// });


// function walkDog(){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const dogWalked = true;
            
//             if (dogWalked){
//                 resolve("You walked the dog🐕");
//             }
//             else{
//                 reject("You DIDN'T walked the dog");
//             }
//         }, 1500);
//     });
// }

// function cleanKitchen(){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const kitchenCleaned = true;

//             if (kitchenCleaned){
//                 resolve("You cleaned the kitchen🧹");
//             }
//             else{
//                 reject("You DIDN'T clean kitchen");
//             }    
//         }, 2500);
//     });
// }

// function takeOutTrash(){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const trashTakenOut = false;

//             if (trashTakenOut){
//                 resolve("You took out the trash♻️");
//             }
//             else{
//                 reject("You DIDN'T take out the trash");
//             }

            
//         }, 500);
//     });
// }


// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("You finished all chores!")})
//          .catch(error => console.error(error));


// function walkDog(){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const dogWalked = false;
            
//             if (dogWalked){
//                 resolve("You walked the dog🐕");
//             }
//             else{
//                 reject("You DIDN'T walked the dog");
//             }
//         }, 1500);
//     });
// }

// function cleanKitchen(){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const kitchenCleaned = true;

//             if (kitchenCleaned){
//                 resolve("You cleaned the kitchen🧹");
//             }
//             else{
//                 reject("You DIDN'T clean kitchen");
//             }    
//         }, 2500);
//     });
// }

// function takeOutTrash(){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const trashTakenOut = true;

//             if (trashTakenOut){
//                 resolve("You took out the trash♻️");
//             }
//             else{
//                 reject("You DIDN'T take out the trash");
//             }

            
//         }, 500);
//     });
// }

// async function doChores() {

//     try{    
//         const walkDogResult = await walkDog();
//         console.log(walkDogResult);  
        
//         const cleanKitchenResult = await cleanKitchen();
//         console.log(cleanKitchenResult);

//         const takeOutTrashResult = await takeOutTrash();
//         console.log(takeOutTrashResult);

//         console.log("You finished all the chores!");
//     }
//     catch(error){
//         console.error(error);     
//     }
// }

// doChores();


// const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// const person = {
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true,
//     "hobbies": ["JellyFishing", "Karate", "cooking"]
// };
// const people = [{
//     "name": "Spongebob",
//      "age": 30,
//      "isEmployed": true
//  }, 
//  {
//      "name": "Patrick",
//      "age": 34,
//      "isEmployed": false
//  },
//  {
//     "name": "Squiward",
//      "age": 50,
//      "isEmployed": true 
//  },
//  {
//      "name": "Sandy",
//      "age": 27,
//      "isEmployed": false
//  }];



// const jsonString = JSON.stringify(names);
// const jsonString = JSON.stringify(person);
// const jsonString = JSON.stringify(people);

// console.log(jsonString);


// const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
// const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["JellyFishing", "Karate", "cooking"]}`;
// const jsonPeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true}, 
//                    {"name": "Patrick", "age": 34, "isEmployed": false},
//                    {"name": "Squiward", "age": 50, "isEmployed": true},
//                    {"name": "Sandy", "age": 27, "isEmployed": false}]`;

// const parsedData = JSON.parse(jsonNames);
// const parsedData = JSON.parse(jsonPerson);
// const parsedData = JSON.parse(jsonPeople);

// console.log(parsedData);

// fetch("people.json").then(response => response.json())
//                     .then(values => values.forEach(value => console.log(value)))
//                     .catch(error => console.error(error));



// fetch("https://pokeapi.co/api/v2/pokemon/pikach")
//      .then(response => {

//         if(!response.ok){
//             throw new Error("Could not fetch resource");    
//         }
//         return response.json();
//      })
//      .then(data => console.log(data))
//      .catch(error => console.error(error));     



// async function fetchData() {
    
//     try{    
//         const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

//         if(!response.ok){
//             throw new Error("Could not fetch resource");
//         }

//         const data = await response.json();
//         const pokemonSprite = data.sprites.front_default;
//         const imgElement = document.getElementById("pokemonSprite");

//         imgElement.src = pokemonSprite;
//         imgElement.style.display = "block";

//     }
//     catch(error){
//         console.error(error);
//     }

// }




