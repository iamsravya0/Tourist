//var z;
//console.log(z);
//var b=49;
//console.log(b);
//var b=65;
//console.log(b);
// let,const
//let c=25;
//console.log(c);
//let c=27
//console.log(c); //redeclartion is not possible in the let
//d=3;
//let d=10;
// console.log(d);reassiging is possible in let
//const c=55;
//const c=57;
//console.log(c);redeclartion is not possible in the const;
//const e=57;
//const e=57;reassiging is possible in const;

//hoisting
//z=50;
//console.log(z);
//let y;
//console.log(y)
//let y=55;
//console.log(y);
//const x;
//console.log(x);
//const x=58;
//console.log(x);

// var-functional scope
// let,const-block scope
//global scope
//var a=10; // var is a functional-scope and global scope is also a example
//console.log(a);
//function hello(){
//console.log(a);
//}
//hello();
//console.log(a);
//{
//console.log(a);
//}
//{
//let b=45;
//console.log(b);//let is a block-scope 
//}
//console.log(b);
//{
//const c=60;
//console.log(c);//const is a block-scope
//}
//console.log(c);
//{
//var a=50;
//console.log(a);
//}
//console.log(a);

//primtive-str,boolean,num,symbol,null,undefined,bigint and non primitive-array,object datatypes in javascript
// primitive datatypes
// var a=20;
// console.log(a);
// console.log(typeof(a));

// var d=7204589120155888877778888;
// console.log(d);
// console.log(typeof(d));

// var e=BigInt(7204589120155888877778888);
// console.log(e);
// console.log(typeof(e));

// var f='Hello Everyone';
// console.log(f);
// console.log(typeof(f));

// var g=true;
// console.log(g);
// console.log(typeof(g));

// var h=false;
// console.log(h);
// console.log(typeof(h));

// var i=null;
// console.log(i);
// console.log(typeof(i));

// var j=undefined;
// console.log(j);
// console.log(typeof(undefined));

// var sym=Symbol('hello')
// console.log(sym);
// console.log(typeof(sym));

//var arr=[1,2,3,5,8,7]
//console.log(arr);
//console.log(typeof(arr));
//console.log(arr[1]);
//console.log(arr[5]);


//var ob=[
//[ {name:'hello'},
//{age:24},
//{place:'vijayawada'}]
//[ 
//  {name:'hi'},
//{age:25},
//{place:'goa'}
//]
//]
//console.log(ob);
//console.log(typeof(ob));

//console.log(ob[1][2]);





//arithemetic operators
//assignment
//logical
//comparision-ternary operators
//bitwise
//string

// var a=2;
// var b=5;
// console.log((100+3)+a);
// console.log((100+3)-a);
// console.log((100+3)/a);
// console.log((100+3)%a);
// console.log(a**5);
// console.log(b);//5
// //post increment
// console.log(b++);//6
// console.log(b);//6
// //pre-increment
// console.log(++b);
// console.log(b);
// var c=3;
// //pre-decrement
// console.log(c);
// console.log(--c);
// console.log(c);
// //post-decrement
// console.log(c--);
// console.log(c);

// var d=6;
// var e=7;

// var c=d+e;
// f=c+2
// console.log(c);
// console.log(f);

// f=c-2
// console.log(c);
// console.log(f);

// f=c*2
// console.log(c);
// console.log(f);

// f=c/2
// console.log(c);
// console.log(f);

// f=c%2
// console.log(c);
// console.log(f);

// var i=23;
// var j="Hello Everyone";
// var z="codegnan"
// var l=54;
// var k=i+j;
// var s=j+i;
// var m=l+i+j;
// var n=l+j+i;
// var o=j+z+i+l;
// console.log(o);
// console.log(n);
// console.log(m);
// console.log(s);
// console.log(k);
// console.log(l);

// var a=32;
// var b=52;

// var c=a>b;
// console.log(c);

// var d=a<b;
// console.log(d);

// var e=a<=b;
// console.log(e);

// var f=a>=b;
// console.log(c);

// var m=77;
// var n="77";
// var s=77;
// // var o=m==n;
// // var p= m===n;
// var r=m!=s;
// console.log(r);//false

// var t=m!=s;
// console.log(t);//false

// var q=m!==n;
// console.log(q);//true

// var y=m!==s;
// console.log(y);//false
// console.log(o);
// console.log(p);

// var a=25;
// var b=45;
// var c=a<b;
// console.log((c)?"correct answer":"wrong answer");
//console.log((a<b)?"correct answer":"wrong statement");
// var d=12;
// var e=56;
// var r=22;
//  console.log(d<e&&e<r);//false
//  console.log(d<e&&e>r);//True
//  console.log(d<e||e<r);//true
//  console.log(d!=e);
// var t=d<e&&e<r;
// console.log((t)?"statement is True":"statement is False");
// console.log(d&e);
// console.log(d<e&&e<r);

// //alert('hello world')
// //confirm('hi everyone')
// prompt('codegnan destination')

// document.write("Frontend JS Class");
// document.write("<br/>")
// var a=43;
// var b=23;
// var c=a+b;
// //document.write(c);

// // conditional statements
// //if,else if,else;

// if(a>b){
//     document.write("true one")
// }
// else{
//     alert("show me the wrong")
// }
// var age=Number(prompt("Enter the Number"));

// if(age>18){
//     alert("ready to vote");
// }
// else if(age=18 && age<18){
//     alert("you are not eligible");
// }
// else{
//     alert("enter a proper age & number")
// }


