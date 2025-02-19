function randomColor(){
    let random = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    return random;
}


function changeColor(){
    document.body.style.backgroundColor = randomColor();
}


 // Changes background to a random color

