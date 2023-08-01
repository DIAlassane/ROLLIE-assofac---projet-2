

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

// TABLEAU --------------- ------------------------- ------------------------ ----------------------- ---------------

var users = ['Alassane', 'Thomson'];
var age = [20, 20];
var email = ['alassdia0909@gmail.com', 'Thomsonbrisson210@gmail.com']

var text = document.getElementById('tableau');
var table = '<table><thead><tr><th>ID</th><th>Name</th><th>Age</th><th>Email</th></tr></thead><tbody>';

for(var i = 0; i < users.length; i++) {
  table += '<tr><td>' + (i+1) + '</td><td>' + users[i] + '</td><td>' + age[i] + '</td><td>' + email[i] + '</td><tr>';
}

table += '</tbody></table>';

// FAIRE APPARAITRE LES ELEMENTS -------------------------- ----------------- -------------------- ------------------ -----------------

text.innerHTML = table;