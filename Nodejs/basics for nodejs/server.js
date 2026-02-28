console.log("Hey I am a server running on your local computer");

// various types of declaring function are

// // 1st type of declaring a function
// function add(a,b){
//     return a+b;
// }


// // 2nd type of declaring a function
// var add= fucntion(a,b){
//     return a+b;
// }


// //3rd way of declaring function that is arrow function
// var add=(a,b)=>{ return a+b;}


//4th way
var  add=(a,b)=>a+b;

var total=add(5,3);
console.log(total);
console.log("Ok");


//5th way
(function(){
    console.log("Hey I am 5th way of declaring an function in javascript");
})();


