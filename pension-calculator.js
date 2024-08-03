let myIncrease = [];
let myValue = [];
let myMonthlyValue = [];
let myInputPayValue = [];
let myPayIncreaseArray = [];
let fullPension1 = 0;
let sumOfPensions = 0;


const inputEarn = document.getElementById("input-earn");
const inputJob = document.getElementById("input-job");
const inputPay = document.getElementById("input-pay");
const inputIncrease = document.getElementById("input-increase");

const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");

const taxValue = document.getElementById("tax-value");
const taxAmount = document.getElementById("tax-amount");



inputBtn.addEventListener("click",function textVisibilityOn() {
  var invisibleTextValue = document.getElementById("invisible-text-value");
  var invisibleTextAmount = document.getElementById("invisible-text-amount");
      invisibleTextValue.classList.remove("invisible")
      invisibleTextAmount.classList.remove("invisible")
  
})

inputBtn.addEventListener("click", function() {
  
  

  //turns the values into numbers 
  let value = parseFloat(inputEarn.value);
  let monthlyValue = parseFloat(inputEarn.value);
  let payValue = parseFloat(inputPay.value);
  let increase = parseFloat(inputIncrease.value);
  let jobCount = parseInt(inputJob.value);
  
   let loopValue = jobCount / payValue;
  let intLoopValue = Math.floor(loopValue);
  let decimalPart = loopValue - Math.floor(loopValue);
let decimalString = decimalPart.toString().substring(2, 3);
let myDecimal = parseInt(decimalString); 
  
  
  myValue.push(value);
  let myPensionValue = value * 0.075;
  
  for (let i = 0; i < intLoopValue; i++) {
    
  //pushes the new numbers into the empty arrays
   myInputPayValue.push(payValue);
  myIncrease.push(increase);
  
  
  let myIncreasePercentage = increase / 100;
  let myPayIncrease = myIncreasePercentage *  value; 
  myPayIncreaseArray.push(myPayIncrease);
    let myNewPay = parseFloat(value - myPayIncrease);
  let myNewPensionValue = myNewPay * 0.075;
  
   let myPension = myPensionValue * payValue; 
  
    fullPension1 += myPension;
     value = myNewPay;
    
     taxValue.innerHTML = myPensionValue;
    

  }
  console.log("this is my pension value " + myPensionValue) 
  console.log(value)
  
  
  
  
  for (let i = 0; i < myDecimal; i++) {
    
    myMonthlyValue.push(monthlyValue);
    
     let myMonthlyPensionValue= monthlyValue * 0.075; 
    
    if(myDecimal <= 1){
      myMonthlyPensionValue = myMonthlyPensionValue;
    }else{
      
sumOfPensions += myMonthlyPensionValue;   

    } 
   
  };
  
  let sumOfPensionsValue = sumOfPensions + fullPension1;
  
   taxAmount.innerHTML = sumOfPensionsValue;
     
  //myPension + myNewPension will give the amount of money you have in your pension afterworking for two years
 
  
})
 

deleteBtn.addEventListener("click",function textVisibilityOff() {
  var invisibleTextValue = document.getElementById("invisible-text-value");
  var invisibleTextAmount = document.getElementById("invisible-text-amount");
      invisibleTextValue.classList.add("invisible")
      invisibleTextAmount.classList.add("invisible")
})


deleteBtn.addEventListener("click", function () {
  
  document.getElementById('input-earn').value = '';
  document.getElementById('input-job').value = '';
    document.getElementById('input-pay').value = '';
  
  document.getElementById('input-increase').value = '';
  
  
  document.getElementById('tax-value').innerHTML = '';
  document.getElementById('tax-amount').innerHTML = '';
 
   myValue = [];
  myMonthlyValue = [];
  myInputPayValue= [];
  
  myPayIncreaseArray = [];
  
  fullPension1 = 0;

  
   
})

