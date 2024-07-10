let aboutAcrd = document.querySelector('.about__accordion'),
    aboutAcrdBtn = document.querySelector('.about__accordion_btn');

aboutAcrdBtn.onclick = () => {
    aboutAcrd.classList.toggle('active');
}

const items = document.querySelectorAll('.main_accordion');

items.forEach((item) => {
    const header = item.querySelector('.main_accordion__btn');
    const content = item.querySelector('.main_accordion__body');

    header.addEventListener('click', () => {
        item.classList.toggle('active');
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
    });
});

let aboutUsSwp = new Swiper('.about-us .swiper', {
    slidesPerView: 1,
    spaceBetween: 29,
    loop: true,
    breakpoints: {
        992: {
            slidesPerView: 3,
        }
    },
    pagination: {
        el: '.about-us .swiper_pagination',
        clickable: true,
    }
})

let treanings = document.querySelectorAll('.treaning');

treanings.forEach(treaning => {
    let swp = new Swiper(treaning.querySelector('.swiper'), {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: treaning.querySelector('.swiper_pagination'),
            clickable: true,
        },
        navigation: {
            nextEl: treaning.querySelector('.swp_next_btn'),
            prevEl: treaning.querySelector('.swp_prev_btn'),
        }
    })
})

let links = document.querySelectorAll('.mobile__menu ul li a');

links.forEach(el => {
    let id = el.getAttribute('data-id');
    el.onclick = () => {
        document.querySelector('.mobile__menu').classList.remove('show');
        document.querySelector('.mobile__menu').classList.add('hide');
        document.querySelector('.offcanvas-backdrop').classList.remove('show');
        document.querySelector('.offcanvas-backdrop').classList.add('hide');
    }
})