// write a program to redirect to google if user enter number greater than 
// 4.

let num = prompt("Enter a number");

num = Number.parseInt(num);

if(num > 4){
    location.href = 'https://google.com'
}

// Q. Prompt user for background color and apply the entered color.

let color = prompt("Enter a background color");

document.body.style.background = color;