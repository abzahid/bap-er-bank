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
    const updatedTotalBalance = convertFLoattoTotalDeposite + convertFloatToNewdepositeAmount ;
    currentTotalBalanceElement.innerText = updatedTotalBalance;
    
 
 
   
   

    // totalDepositeElement.innerText = PreviousdepositeAmount;
    // depositeField.value = "";
    // const currentBalanceElement = document.getElementById ('cureent-balance');
    // const currentBalance = currentBalanceElement.innerText 
    // const currentUpdatedBalance = NewdepositeAmount +  PreviousdepositeAmount;
    // currentUpdatedBalance = currentBalance ;

    
})