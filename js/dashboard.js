//Get the new deposite ammount
document.getElementById('deposit-btn').addEventListener('click',function (){
    const depositeField = document.getElementById('deposit-field');
    const NewdepositeAmount = depositeField.value ;
    const  convertFloatToNewdepositeAmount = parseFloat(NewdepositeAmount);
    
    //Get the total deposite totaldeposite
   
    const totalDepositeElement = document.getElementById ('total-deposite');

    const totalDeposite = totalDepositeElement.innerText;
   const convertFLoattoTotalDeposite = parseFloat (totalDeposite);
    

    const CurrentDeposite = convertFloatToNewdepositeAmount + convertFLoattoTotalDeposite ;
    
    totalDepositeElement.innerText =  CurrentDeposite;
    depositeField.value = "";


    //Get the current total balance 

    const currentTotalBalanceElement = document.getElementById ('current-total-balance');
    const totalBalance = currentTotalBalanceElement.innerText;
    const convertFloatTototalBalance = parseFloat(totalBalance);
    
    const updatedTotalBalance = convertFloatTototalBalance + convertFloatToNewdepositeAmount ; 
    currentTotalBalanceElement.innerText = updatedTotalBalance;


  
 
 
   
   

  
    
})

  //Set event handler for withdraw button

  document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawFieldElement = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawFieldElement.value;
    const convertfloatToWithdrawAmount = parseFloat(withdrawAmount);
    // console.log(convertfloatToWithdrawAmount);
    withdrawFieldElement.value = "";
    if(isNaN (convertfloatToWithdrawAmount)) {
        alert ("Please provide a valid number");
        return;

    }
   


    //Set the value of total withdraw

   const totalWithdrawAmountElement = document.getElementById('total-withdraw');
   const totalWithdrawAmount = totalWithdrawAmountElement.innerText;
   const convertfloattoTotalpreviousWithdrawAmount = parseFloat (totalWithdrawAmount );
   withdrawFieldElement.value = "";

   //when someone want to withdraw more than his account balance then function will stop and wont go to down after return.


   

   const currentTotalBalanceElement = document.getElementById ('current-total-balance');
   const totalBalance = currentTotalBalanceElement.innerText;
   const convertFloatTototalBalance = parseFloat(totalBalance);
   if(convertfloatToWithdrawAmount > convertFloatTototalBalance ) {
    alert ("You don't have this amount")
    return;
  
   }
   const currentWithdrawTotal = convertfloattoTotalpreviousWithdrawAmount + convertfloatToWithdrawAmount ;
   totalWithdrawAmountElement.innerText = currentWithdrawTotal;
   withdrawFieldElement.value = "";
   
   const currentTotalBalance = convertFloatTototalBalance - convertfloatToWithdrawAmount;
   currentTotalBalanceElement.innerText = currentTotalBalance ;


 

  
   


   
   
   
    })
    