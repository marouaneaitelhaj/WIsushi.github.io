var logo = document.querySelector(".logo");
var menu = document.querySelector("ul");
var numberofachattime = 0;
var zlayga = document.getElementById("list-done-buy");
logo.addEventListener("click", function(){
    menu.classList.toggle("active");
})

var quantity = document.querySelectorAll(".inpt-quantiti");
/*var btnbuybuy = document.querySelector(".done-pricz");
var carddetail = document.querySelector(".card-details");*/

document.querySelector(".done-pricz").addEventListener("click", function(){
    var total = 0;
    // var minitotal = 0;
    document.querySelector(".done-pricz").classList.toggle('active');
    zlayga.innerHTML = "";
    
    for (var  i = 0; i < document.querySelectorAll(".inpt-quantiti").length; i++){
        minitotal  = document.querySelectorAll(".inpt-quantiti")[i].value;
        var price = document.querySelectorAll(".first-price-display")[i].textContent.match(/(\d+)/);
        total +=  parseInt(price) * minitotal;

        if (minitotal > 0){
            zlayga.innerHTML+=`<div class="p-list-div"><p class="p-list">${document.querySelectorAll(".inpt-quantiti")[i].parentElement.parentElement.children[1].children[0].textContent}   x${minitotal}</p><i class="fa fa-trash dltbtn" aria-hidden="true"></i></div>`;
        }
        
    }
    var dltbtn = document.getElementsByClassName("dltbtn");
    for (var i = 0; i < dltbtn.length; i++){
        var first = dltbtn[i];
        first.addEventListener("click", function(event) {
            event.target.parentElement.remove();
        })
    }    
    console.log(minitotal);
    
    document.querySelector(".card-details").classList.toggle("btnshadow");
    document.querySelector(".card-details").children[2].children[2].textContent = total + "$";
    document.querySelector("body > div.card-details.btnshadow > div:nth-child(5) > p:nth-child(2)").textContent = 3 + total + "$";
    console.log(document.querySelector("body > div.card-details.btnshadow > div:nth-child(5) > p:nth-child(2)").textContent);
    
    total = 0;
    
}
)



document.querySelector("body > i").addEventListener("click" , function(){
    document.querySelector(".archive").classList.toggle("btnshadow");
})