function appendValue(value){
    document.getElementById('result').value += value;
}function clearResult(){
    document.getElementById('result').value ="";
}
function evaluateResult(){
    let result=document.getElementById('result').value
    let finalResult=eval(result);
    document.getElementById('result').value=finalResult;
}