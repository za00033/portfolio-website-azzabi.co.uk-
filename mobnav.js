//-----------------------------------------------------------
/*Adding mobile button show/hide depending on screen size*/
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
// Add Event Listeners
btn.addEventListener("click", () => {
menu.classList.toggle("hidden");
});