// if(numerical%2==0){
//     alert("divisible by 2");
// }
// else{
//     alert("not divisible by 2");
// }
// var age=Number(prompt("Enter the age"));
// if(age<5){
//     alert("free");
// }
// else if(age>5 && age<=18){
//     alert("please pay 10rs")
// }
// else if(age>18){
//     alert("please pay 20rs")
// }
// else{
//     alert("invalid age")
// }


// var a=Number(prompt('enter number 1:'));
// var b=Number(prompt('enter number 2:'));
// var c=prompt('enter opertors required +,-,*,/,%')

// switch(c){
//     case '+':
//         alert('add the numbers'+(a+b));
//         break;
//     case '-':
//         alert('sub the numbers'+(a-b ));
//         break;
//     case '*':
//         alert('mul the numbers'+(a*b));
//         break;
//     case '/':
//         alert('div the numbers'+(a/b));
//         break;
//     case '%':
//         alert('mod the numbers'+(a%b))
//         break;
//     default:
//         alert('enter proper values')
// }

// while loop
//var i=-20;
// while(i<10){
//     i++;
//     console.log(i)
// }

// do{
//     i++;
//     console.log(i);
// }
// while(i<=10);

// var i;
// for(i=0;i<=33;i++){
//     document.write(i,"<br/>");
// }
// const values={
//     name:"john",
//     age:56,
//     place:'new york',

// };

// // let text="";

// for(let x in values){
// console.log(x);
// console.log(values[x]);

// }

//const d=[1,45,65,67,888,23]
// const d={
//     id:"245",
//     name:"sheldom",
//     age:43
// }
// text="";
// for(let x in d){
// text+=d[x];
// }
// console.log(text[x]);
//     text +=values[x];
// }
// document.write(text);

//functions


// function function_name(arguments){
//     condition
// }
// funcn calling(passing values)

// function hello(){
//     console.log("hello world")
// }
// hello();
// hello();

// function hi(a,b,c){
//     d=(a+b)%c;
//     return d;
// }
// // console.log(Sum(41,55));
// // console.log(Sum(23,213));
// // console.log(Sum(41,55)%2);
// // console.log(Sum(41,55)/2);
// console.log(hi(3,100,5));

// function expression(a,b){
//     value=a*b;
//     return value;

// }
// var res=expression(3,4);
// console.log(res);

// var one=function Three(num1,num2){
//     r=num1*num2;
//     return r;
// }
// var r=one(234,4556);
// console.log(r);
// console.log(one(456,567))


//closures
// function outerFunction(){
//     //console.log(word);
//     //console.log("hello world")
//     var word=234;
//     function innerFunction(){
//         var y=50;
//         console.log(y);
//         console.log(word);
//     }
// return   innerFunction;
// }
// var a=outerFunction();
// a();

//math.functionality(value)
// console.log(Math.sqrt(324));
// console.log(Math.pow(2,3));
// console.log(Math.ceil(5.5));//6
// console.log(Math.ceil(5.3));//6
// console.log(Math.ceil(-5.5));//-5
// console.log(Math.floor(5.5));
// console.log(Math.floor(5.6));
// console.log(Math.floor(-5.4));
// console.log(Math.floor(-5.6));
// console.log(Math.floor(5.5));
// console.log(Math.random());
// console.log(Math.round(12.353678));
// console.log(Math.round(-12.353678));
// console.log(Math.fround(-12.353678));
// console.log(Math.fround(12.353678));
// console.log(Math.abs(15678922422,1258810555));
// console.log(Math.max(45,77,-12,-19,456));
// console.log(Math.min(-12,-132,-43534,434667,-6576876));
// console.log(Math.sign(-12));
// console.log(Math.sign(87));
// console.log(Math.sign(0));
// console.log(Math.log(10));
// console.log(Math.log10(10));
// console.log(Math.sin(90));


//number methods

var first = 14.1025464;
var second = first.toFixed(1);
console.log(Number(second));

//string methods

var third = 'dtyghsdhjf jknnjdsbhujdsbbmsn bjnkjvsbfhjfshnk dkjliiudrshenj mfdejbhjfu KLKJJFNFZJNVFNM n,n,mvcx'
var fourth = third.toLocaleUpperCase();
console.log(fourth);
var fifth = third.toLocaleLowerCase();
console.log(fifth);

var a = [23, 25, 45, 85];
console.log(a[3]);

const good = ['apple', 'cherry', 'kiwi', 'grapes', 'plums'];
console.log(good[2]);
var a = good.push('banana', 'oranges');
console.log(a);
console.log(good);
console.log(good.pop());
console.log(good);

console.log(good.unshift('honey', 'raisins'));
console.log(good);
console.log(good.shift());
console.log(good);

//var based=good.splice(1,4);
//console.log(based);


//var bad=good.splice(2,2);
//console.log(bad)

good.splice(1, 0, "chocolate", "biscuit");
console.log(good);





// function function_name(arguments) {
//     condition
// }
//funcn calling(passing values)

function hello(a,b) {
    console.log("hello world")
}
hello();

var a=()=>{console.log('hi world')}
a();

var more=(a,b)=>{console.log(c=a+b)};
more(334,454);
more(12,345)

document.getElementById("first").innerHTML="i am from javascript bu ti am displaying in browser";

document.getElementsByTagName("P")[0].innerText="i am para tag";

document.getElementsByClassName("hello")[0].innerText="i am class tag";

document.getElementsByClassName("hello")[0].style.color='aqua';
document.getElementsByClassName("hello")[0].style.fontSize="60px";







