
let arr = [];
let arrLength = parseInt(prompt("Write the array's length:"));

for (let i = 0; i < arrLength; i++) {
    let digit = parseInt(prompt("Write digit:" + (i + 1)));
    arr.push(digit);
}

document.write("<p>" + arr + "</p>"); // Створити масив, довжину та елементи якого задає користувач.


document.write("<p>" + arr.sort() + "</p>"); // Відсортувати масив за зростанням.


let newArr = arr.splice(2,4);

document.write("<p>" + newArr + "</p>"); // Видалити елементи з масиву з 2 по 4 (включно!).
