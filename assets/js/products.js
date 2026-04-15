const products = {
  Mobiles: [
    { name: "iPhone 16 pro max", price: 799, img: "images/iphone.jpeg" },
    { name: "Samsung S25 ultra", price: 699, img: "images/samsung.jpeg" },
    { name: "Pixel 9 pro", price: 599, img: "images/pixel.jpeg" },
    { name: "Realme 13 pro+", price: 299, img: "images/realme.jpeg" },
    { name: "Redmi Note 14 pro+", price: 199, img: "images/redmi.jpeg" }
  ],
  Laptops: [
    { name: "MacBook Air", price: 999, img: "images/macbook.jpg" },
    { name: "Dell XPS", price: 899, img: "images/dell.jpg" },
    { name: "HP Pavilion", price: 749, img: "images/hp.jpg" },
    { name: "Acer Aspire", price: 549, img: "images/acer.jpg" },
    { name: "Lenovo IdeaPad", price: 499, img: "images/lenovo.jpeg" }
  ],
  Shoes: [
    { name: "Nike Air Max", price: 120, img: "images/nike.jpeg" },
    { name: "Adidas Ultraboost", price: 130, img: "images/adidas.jpeg" },
    { name: "Puma Running", price: 90, img: "images/puma.jpeg" },
    { name: "Reebok Crossfit", price: 100, img: "images/reebok.jpeg" },
    { name: "New Balance", price: 110, img: "images/new balance.jpeg" }
  ],
  Fitness: [
    { name: "Resistance Bands", price: 120, img: "images/fband.jpeg" },
    { name: "Smart Fitness Watch / Tracker", price: 130, img: "images/ftracker.jpeg" },
    { name: "Foam Roller", price: 90, img: "images/froller.jpeg" },
    { name: "Jump Rope", price: 100, img: "images/fjumprope.jpeg" },
    { name: "Yoga Mat", price: 110, img: "images/fyoga.jpeg" }
  ],
  Gadgets: [
    { name: "Smart Watch", price: 199, img: "images/smartwatch.jpeg" },
    { name: "Bluetooth Speaker", price: 149, img: "images/bluetooth speaker.jpeg" },
    { name: "VR Headset", price: 299, img: "images/vr head set.jpeg" },
    { name: "Drone", price: 499, img: "images/drone.jpeg" },
    { name: "GoPro Camera", price: 399, img: "images/gopro.jpeg" }
  ],
  Grocery: [
    { name: "Basmati Rice", price: 49, img: "images/basmati.jpeg" },
    { name: "Almonds 1kg", price: 399, img: "images/almonds.jpeg" },
    { name: "Olive Oil", price: 299, img: "images/oli.jpeg" },
    { name: "Atta 5kg", price: 199, img: "images/atta.jpeg" },
    { name: "Milk 1L", price: 49, img: "images/milk.jpeg" }
  ]
};

// function showCategory(category) {
//   const list = document.getElementById("product-list");
//   list.innerHTML = "";
//   products[category].forEach(prod => {
//     list.innerHTML += `
//       <div class="col-md-4">
//         <div class="card h-100 shadow">
//         <img src="${prod.img}" class="card-img-top product-img" alt="${prod.name}">
//           <div class="card-body">
//             <h5 class="card-title">${prod.name}</h5>
//             <p>₹${prod.price}</p>
//             <button class="btn btn-primary" onclick='addToCart(${JSON.stringify(prod)})'>Add to Cart</button>
//           </div>
//         </div>
//       </div>`;
//   });
// }
window.showCategory = function (category) {
        const productList = document.getElementById("product-list");
        productList.innerHTML = "";
        const categoryProducts = products[category] || [];

        categoryProducts.forEach(product => {
          const card = document.createElement("div");
          card.className = "bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center";
          card.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="w-full h-48 object-cover rounded mb-3">
            <h5 class="font-semibold">${product.name}</h5>
            <p class="text-purple-600 font-bold">₹${product.price}</p>
            <button class="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700" onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
          `;
          productList.appendChild(card);
        });
      }
