// javascript for basic-website
console.log("hello world");

let funAdjectives = ["great", "super", "fantastic"];

for (let i = 0; i < funAdjectives.length; i++) {
    console.log(i);
    console.log(funAdjectives[i]);
}

let objectPractice = {
    name: "Sam",
    age: 31,
    state: "Oregon",
}

for (let key in objectPractice) {
    console.log(key + " " + objectPractice[key]);
}

let greeting = `Hello, ${objectPractice.name}`;
console.log(greeting);

// let name = prompt("What is your name?");

let welcomeMessage = `Welcome to basic-website, ${name}! Let me know if you have any comments or questions.`;

console.log(welcomeMessage)

// alert(welcomeMessage);
