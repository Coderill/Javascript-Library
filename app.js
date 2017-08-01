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
