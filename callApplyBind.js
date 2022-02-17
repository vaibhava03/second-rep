var obj= { num: 2};
var addToThis=function(a,b,c)
{
    return this.num+a+b+c;
};
console.log(addToThis.call(obj, 3,2,1));
var arr=[1,2,3];
console.log(addToThis.apply(obj,arr));
var bound=addToThis.bind(obj);
console.log(bound(1,2,3))
var Student={ age:20};
var printAge=function()
{
    console.log('age of student is '+this.age);
}
var boundObj=printAge.bind(Student);
boundObj();

// let multiply=function(x,y)
// {
//     console.log(x*y);
// }
let multiply =function(x)
{
    return function(y)

{
    console.log(x*y);
}}
let multpilyByTwo=multiply(2);
multpilyByTwo(5);
let multpilyByThree=multiply(3);
multpilyByThree(5);
