var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// ACORDEON - 5 --------------------------------------

var acc = document.getElementsByClassName("accordion5");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



// ------------- ----------------- ---------- CARROUSSEL -------------_------------ ---------- 
let counter = 1

setInterval(()=>{

    document.querySelector('.img.show').classList.remove('show')
    const img = document.querySelector(`.img-${counter}`)
    img.classList.add('show')
    counter++

    if(counter >3){
        counter = 1
    }

},3000)

// ACORDEON - 667 --------------------------------------

var acc = document.getElementsByClassName("accordion667");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// FILTRE 667 ------------------ --------------------------- ----------------------- ----------------

filterObjects("tout");

function filterObjects(c){
  var x, i;
  x = document.getElementsByClassName("ggrid");
  if (c == "tout") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if(x[i].className.indexOf(c) > -1) addClass(x[i], "show")
  }
}

function addClass(element, name){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++){
    if (arr1.indexOf(arr2[i]) == -1){
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++){
    while (arr1.indexOf(arr2[i]) > -1){
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}