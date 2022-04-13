"use strict";

const d = document;

const share_button = d.querySelector(".share-btn");
const share_icon = d.querySelector(".share-icon");
const menu_share = d.querySelector(".share-container");
const triangle = d.querySelector(".triangle");

share_button.addEventListener("click", () => {
  share_button.classList.toggle("active-btn");
  share_icon.classList.toggle("active-icon");
  menu_share.classList.toggle("show-menu");
  triangle.classList.toggle("show");
});
