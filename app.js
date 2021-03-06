const navslide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navlinks");
    const navlinks = document.querySelectorAll('.navlinks li');
    // toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    //animate links
    navlinks.forEach((link, index) => {
        if(link.style.animation){
            link,style.animation = '';
        } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
        }
    });
    
    // burger animation
    burger.classList.toggle('toggle');
}
navslide();

