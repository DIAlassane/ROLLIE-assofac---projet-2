// Envoyer une demande POST au serveur lors de la soumission du formulaire
form.addEventListener("submit", submitPaymentForm);

async function submitPaymentForm(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const response = await fetch("/process-payment", {
    method: "POST",
    body: contenant,
  });
  const result = await response.json();
  if (result.success) {
    alert("Paiement réussi !");
  } else {
    alert(`Erreur lors du paiement : ${result.error}`);
  }
}