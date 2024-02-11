const a=[1,2,3,4,6,7,8,3]

const d=a.map((number)=>{
    return number *3;
})
console.log(d);

const e=a.map(function hi(num){
    return num*3
})
console.log(e);
//filtered
const arr=[10,20,30,40,50,60,80,90,100];

const filtered=arr.filter(number=>number>40);
console.log(filtered)

const giveMe=arr.filter(num=>num<30);
console.log(giveMe)
// accumulator 
const arr1=[,45,56,34,67,78,89,23];

const bad=arr1.reduce((accumulator,currentValue)=>
accumulator+currentValue,0);
console.log(bad)
// spread operator
const arr2=[1,34,89,92,70];
console.log(arr2)
const arr3=[,32,42,67,23];
console.log(arr3)
const arr4=[...arr2,...arr3];
console.log(arr4)

const PARTITON="HELLO EVERYONE"
const separate=[...PARTITON];
console.log(separate);

const arr5=['Codegnan','Civets','Lukawa','London','Cambridge','Dharmashala']
console.log(arr5);
const filteredData=arr5.filter(names=>names.includes('L'))
console.log(arr5)

const arr6=[12,24,48,60,72,45,678]

const f=arr6.map(function hi(num){
    return num **2
})
console.log(f)
const give=arr6.filter(num=>num<65);
console.log(give);

const good=arr6.reduce((accumulator,currentValue)=>
accumulator*currentValue,12);
console.log(good)

var g=new Date();
console.log(g);

let h=document.getElementById("one").addEventListener("click",displayDate);

function displayDate(){
    //var a=newDate();
document.getElementById("two").innerHTML=new Date();
}

let i=document.getElementById('three').addEventListener("change",hello);
function hello(){
    alert("i am from change event listener method")
}
function func1(a,b,cbf,cbf1) {
    console.log("hello ");
    console.log(c=a*b);
    cbf();
    cbf1(12,3);
}
func1(3,4,func2,func3);
//func1(func3)
function func2() {
    console.log("world");

}
function func3(d,e){
    m=d/e;
    console.log(m);
}

// var create=()=>{alert('i am from onchange')} ; 
// function displayDate(){
//     //var a=newDate();
// document.getElementById("two").innerHTML=new Date();
//      alert('i have changed the date')
//  }