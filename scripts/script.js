var cardNumber=document.getElementById('cardNumber');
var result=document.getElementById('result');

function showCount() {
    result.innerHTML = start();
}

function start() {
    return cardNumber.value;
}
cardNumber.onkeyup = cardNumber.oninput = function () {
    showCount();
    if (cardNumber.value.slice(0, 2) == 56) {
        alert("hello");
    }
}
cardNumber.onpropertychange = function () {
    if (event.propertyName == "value") showCount();

}
cardNumber.oncut = function () {
    setTimeout(showCount, 0); 
};