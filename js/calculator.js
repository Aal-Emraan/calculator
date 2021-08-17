// global variables
const displayText = document.getElementById('buttonDisplay').innerText;



function getNumber(id){
    const number = document.getElementById(id).innerText;
    return number;
}

document.getElementById('button9').addEventListener('click',function(){
    const displayText = document.getElementById('buttonDisplay').innerText;
    document.getElementById('buttonDisplay').innerText = displayText + getNumber('button9');
})
document.getElementById('button8').addEventListener('click',function(){
    const displayText = document.getElementById('buttonDisplay').innerText;
    document.getElementById('buttonDisplay').innerText = displayText + getNumber('button8');
})
document.getElementById('button7').addEventListener('click',function(){
    const displayText = document.getElementById('buttonDisplay').innerText;
    document.getElementById('buttonDisplay').innerText = displayText + getNumber('button7');
})
document.getElementById('button6').addEventListener('click',function(){
    const displayText = document.getElementById('buttonDisplay').innerText;
    document.getElementById('buttonDisplay').innerText = displayText + getNumber('button6');
})
document.getElementById('button5').addEventListener('click',function(){
    const displayText = document.getElementById('buttonDisplay').innerText;
    document.getElementById('buttonDisplay').innerText = displayText + getNumber('button5');
})
document.getElementById('button4').addEventListener('click',function(){
    const displayText = document.getElementById('buttonDisplay').innerText;
    document.getElementById('buttonDisplay').innerText = displayText + getNumber('button4');
})
document.getElementById('button3').addEventListener('click',function(){
    const displayText = document.getElementById('buttonDisplay').innerText;
    document.getElementById('buttonDisplay').innerText = displayText + getNumber('button3');
})
document.getElementById('button2').addEventListener('click',function(){
    const displayText = document.getElementById('buttonDisplay').innerText;
    document.getElementById('buttonDisplay').innerText = displayText + getNumber('button2');
})
document.getElementById('button1').addEventListener('click',function(){
    const displayText = document.getElementById('buttonDisplay').innerText;
    document.getElementById('buttonDisplay').innerText = displayText + getNumber('button1');
})
document.getElementById('button0').addEventListener('click',function(){
    const displayText = document.getElementById('buttonDisplay').innerText;
    document.getElementById('buttonDisplay').innerText = displayText + getNumber('button0');
})
document.getElementById('buttonDot').addEventListener('click',function(){
    const displayText = document.getElementById('buttonDisplay').innerText;
    document.getElementById('buttonDisplay').innerText = displayText + getNumber('buttonDot');
})
document.getElementById('buttonPlus').addEventListener('click',function(){
    const displayText = document.getElementById('buttonDisplay').innerText;
    document.getElementById('firstInput').innerText = displayText;
    document.getElementById('operator').innerText = '+';
    document.getElementById('buttonDisplay').innerText = '';
})
document.getElementById('buttonMinus').addEventListener('click',function(){
    const displayText = document.getElementById('buttonDisplay').innerText;
    document.getElementById('firstInput').innerText = displayText;
    document.getElementById('operator').innerText = '-';
    document.getElementById('buttonDisplay').innerText = '';
})
document.getElementById('buttonMultiply').addEventListener('click',function(){
    const displayText = document.getElementById('buttonDisplay').innerText;
    document.getElementById('firstInput').innerText = displayText;
    document.getElementById('operator').innerText = '*';
    document.getElementById('buttonDisplay').innerText = '';
})
document.getElementById('buttonDevide').addEventListener('click',function(){
    const displayText = document.getElementById('buttonDisplay').innerText;
    document.getElementById('firstInput').innerText = displayText;
    document.getElementById('operator').innerText = '/';
    document.getElementById('buttonDisplay').innerText = '';
})
document.getElementById('buttonPercent').addEventListener('click',function(){
    const displayText = document.getElementById('buttonDisplay').innerText;
    const firstInput = parseFloat(document.getElementById('firstInput').innerText);
    const operator = document.getElementById('operator').innerText;
    if(operator == '+'){
        document.getElementById('buttonDisplay').innerText = firstInput + (firstInput/100) * parseFloat(displayText);
    }
    if(operator == '-'){
        document.getElementById('buttonDisplay').innerText = firstInput - (firstInput/100) * parseFloat(displayText);
    }
    if(operator == '*'){
        document.getElementById('buttonDisplay').innerText = firstInput * (firstInput/100) * parseFloat(displayText);
    }
    if(operator == '/'){
        document.getElementById('buttonDisplay').innerText = firstInput / (firstInput/100) * parseFloat(displayText);
    }
})
document.getElementById('buttonEqual').addEventListener('click',function(){
    const displayText = document.getElementById('buttonDisplay').innerText;
    const firstInput = parseFloat(document.getElementById('firstInput').innerText);
    const operator = document.getElementById('operator').innerText;
    if(operator == '+'){
        document.getElementById('buttonDisplay').innerText = firstInput + parseFloat(displayText);
    }
    if(operator == '-'){
        document.getElementById('buttonDisplay').innerText = firstInput - parseFloat(displayText);
    }
    if(operator == '*'){
        document.getElementById('buttonDisplay').innerText = firstInput * parseFloat(displayText);
    }
    if(operator == '/'){
        document.getElementById('buttonDisplay').innerText = firstInput / parseFloat(displayText);
    }
})
document.getElementById('buttonClear').addEventListener('click',function(){
    document.getElementById('buttonDisplay').innerText = '';
    document.getElementById('firstInput').innerText = '';
})