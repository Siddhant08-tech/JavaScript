// average marks
// let marks = [87,55,43,54,67,69];
// let sum = 0;
// for(let banana of marks){
//     sum=sum+banana;
// }
// let avg = sum/marks.length;
// console.log(avg);

// 10% off
// let items=[250,645,300,900,50];
// let percentage=0;
// let newPrice=0;
// for(let val of items){
//     // console.log(val);
//     percentage=val/10;
//     newPrice=val-percentage;
//     console.log(newPrice);
//     // console.log(percentage);
// }


// function
// function myFunction(){
//     console.log("siddhant !!");
//     console.log("we are learning javaScript");
// }
// myFunction();

// add two number

// function sum(x, y){
//     console.log(x+y);
// }
// function sum(x, y) {
//     console.log(x + y);
// }
// function multiply(a, b) {
//     console.log(a*b);
// }
// function msg(text){
//     console.log(text);
// }

// arrow function
// sum = (a,b) => {
//     console.log(a+b);
// }
// sum(5,4);

// fn that takes  a string as an argument and returns the Number of vowels in the string



function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase(); //to convert string into lowercase
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    console.log(count);
}

countVowels("siddhant shekhar"); 


