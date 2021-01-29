// **********************************FirstClass ticket Amount Plus(+)***************************************

const firstBtn=document.getElementById("firstClassPlus")
firstBtn.addEventListener('click',function(){
    
    const firstClassTicketAmount = document.getElementById("firstClassTicketAmount").value;
    const firstClassTicketAmountInt = parseInt(firstClassTicketAmount);
    const increasingTicketAmount =  firstClassTicketAmountInt + 1;
    document.getElementById("firstClassTicketAmount").value = increasingTicketAmount;

    const fPerTicketPrice = 150;
    const fClassTotalPrice = increasingTicketAmount * fPerTicketPrice;
    


    const subtotal = document.getElementById("subtotal").innerText;
    var subtotalPrice = parseInt(subtotal);
    subtotalPrice=subtotalPrice+150;
    document.getElementById("subtotal").innerText=subtotalPrice;

    const tax = document.getElementById("tax").innerText;
    var taxCost = parseInt (tax);
    taxCost=(10/100)*subtotalPrice;
    document.getElementById("tax").innerText=taxCost;

    const total = document.getElementById("total").innerText;
    var totalCost = parseInt (total);
    totalCost= subtotalPrice+taxCost ;
    document.getElementById("total").innerText=totalCost;

})

// **********************************FirstClass ticket Amount Minus(-)***************************************










