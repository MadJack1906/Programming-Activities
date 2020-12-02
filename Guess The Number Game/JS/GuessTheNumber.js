let guessNumber = Math.ceil(Math.random() * 100);
console.log(guessNumber);

function guessCheck(){
    let userInput = parseInt(document.getElementById("userInput").value);
    // this if else checks where the user guessed the number
    console.log(userInput);
    if(userInput === guessNumber){
        alert("Congratulations you guessed the number!" + "\n" + "The page will now reload.");
        location.reload();
    } else if(isNaN(userInput)){
        alert("Opps your input is not a number, try again!");
        subtractAttempt();    
    } else {
        // tells the user whether their answer is too high or too low
        if(userInput < guessNumber){
            // checks if the input is near to the user if not it will tell 
            // your guess is too low
            if ((guessNumber - userInput) <= 5) {
                alert("Too low but almost there!");
            } else {
                alert("Your guess is too low")
            }
        } else if(userInput > guessNumber){
            if ((userInput - guessNumber) <= 5){
                alert("Your guess is higher, but almost there!");
            }else {            
                alert("Too high :(");
            }
        }
        // subtracts the current attempt of the user
        subtractAttempt();
    }
}

function subtractAttempt(){
    let remainingAttempts = parseInt(document.getElementById("remainingAttempts").innerHTML);
    remainingAttempts--;
    document.getElementById("remainingAttempts").innerHTML = remainingAttempts;
    
    if(remainingAttempts === 0){
        alert("Sorry you've used all your attempts, the guess number is: " + guessNumber + 
               "\n" + "The page will now reload");
        location.reload();
    }
}

