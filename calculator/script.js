let op1=0;
let op2=0;
let res = "";

let operand = "";
let input = document.querySelector("input");
let equal_btn = document.querySelector("button");
let add_btn = document.querySelector(".add");
let sub_btn = document.querySelector(".subtract");
let mul_btn = document.querySelector(".multiply");
let div_btn = document.querySelector(".divide");
let mod_btn = document.querySelector(".modulo");
let power_btn = document.querySelector(".power");
let clr_btn = document.querySelector(".clear");

let digits = document.querySelectorAll(".digit");

digits.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(input.value === "0")
        {
            input.value = button.innerText;
        }
        else{
            input.value += button.innerText;
        }
        res += button.innerText;
    })
})

clr_btn.addEventListener("click",()=>{
    input.value = "0";
    res="";
})
power_btn.addEventListener("click",()=>{
    res+= "";
    input.value=res;
})
add_btn.addEventListener("click",()=>{
 res+="+";
 input.value=res;
})
sub_btn.addEventListener("click",()=>{
    res+="-";
    input.value=res;
})
div_btn.addEventListener("click",()=>{
    res+="/";
    input.value=res;
})
mul_btn.addEventListener("click",()=>{
    res+="*";
    input.value=res;
})
mod_btn.addEventListener("click",()=>{
    if(op1===0)
        {
            op1 = input.value;
            
        }
        else{
            op1 = Number(op1/100) * Number(input.value);
        }
        input.value = "0";
    operand = "modulus";
})
equal_btn.addEventListener("click",(event)=>{
   event.preventDefault(); 
    op2 = input.value;
    if(operand==="modulus")
    {
        input.value = (op1/100) * op2;
        op1=0;
        op2=0;
        res = input.value;
        operand="";
    }
    else{
        input.value = eval(res);
        res = input.value;
    }
     
})