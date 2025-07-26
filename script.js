//A inteção era fazer apenas em HTML e CSS, mas realmente não sei como fazer isso sem o JS
window.addEventListener('scroll', () => {
    const intro = document.querySelector('.navbar');

    if(window.scrollY > 20) intro.classList.remove('hidden');
})