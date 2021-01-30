// **********************************FirstClass ticket Amount Plus(+)***************************************

const firstBtnPlus = document.getElementById("firstClassPlus")
firstBtnPlus.addEventListener('click', function () {

    // increasing ticket amount first class
    const firstClassTicketAmount = document.getElementById("firstClassTicketAmount").value;
    const firstClassTicketAmountInt = parseInt(firstClassTicketAmount);
    const increasingTicketAmount = firstClassTicketAmountInt + 1;
    document.getElementById("firstClassTicketAmount").value = increasingTicketAmount;
    // assign first class ticket price in subtotal
    const subtotal = document.getElementById("subtotal").innerText;
    var subtotalPrice = parseInt(subtotal);
    subtotalPriceFinal = subtotalPrice + 150;
    document.getElementById("subtotal").innerText = subtotalPriceFinal;
    // calculating the tax of per ticket
    const tax = document.getElementById("tax").innerText;
    var taxCost = parseInt(tax);
    taxCost = (10 / 100) * subtotalPriceFinal;
    document.getElementById("tax").innerText = taxCost;
    // calculating total price of ticket
    const total = document.getElementById("total").innerText;
    var totalCost = parseInt(total);
    totalCost = subtotalPriceFinal + taxCost;
    document.getElementById("total").innerText = totalCost;

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
    const economyTicketAmount = document.getElementById("economyTicketAmount").value;
    const economyTicketAmountInt = parseInt(economyTicketAmount);
    const economyTicketAmountIncreasing = economyTicketAmountInt + 1;
    document.getElementById("economyTicketAmount").value = economyTicketAmountIncreasing;
    // assign economy ticket price in subtotal
    const subtotal = document.getElementById("subtotal").innerText;
    var subtotalPrice = parseInt(subtotal);
    subtotalPriceFinal = subtotalPrice + 100;
    document.getElementById("subtotal").innerText = subtotalPriceFinal;
    // calculating the tax of per ticket
    const tax = document.getElementById("tax").innerText;
    var taxCost = parseInt(tax);
    taxCost = (10 / 100) * subtotalPriceFinal;
    document.getElementById("tax").innerText = taxCost;
    // calculating total price of ticket
    const total = document.getElementById("total").innerText;
    var totalCost = parseInt(total);
    totalCost = subtotalPriceFinal + taxCost;
    document.getElementById("total").innerText = totalCost;

})

// **********************************Economy ticket Amount Minus(-)***************************************

const ecoBtnMinus = document.getElementById("economyMinus")
ecoBtnMinus.addEventListener('click', function () {
    // decreasing ticket amount from economy class
    const firstClassTicketAmount = document.getElementById("economyTicketAmount").value;
    const firstClassTicketAmountInt = parseInt(firstClassTicketAmount);
    if (firstClassTicketAmountInt > 0) {
        document.getElementById("economyTicketAmount").value = firstClassTicketAmountInt - 1;
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
    const mainPartVanish = document.getElementById("main");
    mainPartVanish.style.display = "none";

    const newComer = document.getElementById("newAdded");
    newComer.style.display = "block";

})








