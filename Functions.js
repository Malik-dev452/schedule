var weeks=["Sunday","Monday","Tuesday",
    "Wednesday","Thursday","Friday","Saturday"];

var currentday=3;

function nextday(){
currentday++;
if(currentday>6){
    currentday=0;
}
showday();
}

function beforeday(){
    currentday--;
if (currentday<0){
    currentday=6;
}
showday();
}

function showday(){
    document.getElementById("mobileday").textContent=weeks[currentday];
var showwhichday=document.getElementsByClassName("showday")[0];
var items= showwhichday.children;

while (showwhichday.children.length > 1) {
    showwhichday.removeChild(showwhichday.lastChild);
}

if(currentday==0){
        var object=document.createElement("div");
    object.classList.add("obj");
    object.textContent="School";
    showwhichday.appendChild(object);


    var object3=document.createElement("div");
    object3.classList.add("obj");
    object3.textContent="Mathematics";
    showwhichday.appendChild(object3);
}

else if(currentday==1){
        var object=document.createElement("div");
    object.classList.add("obj");
    object.textContent="School";
    showwhichday.appendChild(object);


    var object3=document.createElement("div");
    object3.classList.add("obj");
    object3.textContent="Mathematics";
    showwhichday.appendChild(object3);

     var object2=document.createElement("div");
    object2.classList.add("obj");
    object2.textContent="Training";
    showwhichday.appendChild(object2);
}


else if(currentday==2){
        var object=document.createElement("div");
    object.classList.add("obj");
    object.textContent="School";
    showwhichday.appendChild(object);


    var object3=document.createElement("div");
    object3.classList.add("obj");
    object3.textContent="Physics";
    showwhichday.appendChild(object3);
}


else if(currentday==3){
        var object=document.createElement("div");
    object.classList.add("obj");
    object.textContent="School";
    showwhichday.appendChild(object);


    var object3=document.createElement("div");
    object3.classList.add("obj");
    object3.textContent="Programming";
    showwhichday.appendChild(object3);
}


else if(currentday==4){
        var object=document.createElement("div");
    object.classList.add("obj");
    object.textContent="School";
    showwhichday.appendChild(object);


    var object3=document.createElement("div");
    object3.classList.add("obj");
    object3.textContent="Mathematics";
    showwhichday.appendChild(object3);

     var object2=document.createElement("div");
    object2.classList.add("obj");
    object2.textContent="Training";
    showwhichday.appendChild(object2);
}
else if(currentday==5){
    var object=document.createElement("div");
    object.classList.add("obj");
    object.textContent="Chemistry";
    showwhichday.appendChild(object);


    var object2=document.createElement("div");
    object2.classList.add("obj");
    object2.textContent="Physics";
    showwhichday.appendChild(object2);
}
else if(currentday==6){
    var object=document.createElement("div");
    object.classList.add("obj");
    object.textContent="Mathematics";
    showwhichday.appendChild(object);

    var object2=document.createElement("div");
    object2.classList.add("obj");
    object2.textContent="Chemistry";
    showwhichday.appendChild(object2);
}



}