var logo = document.querySelector(".logo");
var menu = document.querySelector("ul");
logo.addEventListener("click", function(){
    menu.classList.toggle("active");
})

var quantity = document.querySelectorAll(".inpt-quantiti");
/*var btnbuybuy = document.querySelector(".done-pricz");
var carddetail = document.querySelector(".card-details");*/
var listBuyButton = document.querySelectorAll(".done-pricz");
for (var i = 0; i < listBuyButton.length; i++){
    var first = listBuyButton[i];
    first.addEventListener("click", function(event){
        var secend = event.target;
        var third = secend.parentElement.parentElement.parentElement.parentElement.parentElement.children[1];
        third.classList.toggle("btnshadow");
        var five = secend.parentElement.parentElement.children[2].children[1];
        var quantityNumber = five.value;
        var six = secend.parentElement.parentElement.children[2].children[0];
        var priceNumber = six.textContent.match(/(\d+)/);
        var total = parseInt(priceNumber) * quantityNumber;
        document.querySelector("#food-frice").textContent = total + "$";
        document.querySelector("body > div.card-details.btnshadow > div:nth-child(5) > p:nth-child(2)").textContent = (total + 3) + "$";
    }
    
    
    )
}








