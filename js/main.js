const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
})

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(() =>{
    if(window.scrollY > 500) {
        gsap.to(badgeEl, .6, {
            display: 'none',
            opacity: 0
        })
    }else {
        gsap.to(badgeEl, .6, {
            display: 'block',
            opacity: 1
        })
    }
}, 300))

const fadeEls = document.querySelectorAll('.visual .fade-in')

fadeEls.forEach((fadeEl, index)=> {
    gsap.to(fadeEl, 1, {
        delay: .7 * (index+1),
        opacity: 1
    })
})