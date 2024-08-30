
let CartPageContainer = document.getElementById("cart_page-container");
let proudctsNew = JSON.parse(localStorage.getItem("proudctsUpdat"))
let favoriteItems = JSON.parse(localStorage.getItem("wishItems"));
let itemsCart = JSON.parse(localStorage.getItem("cartItems"));
let priceTotal = document.getElementById("total-price");
let totalPriceDiv = document.getElementById("totalPriceDiv");
if(localStorage.getItem("cartItems")){
// let itemsCart=JSON.parse(localStorage.getItem("cartItems"));   
if(CartPageContainer){
CartPageContainer.innerHTML = itemsCart.map(function(product){
    return ` 
    <div class="proudct-item">
    <img src="${product.image}" alt="">
    <h4>Type : ${product.type}</h4>
    <h4>Name : ${product.name}</h4>
    <h4>Price : ${product.price}$</h4>
     <div class="buttons">
                 <span><button class="remove-from-cart btn" id="cartRemove${product.id}" price="${product.price}" onclick="RemoveFromCart(${product.id})">Remove</button></span>  
                <div class="additionButtons">
                <button class="add" id="add-item${product.id}" onclick="addOne(${product.id})" ><i class="fa-solid fa-plus"></i></button>
                <span id="count${product.id}"> ${product.defaultAmount} </span>
                <button class="remove" id="remove-item${product.id}"  onclick="removeOne(${product.id})" ><i class="fa-solid fa-minus"></i></button>
                 </div>
                 </div>
   </div>`
}).join(" ") } }

function addOne(id){
    let choosenItem = itemsCart.find(function(product){
        return product.id === id;
    })
    let count = document.getElementById(`count${id}`);
    if(choosenItem.defaultAmount >= 1){
        choosenItem.defaultAmount += 1
        count.innerHTML = choosenItem.defaultAmount; 
} else {
    console.log (id);
}
localStorage.setItem("proudctsUpdat",JSON.stringify(proudctsNew));  
localStorage.setItem("cartItems",JSON.stringify(itemsCart));  
getPrice()
}


function removeOne(id){
    let choosenItem = itemsCart.find(function(product){
        return product.id === id;
    })
    if(choosenItem.defaultAmount > 1){
        let count = document.getElementById(`count${id}`);
        choosenItem.defaultAmount -= 1;
        count.innerHTML = choosenItem.defaultAmount;  }
    else{
        RemoveFromCart(id);
    }
    localStorage.setItem("proudctsUpdat",JSON.stringify(proudctsNew));  
    localStorage.setItem("cartItems",JSON.stringify(itemsCart));  
    getPrice()
}
function RemoveFromCart(id)
{
    let newCart = itemsCart.filter(function(product){
        return product.id !== id
    })
    localStorage.setItem("cartItems" , JSON.stringify(newCart));
    getPrice()
    window.location.reload();
    
}
function getPrice(){
    var totalPrice = 0;
    let items = JSON.parse(localStorage.getItem("cartItems"))
    if(items){
    items.map((item)=>{
    totalPrice += +(+item.price * +item.defaultAmount);
})}
if(totalPriceDiv){
totalPriceDiv.innerHTML =`<h3>Total price: <span id="total-price">${totalPrice}$</span></h3>`;
}}

let favoriteContainer = document.getElementById ("fav-container")

if(localStorage.getItem("wishItems")){
    if(favoriteContainer){
    let itemsFav=JSON.parse(localStorage.getItem("wishItems"));    
    favoriteContainer.innerHTML = itemsFav.map(function(product){
        return ` 
        <div class="proudct-item shadow  fav-item">
        <img src="${product.image}" alt="">
        <h4>Type : ${product.type}</h4>
        <h4>Name : ${product.name}</h4>
        <h4>Price : ${product.price}$</h4>
         <div class="buttons">  
                     <span>   <button class="remove-from-favorits" id="favRemove${product.id}"  onclick="RemoveFromFav(${product.id})" ><i class="fa-solid fa-heart heart" ></i></button></span>  
                  </div>
       </div>`
    }).join(" ") } }

    function RemoveFromFav(id){
        let newFav = favoriteItems.filter(function(product){
            return product.id !== id
        })
        localStorage.setItem("wishItems" , JSON.stringify(newFav));
        window.location.reload();
    }

    // window.onload(getPrice());
getPrice()