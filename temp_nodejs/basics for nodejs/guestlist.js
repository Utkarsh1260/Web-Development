const prompt=require('prompt-sync')();

const guestlist=["Ram", "sham","Rohit", "Arjun", "Meena"];

const name=prompt("Enter your name: ");

if(guestlist.includes(name)){
    console.log("welcome to the party");
}

else{
     console.log("You are not allowed to the party");
}