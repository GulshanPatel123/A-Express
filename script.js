document.addEventListener("DOMContentLoaded", function() {
    const cartItemsElement = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const addToCartButton = document.getElementById("add-to-cart");

    let totalPrice = 0;
    let itemCount = 0;

    addToCartButton.addEventListener("click", function() {
        const price = 10; // Sample price for the product
        totalPrice += price;
        itemCount++;

        const cartItem = document.createElement("li");

        const itemImage = document.createElement("img");
        itemImage.src = "Gelusil 1.jpg"; // Replace this with the path to your image
        itemImage.alt = "Product Image";

        cartItem.appendChild(itemImage);

        const itemText = document.createElement("span");
        itemText.textContent = "Item " + itemCount + ": $" + price;
        cartItem.appendChild(itemText);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            totalPrice -= price;
            itemCount--;
            totalPriceElement.textContent = totalPrice;
            cartItemsElement.removeChild(cartItem);
        });

        cartItem.appendChild(removeButton);
        cartItemsElement.appendChild(cartItem);

        totalPriceElement.textContent = totalPrice;
    });
});