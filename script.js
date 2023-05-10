function changeH1Text() {
    const h2 = document.querySelector('.thinker span');
    const texts  = ['hacker', 'creator', 'thinker', 'coder', 'innovator', 'collaborator', 'problem solver'];
    let index = 0;

    setTimeout(function() {
        setInterval(() => {
            h2.innerText = texts[index];
            h2.style.color = 'var(--color-orange';
            index = (index + 1) % texts.length;    
        }, 2000)
    }, 3500);

    
}
window.addEventListener('load', changeH1Text);



function nav() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    let content = document.querySelector('#main-container');
  
    const closeMenu = () => {
      nav.classList.remove('show');
      content.classList.remove('blurred');
    };
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('show');
      content.classList.toggle('blurred');
    });
  
    window.addEventListener('scroll', () => {
      const isMenuVisible = nav.classList.contains('show');
      const isMenuInViewport = nav.getBoundingClientRect().top >= 0 && nav.getBoundingClientRect().bottom <= window.innerHeight;
  
      if (isMenuVisible && !isMenuInViewport) {
        closeMenu();
      }
    });
}
document.addEventListener('DOMContentLoaded', nav);


const ufo = document.querySelector('.ufo');
ufo.addEventListener('touchstart', (event) => {
    event.preventDefault();
  });
  


document.querySelectorAll('.go').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
})


