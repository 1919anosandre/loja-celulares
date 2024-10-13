
document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.getElementById('galeria');
    const images = [
        'img/lancamento-motorolaX50.avif',
        'img/Xiaomi-Redmi-Note-13-Pro-Max-1024x576.jpeg',
        'img/lancamento-sansungf55.webp'
    ];
    let currentImageIndex = 0;

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        slideshow.src = images[currentImageIndex];
    }

    setInterval(changeImage, 3000); // Muda a imagem a cada 3 segundos
});

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.navLinks.forEach(link => {
            link.classList.toggle(this.activeClass);
        });
        this.animateLinks();
    }

    addClickEvent() {
        if (this.mobileMenu) {
            this.mobileMenu.addEventListener("click", this.handleClick);
        }
    }

    init() {
        this.addClickEvent();
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li ",
);
mobileNavbar.init();
//https://casadocelular.com.br/celulares/cor-azul-safira.html

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para alternar o tema
    function toggleTheme() {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
        const isDarkTheme = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    }

    // Carregar o tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.add('light-theme');
    }

    // Adicionar o evento de clique ao botão
    toggleButton.addEventListener('click', toggleTheme);
});

const containerCarrinho = document.querySelector('.container-carrinho')
const itensCarrinho = document.querySelector('.itens-carrinho')
const adicionarCarrinho = document.getElementsByClassName('adicionarCarrinho')
for (let i = 0; i < adicionarCarrinho.length; i++) {
    adicionarCarrinho[i].addEventListener('click', function() {
        const produto = this.parentNode; // Get the parent element (product card)
        const imgProduto = produto.querySelector('.imgProduto');
        const nomeProduto = produto.querySelector('.nomeProduto');
        const precoProduto = produto.querySelector('.precoProduto');
        containerCarrinho.style.display = 'flex';

        itensCarrinho.innerHTML += `
        <img class='img' src='${imgProduto.src} ' >
        <h1 class='nomeProduto'>${nomeProduto.textContent}<h1>
        <span class="preco">${precoProduto.textContent}</span>
        
        
        
        `
        // Your other code here
    });
}
