var back = document.getElementById("back");
var front = document.getElementById("front");
var cardNumberOnCard = document.getElementsByClassName("cardNumber")[0];
var nameOnCard = document.getElementsByClassName("name")[0];
var dateOnCard = document.getElementsByClassName("date")[0];
var cvcOnCard = document.getElementsByClassName("cvv")[0];
var cardNumberForm = document.getElementsByName("cardNumber")[0];
var fullNameForm = document.getElementsByName("name")[0];
var expDateForm = document.getElementsByName("expiry")[0];
var cvcForm = document.getElementsByName("cvv")[0];

function whichTypeOfCard(inputValue) {
    switch (inputValue.value.slice(0, 2)) {
    case '56':

        front.className = 'visaStyle';
        break;
    case '42':

        front.className = 'masterCardStyle';
        break;
    case '34':

        front.className = 'americarExpressStyle';
        break;
    default:

        front.className = 'notActive';
    }
}

function showOnCard(whatToShow, whereToShow) {
    whereToShow.innerHTML = whatToShow.value;

}

function render(whereActionIs, whereToDisplay) {

    whereActionIs.onkeyup = whereActionIs.oninput = function () {

        if (whereActionIs.id == 'cardNumber') {

            whichTypeOfCard(whereActionIs);
        }
        showOnCard(whereActionIs, whereToDisplay);
    };
    whereActionIs.onpropertychange = function () {
        if (event.propertyName == "value") {
            showOnCard(whereActionIs, whereToDisplay);

        }

    }
    whereActionIs.oncut = function () {
        setTimeout(showOnCard(whereActionIs, whereToDisplay), 0);
    };
}

function onlyDigitsAllowed(whatToCheck, lengthAllowed) {
    whatToCheck.onkeydown = function (e) {
        if ((e.which >= 48 && e.which <= 57) && (whatToCheck.value.length < lengthAllowed) // цифры
            || (e.which >= 96 && e.which <= 105) // num lock
            || e.which == 8 // backspace
            || (e.which >= 37 && e.which <= 40) // стрелки
            || (e.which == 46)) // delete 
        {
            return true;
        } else {
            return false;
        }
    }
}

function sertainLengthAllowed(whereToCheck, lengthAllowed) {
    whereToCheck.onkeydown = function (e) {

        if ((whereToCheck.value.length < lengthAllowed) || e.which == 8 // backspace
            || (e.which >= 37 && e.which <= 40) // стрелки
            || (e.which == 46)) // delete  // delete 
        {
            return true;
        } else {
            return false;
        }
    }
}
fullNameForm.onfocus = function () {
    setInterval(function () {
        fullNameForm.value = fullNameForm.value.toUpperCase();
    }, 1)

}
onlyDigitsAllowed(cardNumberForm, 16);
onlyDigitsAllowed(cvcForm, 3);
onlyDigitsAllowed(expDateForm, 4);
sertainLengthAllowed(fullNameForm, 22);
render(cardNumberForm, cardNumberOnCard);
render(fullNameForm, nameOnCard);
render(expDateForm, dateOnCard);
render(cvcForm, cvcOnCard);