result = ucwords("this is a test.");
console.log(result);

result = ucfirst("this is a test.");
console.log(result);

result = ucSentence("this is a test. hello world! hi there!");
console.log(result);

result = strReplace(" ", "-", " this is a test. hello world! ");
console.log(result);

var employees = [
	{name: "Imtiaz", age: 69},
	{name: "Maruf", age: 153},
	{name: "Rony", age: 25},
	{name: "Araf", age: 83},
	{name: "Jayanta", age: 405},
	{name: "Khirul", age: 54},
	{name: "Abdulha", age: 39}
];

console.log(compare(employees, 'age', 'desc'));

var details = [
	{brand: "coderill", model: "101", price: 10.50},
	{brand: "coderill", model: "102", price: 12.65},
	{brand: "themerill", model: "103", price: 15.30},
	{brand: "apprill", model: "104", price: 9.45},
	{brand: "themerill", model: "105", price: 23.75},
];

var singleObj = {brand: "apprill", model: "104", price: 9.45};
console.log(findObjectIndex(details, singleObj));

// string pad
console.log(strPad("111", 5, "*", "b"));

var my_arr = ["a", "b", "c", "c", "b", "b", "c", "c", "a", "a", "a", "c", "c", 1, 2, 3, 5, 4, 1, 1, 1];
console.log(dupCounter(my_arr, 1));

var year = 2020;
console.log(leapYear(year));

var str = "Hello World";
console.log(strReverse(str));
console.log(strReverse(10));

// email validation
var email = "bjayanta.neo@gmail.com";
console.log(isEmail(email));

// get browser
var browser = getBrowser();
console.log(browser);
