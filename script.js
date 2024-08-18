var inputField=document.getElementById("input");

function insertNum(num){
    inputField.textContent+=num;
}

const equalTo = () => (inputField.textContent) ? inputField.textContent = eval(inputField.textContent) : false;


function clearField(){
    inputField.textContent='';
}