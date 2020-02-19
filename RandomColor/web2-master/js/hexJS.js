/*
function sets a building block string as #, then randomly selects 6 characters from 0-F in hex
then selects the body and sets the background color and then selects the span and changes the text to the color 
selected
*/
function generateColor(){
    let color = '#';
    hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']; //all possible hex numbers
    let i = 0;
    for(i; i < 6; i++){
        index = Math.floor(Math.random() * hex.length); //selecting a random element from the array 6 times
        color += hex[index];
        console.log(hex[index]);
    }
    console.log(color);
    let body = document.querySelector('body'); //setting color of background
    body.style.backgroundColor = color;
    let span = document.querySelector('span'); //setting text content
    span.textContent = color + ";"; 
}
let button = document.querySelector('button');
button.addEventListener('click', generateColor);
