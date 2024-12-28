// Script for navigation bar
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Cart Working
document.addEventListener("DOMContentLoaded", () => {
  const addToCartBtn = document.querySelectorAll(".bx bx-cart");
  const cartItemCount = document.querySelector(".cart-icon span");
  const cartItemsList = document.querySelector(".pro-container");
  const cartTotal = document.querySelector(".cart-total");
  const cartIcon = document.querySelector(".cart-icon");

  let cartItems = [];
  let totalAmount = 0;

  addToCartBtn.forEach((button, index) => {
    button.addEventListener("click", () => {
      const item = {
        name: document.querySelectorAll(".pro .des h5")[index].textContent,
        price: parseFloat(
          document.querySelectorAll(".price")[index].textContent.slice(1)
        ),
        quantity: 1,
      };

      const exisitingItem = cartItems.find(
        (cartItem) => cartItem.name === item.name
      );
      if (exisitingItem) {
        exisitingItem.quantity++;
      } else {
        cartItems.push(item);
      }

      totalAmount += item.price;

      updateCartUI();
    });

    function updateCartUI() {
      updateCartItemCount(cartItems.length);
      updateCartItemList();
      updateCartTotal();
    }

    function updateCartItemCount(count) {
      cartItemCount.textContent = count;
    }

    function updateCartItemList() {
      cartItemsList.innerHTML = "";
      cartItems.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item", "tbody");
        cartItem.innerHTML = `
          <tr>
            <td>
              <a href="#" data-index="${index}"
                ><i id="remove-btn" class="far fa-times-circle"></i
              ></a>
            </td>
            <td><img src="img/products/f1.jpg" alt="" /></td>
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td><input type="number" value="0" />${item.quantity}</td>
            <td class="cart-total">$${item.totalAmount}</td>
          </tr>
        `;
      });
    }
  });
});
