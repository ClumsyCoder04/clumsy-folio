const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


const mixer = mixitup('.p-container', {
    selectors: {
        target: '.p-content'
    },
    animation: {
        duration: 400
    }
});

const linkPortfolio = document.querySelectorAll('.p-item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}

linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))


