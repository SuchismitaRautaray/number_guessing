const minNum = 10;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("plz enter valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too low!!");
        }
        else if(guess > answer){
            window.alert("Too high!!");
        }
        else{
            window.alert(`correct!! the answer was ${answer}. It took you ${attempts} attempts`);
            running = false; 
        }

    }
    
}
