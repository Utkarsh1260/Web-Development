function callback(){
    console.log("Hey I am a callback function");
}

const add=function(a,b,callback){
    var result=a+b;
    console.log(result);
    callback();
}

add(3, 5, callback);