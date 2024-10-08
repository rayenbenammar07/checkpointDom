const plusButtons = document.querySelectorAll(".increase-qty");
const minusButtons = document.querySelectorAll(".decrease-qty");

plusButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log("ok");
    let quantityElement = this.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    updateTotal();
  });
});

minusButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let quantityElement = this.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
      updateTotal();
    }
  });
});

const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let item = this.closest(".cart-item");
    item.remove();
    updateTotal();
  });
});

const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("liked");
  });
});

function updateTotal() {
  const cartItems = document.querySelectorAll(".cart-item");
  let total = 0;

  cartItems.forEach((item) => {
    const price = parseFloat(
      item.querySelector(".item-price").textContent.replace("$", "")
    );
    const quantity = parseInt(item.querySelector(".quantity").textContent);
    total += price * quantity;
  });

  document.querySelector(".total-price").textContent = "$" + total.toFixed(2);
}
