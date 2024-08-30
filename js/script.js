let userContainer = document.getElementById("loggedName");
let userName = document.getElementById("userName");
let links = document.getElementById("links");
let logOut = document.getElementById("logout");
let cartBtn = document.getElementById("cart-btn");
let cartDiv = document.getElementById("cart-container");
let favContainer = document.getElementById("wishlist-container");
let favItems = document.getElementById("wishlist-Items");
let wishlistCount = document.getElementById("wishlistCount");
let wishbtn = document.getElementById("wish-btn");
let badgeCart = document.querySelector("#cartCount , #wishlistCount");
let badgefav = document.querySelector("#wishlistCount");
let selectItem = document.getElementById("categories");
let searchInput = document.getElementById("search-input");
var selectVal ;
wishbtn?.addEventListener("click", function CartExsist() {
  if (!localStorage.getItem("email")) {
    setTimeout(function () {
      window.location.href = "login.html";
    }, 100);
  } else {
    if (localStorage.getItem("wishItems")) {
      if (favContainer.style.display === "none") {
        favContainer.style.display = "block";
      } else {
        favContainer.style.display = "none";
      }
    }
  }
});
cartBtn?.addEventListener("click", function CartExsist() {
  if (!localStorage.getItem("email")) {
    setTimeout(function () {
      window.location.href = "login.html";
    }, 100);
  } else {
    if (localStorage.getItem("cartItems")) {
      if (cartDiv.style.display === "none") {
        cartDiv.style.display = "block";
      } else {
        cartDiv.style.display = "none";
      }
    }
  }
});



// function getval(){
//   let selectItem = document.getElementById("catigories");
//   let selectVal = selectItem.value;
//   return selectVal;
// }

// function search(){
//   let value = getval();
//   if (value === "type"){
//       let selected = products.filter((item) => item.type.toLowerCase().includes(value));
//       drawItems(selected);
//   } else if (value === "name"){
//       let selected = products.filter((item) => item.name.toLowerCase().includes(value));
//       drawItems(selected);
//   }
// }


if (localStorage.getItem("firstName") != null) {
  links.remove();
  if (userContainer) {
    userContainer.style.display = "block";
  }
  userName.innerHTML = `Welcome ${localStorage.getItem("firstName")}`;
}

logOut?.addEventListener("click", function () {
  localStorage.clear();
  window.location.reload();
});

var productsContainer = document.getElementById("proudcts-container");

var proudcts = [
  {
    id: 1,
    name: "Attack On Titan",
    type: "Manga",
    price: 10,
    image: "Pictures/Aot.jpeg",
    volumes: 33,
    cartValue: true,
    favValue: true,
    defaultAmount: 1,
  },
  {
    id: 2,
    name: "Black Clover",
    type: "Manga",
    price: 10,
    image: "Pictures/blackClover.jpeg",
    volumes: 23,
    cartValue: true,
    favValue: true,
    defaultAmount: 1,
  },
  {
    id: 3,
    name: "My Hero Academia",
    type: "Manga",
    price: 10,
    image: "Pictures/Bnha.jpeg",
    volumes: 40,
    cartValue: true,
    favValue: true,
    defaultAmount: 1,
  },
  {
    id: 4,
    name: "Demon Slayer",
    type: "Manga",
    price: 10,
    image: "Pictures/DS.jpeg",
    volumes: 25,
    cartValue: true,
    favValue: true,
    defaultAmount: 1,
  },
  {
    id: 5,
    name: "Death Note",
    type: "Manga",
    price: 10,
    image: "Pictures/deathnote.jpeg",
    volumes: 16,
    cartValue: true,
    favValue: true,
    defaultAmount: 1,
  },
  {
    id: 6,
    name: "Jujutsu Kaisen",
    type: "Manga",
    price: 10,
    image: "Pictures/jjk.jpeg",
    volumes: 40,
    cartValue: true,
    favValue: true,
    defaultAmount: 1,
  },
  {
    id: 7,
    name: "7 Fates : Chakho",
    type: "Webtoon",
    price: 25,
    image: "Pictures/fates.jpeg",
    volumes: 15,
    cartValue: true,
    favValue: true,
    defaultAmount: 1,
  },
  {
    id: 8,
    name: "Spy x Family",
    type: "Manga",
    price: 10,
    image: "Pictures/spy x family doodles on Twitter.jpeg",
    volumes: 20,
    cartValue: true,
    favValue: true,
    defaultAmount: 1,
  },
  {
    id: 9,
    name: "Naruto",
    type: "Manga",
    price: 10,
    image: "Pictures/naruto.jpeg",
    volumes: 90,
    cartValue: true,
    favValue: true,
    defaultAmount: 1,
  },
  {
    id: 10,
    name: "One Piece",
    type: "Manga",
    price: 10,
    image: "Pictures/onePiece.jpeg",
    volumes: 110,
    cartValue: true,
    favValue: true,
    defaultAmount: 1,
  },
  {
    id: 11,
    name: "Solo Leveling",
    type: "Webtoon",
    price: 25,
    image: "Pictures/soloLeveling.jpeg",
    volumes: 30,
    cartValue: true,
    favValue: true,
    defaultAmount: 1,
  },
  {
    id: 12,
    name: "True Beauty",
    type: "Webtoon",
    price: 25,
    image: "Pictures/truebeauty.jpeg",
    volumes: 50,
    cartValue: true,
    favValue: true,
    defaultAmount: 1,
  },
  {
    id: 13,
    name: "Under the Oak Tree",
    type: "Webtoon",
    price: 25,
    image: "Pictures/undertheoak.jpeg",
    volumes: 25,
    cartValue: true,
    favValue: true,
    defaultAmount: 1,
  },
  {
    id: 14,
    name: "Wind Breaker",
    type: "Webtoon",
    price: 25,
    image: "Pictures/windbreaker.jpeg",
    volumes: 20,
    cartValue: true,
    favValue: true,
    defaultAmount: 1,
  },
  {
    id: 15,
    name: "Operation : True Love",
    type: "Webtoon",
    price: 25,
    image: "Pictures/operation.jpeg",
    volumes: 25,
    cartValue: true,
    favValue: true,
    defaultAmount: 1,
  },
];
function drawItems(obj) {
  if (productsContainer) {
      productsContainer.innerHTML = obj
      .map(function (product) {
        return ` <div class="proudct-item">
        <img src="${product.image}" alt="">
        <h4>Type : ${product.type}</h4>
        <h4>Name : ${product.name}</h4>
        <h4>Price : ${product.price}$</h4>
        <h4>Volumes : up to ${product.volumes}</h4>
         <div class="buttons">
                     <span>   <button class="add-to-cart btn" id="item${product.id}" price="${product.price}" onclick="addToCart(${product.id})" >Add To Cart</button></span>  
                     <span>   <button class="add-to-favorits" id="fav${product.id}"  onclick="addToWishList(${product.id})" ><i class="fa-solid fa-heart heart" ></i></button></span>  
                  </div>
       </div>`;
      })
      .join(" ");
  }
}
drawItems(proudcts);

