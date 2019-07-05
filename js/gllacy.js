var search_link = document.querySelector(".search-btn");
var search_form = document.querySelector(".search-form");
var login_link = document.querySelector(".login-btn");
var login_form = document.querySelector(".login-form");
var contact_link = document.querySelector(".contact-form-btn");
var feedback_form = document.querySelector(".modal");
var feedback_close_btn = document.querySelector(".feedback-close-btn");
var cart_btn = document.querySelector(".cart-btn");
var cart_form = document.querySelector(".cart-content");
var delete_cart_item = document.querySelector(".delete-cart-item-btn");
search_link.addEventListener("mouseover", function (evt) {
  evt.preventDefault();
  search_form.classList.remove("visually-hidden");
});
search_link.addEventListener("mouseout", function (evt) {
  evt.preventDefault();
  search_form.classList.add("visually-hidden");
});

login_link.addEventListener("mouseover", function (evt) {
  evt.preventDefault();
  login_form.classList.toggle("visually-hidden");
});
login_link.addEventListener("mouseout", function (evt) {
  evt.preventDefault();
  login_form.classList.toggle("visually-hidden");
});
if (contact_link) {
  contact_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedback_form.classList.add("modal-show");
  })
}
if (feedback_close_btn) {
feedback_close_btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback_form.classList.remove("modal-show");
});
}
cart_btn.addEventListener("mouseover", function (evt) {
  evt.preventDefault();
  cart_form.classList.remove("visually-hidden");
})
cart_btn.addEventListener("mouseout", function (evt) {
  evt.preventDefault();
  cart_form.classList.add("visually-hidden");
})
delete_cart_item.addEventListener("click", function (evt) {
  evt.preventDefault();
  delete_cart_item.parentNode.classList.add("visually-hidden");
})
