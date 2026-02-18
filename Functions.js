var weeks=["Sunday","Monday","Tuesday",
    "Wednesday","Thursday","Friday","Saturday"];

var currentday=3;

function nextday(){
currentday++;
document.getElementById("mobileday").textContent=weeks[currentday];
}