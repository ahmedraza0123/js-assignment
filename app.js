
 //ques:5
console.log("Hello... I can run JS through my web browser's console")

//chapter:2

//ques:1
var username = ""

//ques:2
var myName = "ahmed"

//ques:3
var message = "Hello World"
alert(message)

//ques:4
var student = "muhammad amir"
alert(student)

var age = "18 years old"
alert(age)

var result = "Certified web Development Course"
alert(result)

//ques:5
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(pizza)

//chapter:3

// ques:1
var myAge = "18 year old"
alert(myAge)
console.log(myAge)

// ques:2
var warning = "You Have visited this site for 14 times!"
alert(warning)
console.log(warning)

// ques:3
var birthday = "26-04-2011"
alert(birthday)
console.log(birthday)

// ques:4
// Store visitor's name
var visitorName = "John Doe";

// Store product title
var productTitle = "T-shirt";

// Store quantity
var quantity = 5;

// Show message in browser
document.write(
    visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store"
);

// chapter:4


// Ques:1
var name = "Basim", age = 15, city = "Karachi";


// Ques:2

// Legal variable names:
var userName = "Basim";
var _name = "Ali";
var $price = 500;
var age1 = 15;
var myVariable = "Hello";

// Illegal variable names (comments mein likhe hain):
// var 1name = "Basim";
// var my-name = "Ali";
// var my name = "Ahmed";
// var var = 10;
// var @price = 500;


// Ques:3

document.write("<h1>Rules for naming JS variables</h1>");

document.write(
    "Variable names can only contain numbers, letters, dollar signs ($), and underscores (_).<br>"
);

document.write(
    "Variables must begin with a letter, dollar sign ($), or underscore (_). For example $name, _name or name.<br>"
);

document.write(
    "Variable names are case sensitive.<br>"
);

document.write(
    "Variable names should not be JS reserved keywords."
);


//chapter :5


// Q1
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

document.write("Sum of " + num1 + " and " + num2 + " is " + sum);


// Q2

var a = 10;
var b = 3;

document.write("Addition: " + (a + b) + "<br>");
document.write("Subtraction: " + (a - b) + "<br>");
document.write("Multiplication: " + (a * b) + "<br>");
document.write("Division: " + (a / b) + "<br>");
document.write("Modulus: " + (a % b) + "<br>");


// Q3


var value;
document.write("Value after variable declaration is: " + value + "<br>");

value = 5;
document.write("Initial value: " + value + "<br>");

value++;
document.write("Value after increment is: " + value + "<br>");

value = value + 7;
document.write("Value after addition is: " + value + "<br>");

value--;
document.write("Value after decrement is: " + value + "<br>");

var remainder = value % 3;
document.write("The remainder is: " + remainder + "<br>");


// Q4

var ticketPrice = 600;
var totalTickets = 5;
var totalCost = ticketPrice * totalTickets;

document.write("Total cost of " + totalTickets + " tickets is " + totalCost + " PKR");


// Q5


var tableNumber = 5;

for (var i = 1; i <= 10; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}


// Q6


var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;

document.write(celsius + "°C is " + fahrenheit + "°F<br>");

var fahrenheitTemp = 77;
var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;

document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C<br>");


// Q7


var item1Price = 650;
var item2Price = 100;
var item1Quantity = 3;
var item2Quantity = 7;
var shippingCharges = 100;

var cartTotal = (item1Price * item1Quantity) +
                (item2Price * item2Quantity) +
                shippingCharges;

document.write("Price of item 1: " + item1Price + "<br>");
document.write("Quantity of item 1: " + item1Quantity + "<br>");
document.write("Price of item 2: " + item2Price + "<br>");
document.write("Quantity of item 2: " + item2Quantity + "<br>");
document.write("Shipping charges: " + shippingCharges + "<br>");
document.write("Total cost: " + cartTotal + " PKR<br>");


// Q8


var totalMarks = 500;
var marksObtained = 450;
var percentage = (marksObtained / totalMarks) * 100;

document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br>");


// Q9


var totalPKR = (10 * 104.80) + (25 * 28);

document.write("Total Currency in PKR: " + totalPKR);


// Q10


var number = 5;
var arithmeticResult = ((number + 5) * 10) / 2;

document.write("Result: " + arithmeticResult);


// Q11


var currentYear = 2026;
var birthYear = 2008;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("They are either " + age2 + " or " + age1 + " years old");


// Q12


var radius = 5;
var pi = 3.142;

var circumference = 2 * pi * radius;
var circleArea = pi * radius * radius;

document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + circleArea + "<br>");


// Q13


var favoriteSnack = "Chips";
var currentAge = 15;
var maximumAge = 80;
var amountPerDay = 2;

var lifetimeSupply = (maximumAge - currentAge) * 365 * amountPerDay;

document.write("Favorite snack: " + favoriteSnack + "<br>");
document.write("You will need " + lifetimeSupply + " " + favoriteSnack +
               " to last you until the ripe old age of " + maximumAge);





















