var fs=require("fs");
var os=require("os");


var user=os.userInfo();
console.log(user);
console.log(user.username);


fs.appendFile('file1.txt','Hello I am a file just created'+user.username+'!\n',()=>{
    console.log("File created successfully");
});



console.log(os);
console.log(fs);