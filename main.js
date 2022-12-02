var logo = document.querySelector(".logo");
var menu = document.querySelector("ul");
var numberofachattime = 0;
var listarchive = document.getElementById("list-done-buy");
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
    listarchive.innerHTML = "";
    
    for (var  i = 0; i < document.querySelectorAll(".inpt-quantiti").length; i++){
        minitotal  = document.querySelectorAll(".inpt-quantiti")[i].value;
        var price = document.querySelectorAll(".first-price-display")[i].textContent.match(/(\d+)/);
        total +=  parseInt(price) * minitotal;
        var totalonce = parseInt(price) * minitotal;
        if (minitotal > 0){
            listarchive.innerHTML+=`<div class="p-list-div"><p class="p-list">${document.querySelectorAll(".inpt-quantiti")[i].parentElement.parentElement.children[1].children[0].textContent} </p><span>-${totalonce}</span><i class="fa fa-trash dltbtn" aria-hidden="true"></i></div>`;
        }
        
    }
    var dltbtn = document.getElementsByClassName("dltbtn");
    for (var i = 0; i < dltbtn.length; i++){
        var first = dltbtn[i];
        first.addEventListener("click", function(event) {
             var minusvalue = parseInt(event.target.parentElement.children[1].textContent);
             
            event.target.parentElement.remove();
            
            document.querySelector("body > div.card-details.btnshadow > div:nth-child(5) > p:nth-child(2)").textContent = parseInt(document.querySelector("body > div.card-details.btnshadow > div:nth-child(5) > p:nth-child(2)").textContent) + minusvalue + "$";
            document.querySelector(".card-details").children[2].children[2].textContent = parseInt(document.querySelector("body > div.card-details.btnshadow > div:nth-child(5) > p:nth-child(2)").textContent) - 3 + "$";
            
        })
    }    
    
    document.querySelector(".card-details").classList.toggle("btnshadow");
    document.querySelector(".card-details").children[2].children[2].textContent = total + "$";
    document.querySelector("body > div.card-details.btnshadow > div:nth-child(5) > p:nth-child(2)").textContent = 3 + total + "$";
    
    
    total = 0;
    
}
)


