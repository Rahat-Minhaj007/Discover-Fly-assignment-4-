// **********************************FirstClass ticket Amount Plus(+)***************************************

const firstBtn=document.getElementById("firstClassPlus")
firstBtn.addEventListener('click',function(){
    
    const firstClassTicketAmount = document.getElementById("firstClassTicketAmount").value;
    const firstClassTicketAmountInt = parseInt(firstClassTicketAmount);
    const increasingTicketAmount =  firstClassTicketAmountInt + 1;
    document.getElementById("firstClassTicketAmount").value = increasingTicketAmount;

    const fPerTicketPrice = 150;
    const fClassTotalPrice = increasingTicketAmount * fPerTicketPrice;
    console.log(fClassTotalPrice);


    const subtotal = document.getElementById("subtotal").innerText;
    var subtotalPrice = parseInt(subtotal);
    subtotalPrice=subtotalPrice+150;
    console.log(subtotalPrice);
    document.getElementById("subtotal").innerText=subtotalPrice;

})







