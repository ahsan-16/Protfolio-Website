const skills = document.querySelector('.nav-links')

const section = document.querySelector('.skill-section')

const contact = document.querySelector('.contact-button')

const info = document.querySelector('.footer-container')


skills.addEventListener('click', function(e){
    e.preventDefault();
    section.scrollIntoView({behavior: "smooth"})
})

contact.addEventListener('click', function(){
    info.scrollIntoView({behavior: 'smooth'});
})

const about = document.querySelector('.about-1')
const header = document.querySelector('.header')

about.addEventListener('click', function(){
    header.scrollIntoView({behavior: "smooth"});
})