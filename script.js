console.log('Hello from script.js!');
console.log('Name : Aditya');
console.log('Age : 25');
console.log('Likes pizza : true');
let firstName = 'Aditya';
let lastName = 'Zulfikar';
let age = 25;
console.log("Hello, I'm " + firstName + " " + lastName + ". And I'm " + age + " years old.");
let isStudent = false;
let heightInCm = 170;
let favoriteColor = 'Red';
let hobbies = ['coding', 'gaming', 'strolling'];
let address = {
    street: '20 Builder St.',
    city: 'Jakarta',
    zip: '54321'
};
console.log('Is Student: ', isStudent);
console.log('Height: ', heightInCm);
console.log('Favorite Color: ', favoriteColor);
console.log('Hobbies: ', hobbies);
console.log('Address: ', address);
function checkAdult(age) {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}
console.log('You are an ', checkAdult(25));
console.log('You are an ', checkAdult(16));
console.log('You are an ', checkAdult(21));
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
for (let i = 0; i < hobbies.length; i++) {
    console.log('Hobby: ' + (i + 1) + ': ' + hobbies[i]);
}
let count = 5;
while (count > 0) {
    console.log('Countdown:', count);
    count--;
}
let num = 25;
do {
    console.log('Number:', num);
    num *= 2;
} while (num < 1000);
for (let hobby of hobbies) {
    console.log('I enjoy', hobby);
}
let numbers = [9, 25, 38, 58, 77, 82, 98];
for (let number of numbers) {
    if (number % 2 == 0) {
        console.log('Number ' + number + ' is even.');
    } else {
        console.log('Number ' + number + ' is odd.');
    }
}
let scores = [18, 45, 36, 68, 26, 34, 74, 53];
let highestNum = scores[0];
for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highestNum) {
        highestNum = scores[i];
    }
}
console.log(highestNum);
let sumScores = 0;
for (let i = 0; i < scores.length; i++){
    sumScores += scores[i];
}
console.log(sumScores);
let totalEven = 0;
let totalOdd = 0;
for (let i = 0; i < scores.length; i++){
    if (scores[i] % 2 == 0){
        totalEven += 1;
    } else {
        totalOdd += 1;
    }
}
console.log(totalEven);
console.log(totalOdd);
let letters = ['a', 'b', 'c', 'd', 'e'];
let reverseLetters = [];
for (let i = (letters.length-1); i >= 0; i--){
    reverseLetters.push(letters[i]);
}
console.log(reverseLetters);
let words = ['apple', 'banana', 'kiwi', 'strawberry', 'grape'];
let longestWord = words[0];
for (let i = 0; i < words.length; i++){
    if (words[i].length > longestWord.length){
        longestWord = words[i];
    }
}
console.log(longestWord);
let longWords = [];
for (let i = 0;i < words.length; i++){
    if (words[i].length > 5){
        longWords.push(words[i]);
    }
}
console.log(longWords);
function searchName(wordList, searchTerm){
    for (i = 0; i < wordList.length; i++){
        if (wordList[i] === searchTerm){
            return 'Found.';
        }
    }
    return 'Not found.';
}
console.log(searchName(words, 'kiwi'));
console.log(searchName(words, 'peach'));
function customIncludes(array, target){
    for (let i = 0; i < array.length; i++){
        if (array[i] === target){
            return true;
        }
    }
    return false;
}
console.log(customIncludes(words, 'peach'));
console.log(customIncludes(words, 'kiwi'));
let heading = document.getElementById('mainHeading');
let button = document.getElementById('changeTextBtn');
button.addEventListener('click', function(){
    heading.textContent = 'You clicked the button.';
});
let inputName = document.getElementById('inputName');
button.addEventListener('click', function(){
    let name = inputName.value;
    if (name.trim() !== ''){
        heading.textContent = 'Hello, '+name+'!';
    } else {
        heading.textContent = 'Please enter your name first!';
    }
})
let colorButton = document.getElementById('changeColorBtn');
colorButton.addEventListener('click', function(){
    let randomColor = getRandomColor();
    heading.style.color = randomColor;
})
function getRandomColor(){
    let hexaColor = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += hexaColor[Math.floor(Math.random()*16)];
    }
    return color;
}