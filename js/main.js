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