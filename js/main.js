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

new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true,
})

new Swiper('.promotion .swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
    },
    loop: true,
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        promotionEl.classList.add('hide')
    }else{
        promotionEl.classList.remove('hide')
    }
})