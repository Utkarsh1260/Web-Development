const jsonString = '{"name": "John", "age":30,"city":"New york"}';
const jsonObject = JSON.parse(jsonString); //Converting jsonstring to object
console.log(jsonObject.name); 