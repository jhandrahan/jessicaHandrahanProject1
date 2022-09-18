document.addEventListener("DOMContentLoaded", ()=>{
    const hamburgerButton = document.querySelector('#hamburger');
    const closeHamburgerButton = document.querySelector('.closeMenu');
    const hamburgerMenu = document.querySelector('.slideOutNav');

    hamburgerButton.addEventListener('click', (event)=>{
        hamburgerMenu.classList.add('open');   
    });

    closeHamburgerButton.addEventListener('click', (event) =>{
        hamburgerMenu.classList.remove('open');
        console.log("test");
    });
})
