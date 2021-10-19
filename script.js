var slider = document.getElementById("range");
var value = document.getElementById("value");

value.innerHTML = slider.value + "$";
slider.oninput = function(){
    value.innerHTML = this.value + "$";
}