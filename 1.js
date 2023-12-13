let input='';
function equal(){
    
    input=eval(input);
    document.getElementById("outvar").value=input;
}
function log(){
    document.getElementById("outvar").value=input;
}
function backsp(){
    let a='';
    for (let index = 0; index < input.length-1; index++) {
        a+= input[index];
    }
    input=a;
    log();
}