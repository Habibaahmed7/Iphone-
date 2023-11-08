var allproducts = document.querySelectorAll(".product .content")
var div1 = document.querySelector("#div1")
var btn = document.querySelector("#btn")
var value = document.querySelector("#value")
var totalPrice = 0

allproducts.forEach(function(item){
    item.onclick = function(){
        div1.innerHTML += item.textContent + " "
        totalPrice += +(item.getAttribute("price"))

        if(div1.innerHTML != ""){
            btn.style.display = "block";
            btn.style.width  = "150px";
            btn.style.height  = "50px";
            btn.style.backgroundColor  = "blue";
            btn.style.color  = "white";
            btn.style.fontSize ="24px"
        }
    }
})
btn.onclick = function (){
   value.innerHTML =(totalPrice)
}