let numofItemsInCart = document.getElementById("cartCount");
let cartItems = document.getElementById("cart-Items");
let cart = JSON.parse(localStorage.getItem("cartItems")) ?? [];

function addToCart(id) {
  let choosenItem = proudcts.find(function (product) {
    return product.id === id;
  });
  let addToCartButton = document.getElementById(`item${choosenItem.id}`);
  if (choosenItem.cartValue === true) {
    addToCartButton.style.backgroundColor = "red";
    addToCartButton.textContent = "remove from cart";
    addToCartButton.style.color = "white";
    cart = [...cart, choosenItem];
    cartItems.innerHTML = cart.map((item) => `<p>${item.name}</p>`).join("");
    localStorage.setItem("cartItems", JSON.stringify(cart));
    let number = cart.length;
    numofItemsInCart.textContent = number;
    choosenItem.cartValue = false;
    console.log(choosenItem.cartValue);
  } else {
    addToCartButton.style.backgroundColor = "#14213d";
    addToCartButton.textContent = "Add To Cart";
    addToCartButton.style.color = "#ffce22";
    cart = cart.filter((item) => item.id !== choosenItem.id);
    cartItems.innerHTML = cart.map((item) => `<p>${item.name}</p>`).join("");
    localStorage.setItem("cartItems", JSON.stringify(cart));
    let number = cart.length;
    numofItemsInCart.textContent = number;
    choosenItem.cartValue = true;
    console.log(choosenItem.cartValue);
  }

  localStorage.setItem("proudctsUpdat", JSON.stringify(proudcts));
}

function updateCartDisplay() {
  cartItemsElement.innerHTML = cart
    .map((item) => `<li>${item.name}</li>`)
    .join("");
}
let fav = JSON.parse(localStorage.getItem("wishItems")) ?? [];
function addToWishList(id) {
  console.log(JSON.parse(localStorage.getItem("wishItems")));

  let choosenItem = proudcts.find(function (product) {
    return product.id === id;
  });
  let addToFav = document.getElementById(`fav${choosenItem.id}`);
  if (choosenItem.favValue === true) {
    addToFav.style.color = "red";
    fav = [...fav, choosenItem];
    favItems.innerHTML = fav.map((item) => `<p>${item.name}</p>`).join("");
    localStorage.setItem("wishItems", JSON.stringify(fav));
    wishlistCount.innerHTML = fav.length;
    choosenItem.favValue = false;
  } else {
    addToFav.style.color = "#444";
    fav = fav.filter((item) => item.id !== choosenItem.id);
    localStorage.setItem("wishItems", JSON.stringify(fav));
    favItems.innerHTML = fav.map((item) => `<p>${item.name}</p>`).join("");
    wishlistCount.innerHTML = fav.length;
    choosenItem.favValue = true;
  }
  localStorage.setItem("proudctsUpdat", JSON.stringify(proudcts));
}
if (badgeCart.innerHTML != null) {
  badgeCart.style.display = "flex";
  badgeCart.innerHTML = cart.length;
}
if (badgefav.innerHTML != null) {
  badgefav.style.display = "flex";
  badgefav.innerHTML = fav.length;
}

function getval(){
  if(selectItem){
  selectVal = selectItem.value;}
  console.log(selectVal)
  return selectVal;
}

function search(){
let searchInput = document.getElementById("search-input");
let value = getval();
if (value =="type"){
let selected = proudcts.filter((item)=>  (item.type).toLowerCase().includes(searchInput.value));
drawItems(selected);
}
else if (value == "name"){
  let selected = proudcts.filter((item)=> (item.name).toLowerCase().includes(searchInput.value));
  drawItems(selected);  

}
}