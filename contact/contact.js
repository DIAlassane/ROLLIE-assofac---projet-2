function mdl() {
    var result = confirm('Accéder au Mode de Paiement');
    if (result == false) {
        event.preventDefault();
    }
}