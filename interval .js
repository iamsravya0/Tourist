// function Hello(){
//     console.log('Hello World')
// }
// let intervalId=setInterval(Hello(),3000);
// console.log(intervalId);

// setInterval(function Hello(){
//     console.log('Hello World')
// },5000)

// function Hello(){
//     console.log('hi everyone');
// };
//setTimeout(Hello,3000);

//let intervalId=setInterval(Hello,2000);

//clearInterval(intervalId,5000);
//clearTimeout(intervalId);
// let count=0;
// function increementCounter(){
//     count++;
//     console.log('counting is ,'+count)

// }
//increementCounter();
//let intervalId=setInterval(increementCounter,2000);
// setTimeout(function(){
//     clearInterval(intervalId);
//     console.log('stop the counting after 6 seconds')
// },6000)
//clearTimeout(intervalId);

// function func1(){
//     console.log('i am function 1');
    
// }
// func1();
//  let intervalId=setTimeout((func1))
//  function func2(){
//      console.log('i am function 2')
// }
// func2()

// 1.pending
// 2.fullfilment/resolve
// 3.reject

// var a=new Promise(function(resolve,reject){
//     // producing code
//     var response=true;
//     if(response=true){
//         resolve('it is True value');
//     }
//     else{
//         reject('it is false');
//     }
// })
// console.log(a);
// // consuming  code
// a.then(function(value){console.log(value)})
// .catch(function(value){console.log(value)})


//async ,await
// async function Hello(){
//     return await 'Hello .. World';
// }
// console.log(Hello());
//  promise chaning

// Hello().then(x=>console.log(x+1))
// Hello().then(y=>console.log(y+3))
// Hello().then(z=>console.log(z+5));

function calculate(a,b){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(a+b)
        },2000)
    })
}

const Add=async function(){
    var response=await calculate(3,7)
    var res1=await calculate(response,29)
    var res2=await calculate(res1,50)
    return await calculate(res2,90)
}
Add().then(resolve=>{console.log(resolve)})
