const a=[32,45,76,12];
const age=a.filter(findage);

function findage(age){
    return age>50;
}

console.log(age);