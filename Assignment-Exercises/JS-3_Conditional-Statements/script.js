function checkAge() {
    //get the input value 
    let age = document.getElementById('ageInput').value; 

    //initialize the category variable
    let category = ''; 

    //validation
    if (age < 0){
        category = 'Invalid input. Please enter a valid age.'; 
    } else { //categorize the age by if-else statement
        if (age >= 0 && age <= 12){      
            category = 'Child';
        } else if (age > 12 && age <=19){
            category = 'Teenager';
        } else if (age > 19){
            category = 'Adult'
        }
    } 

    //Outputs the category
    document.getElementById('result').textContent = category;
}
