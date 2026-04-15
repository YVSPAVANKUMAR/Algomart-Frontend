// function getCart() {
//   return JSON.parse(localStorage.getItem("cart") || "[]");
// }

// function saveCart(cart) {
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

// function addToCart(product) {
//   let cart = getCart();
//   const existing = cart.find(p => p.name === product.name);
//   if (existing) existing.qty += 1;
//   else cart.push({ ...product, qty: 1 });
//   saveCart(cart);
//   alert("Added to cart!");
// }

// function removeFromCart(name) {
//   let cart = getCart().filter(p => p.name !== name);
//   saveCart(cart);
//   renderCart();
// }

// function renderCart() {
//   const cart = getCart();
//   const container = document.getElementById("cart-container");
//   const summary = document.getElementById("summary");

//   if (cart.length === 0) {
//     container.innerHTML = "<p>Your cart is empty.</p>";
//     summary.innerHTML = "";
//     return;
//   }

//   let html = "<ul class='list-group'>";
//   let total = 0;
//   cart.forEach(p => {
//     let subtotal = p.price * p.qty;
//     total += subtotal;
//     html += `<li class='list-group-item d-flex justify-content-between align-items-center'>
//       ${p.name} x ${p.qty} = ₹${subtotal}
//       <button class='btn btn-sm btn-danger' onclick="removeFromCart('${p.name}')">Remove</button>
//     </li>`;
//   });
//   html += "</ul>";

//   let discount = 0;
//   if (total >= 500 && total < 999) discount = 0.1 * total;
//   else if (total >= 999) discount = 0.2 * total;

//   let final = total - discount;

//   container.innerHTML = html;
//   summary.innerHTML = `Total: &#8377;${total} <br> Discount: &#8377;${discount} <br> <span class="text-success">Final Price: &#8377;${final}</span>`;
// }

// window.onload = renderCart;

function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}
function addToCart(product) {
  let cart = getCart();
  const existing = cart.find(p => p.name === product.name);
  if (existing) existing.qty += 1;
  else cart.push({ ...product, qty: 1 });
  saveCart(cart);
  alert("Added to cart!");
}
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateQuantity(name, quantity) {
  let cart = getCart().map(item =>
    item.name === name ? { ...item, qty: parseInt(quantity) } : item
  );
  saveCart(cart);
  renderCart();
}

function removeFromCart(name) {
  const cart = getCart().filter(item => item.name !== name);
  saveCart(cart);
  renderCart();
}

function renderCart() {
  const container = document.getElementById("cart-container");
  const totalEl = document.getElementById("total-cost");
  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `<div class="alert alert-info text-center">Your cart is empty.</div>`;
    totalEl.innerHTML = "";
    return;
  }

  let html = '';
  let total = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.qty;
    total += subtotal;

    html += `
      <div class="card mb-3 shadow-sm">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${item.img}" class="cart-img img-fluid rounded-start" alt="${item.name}">
          </div>
          <div class="col-md-8">
            <div class="card-body d-flex flex-column justify-content-center h-100">
            
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text mb-1">Price: ₹${item.price}</p>
              <div class="d-flex align-items-center mb-2">
                <label class="me-2 fw-bold">Qty:</label>
                <input type="number" class="form-control form-control-sm w-25" min="1" value="${item.qty}" onchange="updateQuantity('${item.name}', this.value)">
              </div>
              <p class="card-text mb-2">Subtotal: ₹${subtotal}</p>
              <button class="btn btn-sm btn-danger" onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  let discount = 0;
  if (total >= 500 && total < 999) {
    discount = total * 0.1;
  } else if (total >= 999) {
    discount = total * 0.2;
  }

  let finalTotal = total - discount;

  container.innerHTML = html;
  totalEl.innerHTML = `
    <p>Total: ₹${total.toFixed(2)}</p>
    <p>Discount: ₹${discount.toFixed(2)}</p>
    <p><strong>Final Price: ₹${finalTotal.toFixed(2)}</strong></p>
  `;
}

window.onload = renderCart;

