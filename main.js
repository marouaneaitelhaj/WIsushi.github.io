var logo = document.querySelector(".logo");
var menu = document.querySelector("ul");
var numberofachattime = 0;
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


        document.querySelector("body > div.card-details.btnshadow > div:nth-child(7) > div:nth-child(2) > button").addEventListener("click", function(){

            numberofachattime++;
        console.log(numberofachattime);
        document.querySelector("body > i > sup").textContent = numberofachattime;




        document.querySelector(".big-archive").cloneNode(true);
        document.querySelector("body > div.archive").appendChild(document.querySelector(".big-archive").cloneNode(true));
        
        document.querySelector("body > div.archive > div > div:nth-child(1)").textContent = secend.parentElement.parentElement.children[1].children[0].textContent;
        document.querySelector("body > div.archive > div > div:nth-child(2)").textContent = "-" + total + "$";
        
        carddetail.classList.toggle("btnshadow");
        })
        
    }
    )
}
document.querySelector("body > i").addEventListener("click" , function(){
    document.querySelector(".archive").classList.toggle("btnshadow");
})