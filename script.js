document.addEventListener("DOMContentLoaded", () => {
  //hamburger Menu
  const hamburgerButton = document.querySelector("#hamburger");
  const closeHamburgerButton = document.querySelector(".closeMenu");
  const hamburgerMenu = document.querySelector(".slideOutNav");

  hamburgerButton.addEventListener("click", (event) => {
    hamburgerMenu.classList.add("open");
  });

  closeHamburgerButton.addEventListener("click", (event) => {
    hamburgerMenu.classList.remove("open");
  });

  //blog page form functionality
  const formElement = document.querySelector(".commentForm");
  const nameInput = document.querySelector("#name");
  const commentInput = document.querySelector("#message");

  //prevent form default settings
  formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(formElement);
    const name = nameInput.value;
    console.log(name);
    const comment = commentInput.value;
    console.log(comment);
  });
});
