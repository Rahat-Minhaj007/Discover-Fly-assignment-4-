// Using Function For Reduce Duplications

function plusButton(id) {
    const TicketAmount = document.getElementById(id).value;
    const TicketAmountInt = parseInt(TicketAmount);
    const increasingTicketAmount = TicketAmountInt + 1;
    document.getElementById(id).value = increasingTicketAmount;
    return document.getElementById(id).value;
}
function plusTax(id){
    const tax = document.getElementById(id).innerText;
    var taxCost = parseInt(tax);
    taxCost = (10 / 100) * subtotalPriceFinal;
    document.getElementById(id).innerText = taxCost;
    return document.getElementById(id).innerText;

}

function totalPrice(id){
    const total = document.getElementById(id).innerText;
    var totalCost = parseInt(total);
    totalCost = subtotalPriceFinal + taxCost;
    document.getElementById(id).innerText = totalCost;
    return document.getElementById(id).innerText;
}


// **********************************FirstClass ticket Amount Plus(+)***************************************

const firstBtnPlus = document.getElementById("firstClassPlus")
firstBtnPlus.addEventListener('click', function () {

    // increasing ticket amount first class
    plusButton("firstClassTicketAmount");
    // assign first class ticket price in subtotal
    const subtotal = document.getElementById("subtotal").innerText;
    var subtotalPrice = parseInt(subtotal);
    subtotalPriceFinal = subtotalPrice + 150;
    document.getElementById("subtotal").innerText = subtotalPriceFinal;
    // calculating the tax of per ticket
     taxCost=parseInt(plusTax("tax"));
    // calculating total price of ticket
        totalPrice("total");

})

// **********************************FirstClass ticket Amount Minus(-)***************************************

const firstBtnMinus = document.getElementById("firstClassMinus")
firstBtnMinus.addEventListener('click', function () {
    // decreasing ticket amount from first class
    const firstClassTicketAmount = document.getElementById("firstClassTicketAmount").value;
    const firstClassTicketAmountInt = parseInt(firstClassTicketAmount);
    if (firstClassTicketAmountInt > 0) {
        const decreasingTicketAmount = firstClassTicketAmountInt - 1;
        document.getElementById("firstClassTicketAmount").value = decreasingTicketAmount;
        // decreasing subtotal from first class
        const subtotal = document.getElementById("subtotal").innerText;
        var subtotalPrice = parseInt(subtotal);
        subtotalPrice = subtotalPrice - 150;
        document.getElementById("subtotal").innerText = subtotalPrice;
        // calculating the tax of per ticket after decreasing ticket amount
        const tax = document.getElementById("tax").innerText;
        var taxCost = parseInt(tax);
        taxCost = taxCost - 15;
        document.getElementById("tax").innerText = taxCost;
        // calculating total price of ticket after decreasing ticket amount
        const total = document.getElementById("total").innerText;
        var totalCost = parseInt(total);
        totalCost = subtotalPrice + taxCost;
        document.getElementById("total").innerText = totalCost;

    }

})

// **********************************Economy ticket Amount Plus(+)***************************************

const economyBtnPlus = document.getElementById("economyPlus")
economyBtnPlus.addEventListener('click', function () {
    // increasing ticket amount first class

    plusButton("economyTicketAmount");

    // assign economy ticket price in subtotal
    const subtotal = document.getElementById("subtotal").innerText;
    var subtotalPrice = parseInt(subtotal);
    subtotalPriceFinal =subtotalPrice+100;
    document.getElementById("subtotal").innerText = subtotalPriceFinal;
    // calculating the tax of per ticket
    taxCost=parseInt(plusTax("tax"));
    // calculating total price of ticket
    totalPrice("total");

})

// **********************************Economy ticket Amount Minus(-)***************************************

const ecoBtnMinus = document.getElementById("economyMinus")
ecoBtnMinus.addEventListener('click', function () {
    // decreasing ticket amount from economy class
    const economyTicketAmount = document.getElementById("economyTicketAmount").value;
    const economyTicketAmountInt = parseInt(economyTicketAmount);
    if (economyTicketAmountInt > 0) {
        document.getElementById("economyTicketAmount").value = economyTicketAmountInt - 1;
        // decreasing subtotal from economy
        const subtotal = document.getElementById("subtotal").innerText;
        var subtotalPrice = parseInt(subtotal);
        subtotalPrice = subtotalPrice - 100;
        document.getElementById("subtotal").innerText = subtotalPrice;
        // calculating the tax of per ticket after decreasing ticket amount
        const tax = document.getElementById("tax").innerText;
        var taxCost = parseInt(tax);
        taxCost = taxCost - 10;
        document.getElementById("tax").innerText = taxCost;
        // calculating total price of ticket after decreasing ticket amount
        const total = document.getElementById("total").innerText;
        var totalCost = parseInt(total);
        totalCost = subtotalPrice + taxCost;
        document.getElementById("total").innerText = totalCost;
    }
})

// Bonus part Book Now 

const bookNowTicket = document.getElementById("bookNow")
bookNowTicket.addEventListener('click', function () {

    const mainPartVanish = document.getElementById("mainFrom");
    mainPartVanish.style.display = "none";

    const mainTextPartVanish = document.getElementById("mainText");
    mainTextPartVanish.style.display = "none";


    const newComer = document.getElementById("newAdded");
    newComer.style.display = "block";

    const finalTotal = document.getElementById('total').innerText;
    var finalTotalInt = parseInt(finalTotal);
    var finalTotalCost = finalTotalInt;
    if(finalTotalCost>0){
        alert("CONGRATULATIONS SIR, YOUR BOOKING HAS BEEN DONE.HAVE A NICE JOURNEY.YOUR TOTAL BILL IS = $ " + finalTotalCost);
    }
    else{
        alert("SORRY SIR AT FIRST YOU HAVE TO BOOK YOUR TICKET")
    }
})








