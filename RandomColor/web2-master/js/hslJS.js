/*
randomly selects hue from 0-360
randomly selects saturation percent
randomly selects lightness percent
changes applicable text to reflect new color
changes text color to white if the background color has a lightness of less than 50%
*/
function generateColor(){
    let hue = Math.floor(Math.random() * 361); //range from 0 - 360 for hue
    let saturation = Math.floor(Math.random() * 101); //range from 0 - 100 for saturation
    let lightness = Math.floor(Math.random() * 101); //range from 0 - 100 for lightness
    let color = "hsl(" + hue.toString() + "," + saturation.toString() + "%," + lightness.toString() + "%)" //converting values into hsl format color
    let body = document.querySelector('body');//setting color of background
    body.style.backgroundColor = color; 
    let span = document.querySelector('span'); //changing text 
    span.textContent = color;
    let p = document.querySelector('p'); //selecting the main text 
    if(lightness < 40){ //if lightness is less than 40, text is white, otherwise black
        p.style.color = 'white';
    }
    else{
        p.style.color = 'black';
    }
}


let button = document.querySelector('button');
button.addEventListener('click', generateColor);