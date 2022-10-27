var btnBuyPlus = document.getElementsByClassName("btn-buy-plus");
for (var i = 0; i < btnBuyPlus.length; i++){
    var first = btnBuyPlus[i];
    first.addEventListener("click", function(event) {
        var secend = event.target;
        var third = secend.parentElement.parentElement.parentElement.children[3].children;
        var fourth = third[0].value;
        var newvalue = parseInt(fourth) + 1;
        console.log(newvalue);
        third[0].value = newvalue
    })
}
var btnBuyMinus = document.getElementsByClassName("btn-buy-minus");
for (var i = 0; i < btnBuyMinus.length; i++){
    var first = btnBuyMinus[i];
    first.addEventListener("click", function(event) {
        var secend = event.target;
        var third = secend.parentElement.parentElement.parentElement.children[3].children;
        var fourth = third[0].value;
        if (parseInt(fourth) > 1){
        var newvalue = parseInt(fourth) - 1;
        console.log(newvalue);
        third[0].value = newvalue
    }
        
    })
}
