var back = document.getElementsByName("back")[0];
var front = document.getElementsByName("front")[0];
var cardNumberOnCard = document.getElementsByClassName("cardNumber")[0];
var nameOnCard = document.getElementsByClassName("name")[0];
var dateOnCard = document.getElementsByClassName("date")[0];
var cvcOnCard = document.getElementsByClassName("cvv")[0];
var cardNumberForm = document.getElementsByName("cardNumber")[0];
var fullNameForm = document.getElementsByName("name")[0];
var expDateForm = document.getElementsByName("expiry")[0];
var cvcForm = document.getElementsByName("cvv")[0];
var icon = document.getElementsByTagName("img")[0];

/*function for changing type of cards depends on first two digits*/
function whichTypeOfCard(inputValue) {
    switch (inputValue.value.slice(0, 2)) {
        case '42':
            front.className = 'visaStyle animated flipInY';
            back.className = 'visaStyle animated flipInY';
            icon.src = './img/visa.png';
            break;
        case '52':

            front.className = 'masterCardStyle animated flipInY';
            back.className = 'masterCardStyle animated flipInY';
            icon.src = './img/mcard.png';
            break;
        case '34':

            front.className = 'americarExpressStyle animated flipInY';
            back.className = 'americarExpressStyle animated flipInY';
            icon.src = './img/americanExpress.png';
            break;
        default:

            front.className = 'notActive';
            back.className = 'notActive';
            icon.src = './img/noStyle.png';

    }
}
/*Showing in real time what is written in input fields*/
function showOnCard(whatToShow, whereToShow) {
    whereToShow.innerHTML = whatToShow.value;

}
/*keeps all funktion in one foe rendering values*/
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
/*allows to input only digits and only certain length*/
function onlyDigitsAllowed(whatToCheck, lengthAllowed, specialSymbol, specialSymbol1, specialSymbol2, specialSymbol3) {
    whatToCheck.onkeydown = function (e) {
        if ((e.which >= 48 && e.which <= 57) && (whatToCheck.value.length < lengthAllowed) || e.which == specialSymbol || e.which == specialSymbol1 || e.which == specialSymbol2 || e.which == specialSymbol3 && (whatToCheck.value.length < lengthAllowed) // цифры
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
/*allows to input only digits and only certain length*/
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
/*changes back side to front side and makes input in upeercase*/
fullNameForm.onfocus = function () {
        front.id = 'display';
        back.id = 'noDisplay';
        setInterval(function () {
            fullNameForm.value = fullNameForm.value.toUpperCase();
        }, 1);

    }
    /*changes front side to back side of the card*/
cvcForm.onfocus = function () {
        front.id = 'noDisplay';
        back.id = 'display';
    }
    /*changes back side to front side of the card*/
cvcForm.onblur = function () {
        front.id = 'display';
        back.id = 'noDisplay';


    }
    /*reg exp matching*/
function regExp(whatToCheck, regExp) {
    whatToCheck.onblur = function () {
        if (regExp.test(whatToCheck.value) == false) {
            whatToCheck.style.borderColor = 'red';
        } else {
            whatToCheck.style.borderColor = '#dcdcdc';
        }
    }
}

onlyDigitsAllowed(cardNumberForm, 19, 32, 32, 32, 32);
onlyDigitsAllowed(cvcForm, 3);
onlyDigitsAllowed(expDateForm, 5, 191, 111, 220);
sertainLengthAllowed(fullNameForm, 22);
render(cardNumberForm, cardNumberOnCard);
render(fullNameForm, nameOnCard);
render(expDateForm, dateOnCard);
render(cvcForm, cvcOnCard);
regExp(expDateForm, /[0-9]{2}\/[0-9]{2}/);
regExp(fullNameForm, /^([A-Z]+){1,21}\s([A-Z]+){1,21}$/);
regExp(cardNumberForm, /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/);
