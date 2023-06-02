function mdl() {
    var result = confirm('Accéder au Mode de Paiement');
    if (result == false) {
        event.preventDefault();
    }
}

// -------------------------------Accordeon--------------------

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