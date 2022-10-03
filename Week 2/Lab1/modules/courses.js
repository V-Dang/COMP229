//use ./ if in same path. If not then use absolute path
var courses = require("./message.js");

var course1 = new courses("COMP229", "Web Application Development");

console.log(course1.detail());
