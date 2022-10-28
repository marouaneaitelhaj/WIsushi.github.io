var btnBuyPlus = document.getElementsByClassName("btn-buy-plus");
for (var i = 0; i < btnBuyPlus.length; i++){
    var first = btnBuyPlus[i];
    first.addEventListener("click", function(event) {
        var secend = event.target;
        var third = secend.parentElement.parentElement.parentElement.children[2].children[1];
        var fourth = parseInt(third.value);
        third.value = fourth + 1;
    })
}
var btnBuyMinus = document.getElementsByClassName("btn-buy-minus");
for (var i = 0; i < btnBuyMinus.length; i++){
    var first = btnBuyMinus[i];
    first.addEventListener("click", function(event) {
        var secend = event.target;
        var third = secend.parentElement.parentElement.parentElement.children[2].children[1];
        var fourth = parseInt(third.value);
        if (third.value >= 1){
        third.value = fourth - 1;
    }
        
    })
}
var btnbuybuy = document.querySelector(".x-close");
var carddetail = document.querySelector(".card-details");
btnbuybuy.addEventListener("click", function(){
    carddetail.classList.toggle("btnshadow");
})
document.querySelector("body > div.filterby > div:nth-child(1)").addEventListener("click" , function(){
    document.querySelector("body > div.carte-countiner.SALADE").style.display = "block";
    document.querySelector("body > h3:nth-child(4)").style.display = "block";
    document.querySelector("body > div.carte-countiner.OBENTO").style.display = "none";
    document.querySelector("body > h3:nth-child(6)").style.display = "none";
    document.querySelector("body > div.carte-countiner.PLATS").style.display = "none";
    document.querySelector("body > h3:nth-child(8)").style.display = "none";
    document.querySelector("body > div.filterby > div:nth-child(1)").style.color = "#ED3C20";
    document.querySelector("body > div.filterby > div:nth-child(2)").style.color = "black";
    document.querySelector("body > div.filterby > div:nth-child(3)").style.color = "black";
})
document.querySelector("body > div.filterby > div:nth-child(2)").addEventListener("click" , function(){
    document.querySelector("body > div.carte-countiner.SALADE").style.display = "none";
    document.querySelector("body > h3:nth-child(4)").style.display = "none";
    document.querySelector("body > div.carte-countiner.OBENTO").style.display = "block";
    document.querySelector("body > h3:nth-child(6)").style.display = "block";
    document.querySelector("body > div.carte-countiner.PLATS").style.display = "none";
    document.querySelector("body > h3:nth-child(8)").style.display = "none";
    document.querySelector("body > div.filterby > div:nth-child(2)").style.color = "#ED3C20";
    document.querySelector("body > div.filterby > div:nth-child(3)").style.color = "black";
    document.querySelector("body > div.filterby > div:nth-child(1)").style.color = "black";
})
document.querySelector("body > div.filterby > div:nth-child(3)").addEventListener("click" , function(){
    document.querySelector("body > div.carte-countiner.SALADE").style.display = "none";
    document.querySelector("body > h3:nth-child(4)").style.display = "none";
    document.querySelector("body > div.carte-countiner.OBENTO").style.display = "none";
    document.querySelector("body > h3:nth-child(6)").style.display = "none";
    document.querySelector("body > div.carte-countiner.PLATS").style.display = "block";
    document.querySelector("body > h3:nth-child(8)").style.display = "block";
    document.querySelector("body > div.filterby > div:nth-child(3)").style.color = "#ED3C20";
    document.querySelector("body > div.filterby > div:nth-child(2)").style.color = "black";
    document.querySelector("body > div.filterby > div:nth-child(1)").style.color = "black";
})