

// function Hello(){
//     //alert('you performed click event')
//     console.log('you performed click event');
// }
// var create=()=>{alert('i am from onchange')} ;
// function hiEveryone{
//     alert('giving message onmouseover')
// }


var i;
function OTPGenerator(){
    var OTP="";
    for(i=0;i<7;i++){
        var a=Math.floor(Math.random()*10);
        
        OTP=a+OTP;
    };
    //console.log(OTP);
    //alert(OTP);
    document.getElementById('one').innerText=`OTP IS:${OTP}`;
   

}
//OTPGenerator();

document.getElementById("first").style.color='aqua';
document.getElementById("second").style.borderRadius='5px';
document.getElementById("second").style.color='blue';
document.getElementById("second").style.backgroundColor='blueviolet';

const a=`Hello everyone @good afternoon"`;
console.log(a);

const b=55;
const c=435;
const d=`${b} and ${c} bothb added and output is ${b+c}`;
console.log(d);

var txt="    today is tuesday    ";

var g=txt.trim();
//g=f.replace('monday');
console.log(txt);
console.log(g);

const arr=[23,34,56,78,89,78,25,14,23,55,88,12.45]
const one=arr.map(function two(number){
    return number*2;

})
console.log(one);


 const  arra=[23,15,25,45,65,78,45,88,];
 const three=arra.map((num)=> {

 })
 console.log(three);

// const  three=(num)=>{
//     c=num*3;
//     console.log(c);
// }

