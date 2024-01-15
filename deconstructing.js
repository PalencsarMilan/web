//1.feladat

let car = ['Ford', 'Mustang', 2022, 'blue'];
let [first, second, third, fourth] = car

console.log("Brand: "+first);
console.log("Model: "+second);
console.log("Year: "+third);
console.log("Color: "+fourth);
//Tömb destrukturálása során bármilyen érvényes változónévet használhatsz, és a változók sorrendje számít.

//2.feladat
let book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publYear: 2008,
    language: 'English'
    };

let {title, author, publYear, language} = book

console.log("Title: "+ title)
console.log("Author: " + author)
console.log("Publication Year: "+ publYear)
console.log("Language: "+ language)
//Az objektum destrukturálásához bármilyen érvényes változónévet használhatsz, és a változók sorrendje nem fontos.

//3.feladat
let student = {
    name: 'John Doe',
    age: 20,
    grade: 'B',
    subjects: ['Math', 'English', 'History']
};

function printStudentInfo({name, age, grade, subjects})
{
    console.log("Name: "+ name);
    console.log("Age: "+ age);
    console.log("Grade: "+ grade);
    console.log("Subjects: " + subjects);
}

printStudentInfo(student)