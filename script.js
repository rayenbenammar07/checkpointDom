// Sélection des boutons "+" et "-"
const plusButtons = document.querySelectorAll(".increase-qty");
const minusButtons = document.querySelectorAll(".decrease-qty");

// Gestion des boutons "+"
plusButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let quantityElement = this.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    updateTotal(); // Mise à jour du total après modification
  });
});

// Gestion des boutons "-"
minusButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let quantityElement = this.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
      updateTotal(); // Mise à jour du total après modification
    }
  });
});

// Suppression d'un article du panier
const deleteButtons = document.querySelectorAll(".remove-item");

deleteButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let item = this.closest(".cart-item");
    item.remove();
    updateTotal(); // Mise à jour du total après suppression
  });
});

// Gestion des "likes"
const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("liked");
  });
});

// Fonction pour mettre à jour le prix total
function updateTotal() {
  const cartItems = document.querySelectorAll(".cart-item");
  let total = 0;

  cartItems.forEach((item) => {
    const price = parseFloat(item.querySelector(".price").textContent);
    const quantity = parseInt(item.querySelector(".quantity").textContent); // Sélection de la quantité correcte
    total += price * quantity;
  });

  // Mise à jour de l'élément prix total
  document.querySelector("#total").textContent = total.toFixed(2);
}
