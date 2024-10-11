var items = [
{ id: 1, name: "pimp Hip Dress", price: 1500.00, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSbuExYespgQlZz29yurUveLaUQH6TOYnSinGtzsfx24saXOInkBQ8GPgAaT92YKZfeuS0RrzLRHHG3TK3-S_jHwRmdnU-J7O5bmCEYwaIXlpf1wZyqw-1o1jpra1r-nWCRv-7Wt7TirMo&usqp=CAc" },
{ id: 2, name: "Africa Women Dress", price: 2000.00, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQTGMhfFTRMJZ_sbvJjDCp4omVnaZJFaRuiNgu1eVEmha4NkqpzSoIy1EgAr-gXV0HXMMAkVBiDPrwh4h4zpZ8bLlvz_wZkKsnwCzQVgrXrGcHXa2k3kpMrQdvC7dMFJ3rP_YlzIA&usqp=CAc" },
{ id: 3, name: "Turkey Dress", price: 3500.00, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSArD90XTY6UxJj2exzBVM8a1kUzFn8Kf-DiWmqUlplRff9_E4Nt6bYeB4jhZHB8YWhHhz9wwSMGhJTzRH_sUoGdUXsLb8cZ6dT10nxDYx0kYvhKrrrrplaQs9w1A&usqp=CAc" },
{ id: 4, name: "Bohemian Dress", price: 1600.00, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSvlzvEiIwK0j81kne63-jKwPMYU7UZPaKkmJukTUyhr88Rx_EMhNg85r220LoFs7pnJzPIXxq7DDTtVzG4Y3q18b0JElV-wX2o4IR9_Zm1wy55cyl1-fJPBkN7UTKG&usqp=CAc"},
{ id: 5, name: "Mid Dress", price: 4500.00, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6kieHNVaQDimjPOWGriXh2I9Rw0nqWmBF19nd7h6ll4pNK48xx2IxmURlCIzpPYjpoebvrDJVycOCgMGZ2HlJt8JVvuhXOO4DZG5PEUeWlD0nDLuqpOrTQ56oVSVs&usqp=CAc" },
{ id: 3, name: "Neck Wrap Dress", price: 3700.00, image:"https://www.topboho.com/cdn/shop/files/S5edeb5af17da48c7928fa9bfc2e78fa5X.jpg?v 1698701472&width=360" },
{ id: 3, name: "Sleeve Floral Dress", price: 4300.00, image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRpBCTZHlToc4F6xLphkd6e8Tt1Y01je_ImNaQhsSujW-Z1CzzN9MhFYkemtkfJN7_j-QcS80d_uvhRrAJf1-3XRZ50pSRX4gj9uzwdrVHzv5rdzg-Xgeg_CPCf0S3p&usqp=CAc" },
{ id: 3, name: "Strap Porm Dress", price: 2400.00, image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR6gafL5GHv8k561DFWRNz957Qe5HKwDwxGQ5_UKK4hp5IGPk-W9rFrztgEaX9mZBp4n24ekTf321aLE-NWeMDyN0T4UmziTlyu8Gve2M2w9ZfTwQJf6UtqkxJPUM7a&usqp=CAc" },
{ id: 3, name: "Bodycon Dress", price: 3200.00, image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQqA_4P9-OiMSfc4dpeotbAz43Bc_InKjS6heis63z_FqepekoHMcizUj29SRy6-u98HTCJv9TqA40I1J0JmN7xiDviHGwO4FkjdpU_zCeWA015b8PATK4Qrcouxm081xalsQMWwg&usqp=CAc" },
{ id: 3, name: "Floral V Neck Dress", price: 4300.00, image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7B3dEtqcShl7bzlgRUobVtm90HIkE2tmJ8QnBimHUvg_d0b5un1QoyEaCKjViC_SSJggGwkvendyO87Yqr6EyxtfwWZ-4lv6QO3e56Ns-f8WzkchGKpsT9OlFk-o&usqp=CAc" },
{ id: 3, name: "Summer Max Dress", price: 2350.00, image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQZjB9dOnTzE3pyd-unO3XO38jq16ZAcCEbpfqhSY9VCwU5d524xSkW0LsbMNvmESs9LvCEC-7KsoeuvTJFFlnDXws9grri46ZcuQgVbhmKWwyz2Y3iamZa5g&usqp=CAc" },
];
var cart = [];
var total = 0;
document.addEventListener("DOMContentLoaded", () => {
displayItems();
document.getElementById("registration-form").addEventListener("submit",
handleRegistration);
document.getElementById("checkout").addEventListener("click",
showPaymentOptions);
document.getElementById("mpesa").addEventListener("click",
handleMpesaPayment);
document.getElementById("card").addEventListener("click", handleCardPayment);
});
function displayItems() {
var itemsDiv = document.getElementById("items");
items.forEach(item => {
var itemDiv = document.createElement("div");
itemDiv.innerHTML = `
<img src="${item.image}" alt="${item.name}">
<h3>${item.name}</h3>
<p>Price: ksh${item.price}</p>
<button onclick="addToCart(${item.id})">Add to Cart</button>
`;
itemsDiv.appendChild(itemDiv);
});
}
function showSection(section) {
var sections = ['home', 'registration', 'items', 'cart', 'contact'];
sections.forEach(sec => {
document.getElementById(sec + '-section').style.display = sec === section
? 'block' : 'none';
});
}
function handleRegistration(event) {
event.preventDefault();
var username = document.getElementById("username").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
alert(`Registration Successful!\nUsername: ${username}\nEmail: ${email}`);
showSection('items');
}
function addToCart(itemId) {
var item = items.find(i => i.id === itemId);
cart.push(item);
total += item.price;
updateCart();
}
function updateCart() {
var cartItemsDiv = document.getElementById("cart-items");
cartItemsDiv.innerHTML = ''; // Clear the cart display
cart.forEach(item => {
var itemDiv = document.createElement("div");
itemDiv.textContent = `${item.name} - ksh${item.price}`;
cartItemsDiv.appendChild(itemDiv);
});
document.getElementById("total").textContent = `Total: ksh${total}`;
}
function showPaymentOptions() {
document.getElementById("payment-options").style.display = 'block';
}
function handleMpesaPayment() {
var phoneNumber = prompt("Enter your phone number for M-Pesa payment:");
if (phoneNumber) {
alert(`M-Pesa payment of ksh${total} initiated for phone number
${phoneNumber}`);
}
}
function handleCardPayment() {
alert(`Card payment of ksh${total} initiated.`);
}
function orderThroughWhatsApp() {
var message = "Hello, I would like to place the following order:\n";
cart.forEach(item => {
message += `${item.name} - ksh${item.price}\n`;
});
message += `Total: ksh${total}`;
var phoneNumber = "+1234567890"; // Replace with your WhatsApp number
var whatsappUrl =
`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
window.open(whatsappUrl, '_blank');
}