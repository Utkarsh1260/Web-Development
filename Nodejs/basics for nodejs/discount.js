const prompt = require('prompt-sync')();

const age=prompt("Enter your age: ");

if(age<18){
    console.log("Only 20% discoutn for you");
}

else if(age>=18 && age<=65){
    console.log("Normal ticket price applies");
}

else{
    console.log("30% senior citizen discount allowed");
}