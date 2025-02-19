let count = 0;

function buttonCount(event){
    if (event === 'add'){
        count++;
    } else if (event === 'subtract' && count > 0){
        count--;
    }

    document.getElementById('counter-text').textContent = count;
}   