var all = 0;
var num = 0;
function Calc() {
    quality = document.getElementById("quality");
    quantity = document.getElementById("quantity");
    sum = document.getElementById("sum");
    resultH2 = document.getElementById("result");
    history = document.getElementById("history1");
    if (quantity.value != 0) {
        all = eval(all + quality.value * quantity.value);
        sum.innerText = quality.value * quantity.value;
        resultH2.innerText = all
        num += 1;
        document.getElementById("history").innerHTML += "<h2>" + "عملية رقم "+num+":"+"    " + quality.value +" جنيه "+ " * " + quantity.value+" اوراق "  +" = " + sum.innerText + " جنيه "+"   " + "</h2>";
    }
}