var _ = require('lodash');  //This library used to deal with data

var arr=["rahul","sunny",1,2,2,2,1, 'name', 'age', '2'];

var filter = _.uniq(arr);
console.log(filter);

console.log(_.isString(2));