var logo = document.querySelector(".logo");
var menu = document.querySelector("ul");
var numberofachattime = 0;
logo.addEventListener("click", function(){
    menu.classList.toggle("active");
})

var quantity = document.querySelectorAll(".inpt-quantiti");
/*var btnbuybuy = document.querySelector(".done-pricz");
var carddetail = document.querySelector(".card-details");*/

var total = 0;
var minitotal = 0;
document.querySelector(".done-pricz").addEventListener("click", function(){
    for (var  i = 0; i < document.querySelectorAll(".inpt-quantiti").length; i++){
        minitotal  = document.querySelectorAll(".inpt-quantiti")[i].value;
        var price = document.querySelectorAll(".first-price-display")[i].textContent.match(/(\d+)/);
        total =  total + parseInt(price) * minitotal;
        
    }
    console.log(minitotal);
    
    document.querySelector(".card-details").classList.toggle("btnshadow");
    document.querySelector(".card-details").children[2].children[1].textContent = total + "$";
}
)



document.querySelector("body > i").addEventListener("click" , function(){
    document.querySelector(".archive").classList.toggle("btnshadow");
})









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