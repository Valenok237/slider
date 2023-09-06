const sliderNext = document.querySelector('.next');
const sliderPrev = document.querySelector('.prev');
const circles = document.querySelectorAll('.slider-controler__circle');
const titles = document.querySelectorAll('.title');
const sliderLine = document.querySelector('.slider-line');
const sliderLinePic = document.querySelector('.slider-line__pic');

let offset = 0;
let index = 0;

const activeTitle = (n) => {
    for (let title of titles) {
        title.classList.remove('active');
    };
    titles[n].classList.add('active');
};

const activeCircle = (n) => {
    for (let circle of circles) {
        circle.classList.remove('active');
    };
    circles[n].classList.add('active');
};

const activeSlide = (ind) =>{
    activeTitle(ind);
    activeCircle(ind);
};

circles.forEach((item, indexCircle) => {
    item.addEventListener('click', () => {
        index = indexCircle;
        activeSlide(index);
        if (index == 0) {
            sliderLine.style.left = 0 + 'px';
        } else if (index == 1) {
            sliderLine.style.left = -679 + 'px';
        } else {
            sliderLine.style.left = -1358 + 'px';
        }
    });
});

titles.forEach((item, indexTitle) => {
    item.addEventListener('click', () => {
        index = indexTitle;
        activeSlide(index);
        if (index == 0) {
            sliderLine.style.left = 0 + 'px';
        } else if (index == 1) {
            sliderLine.style.left = -679 + 'px';
        } else {
            sliderLine.style.left = -1358 + 'px';
        }
    });
});

sliderNext.addEventListener('click', () => {
    offset = offset + 679;
    if (offset > 0 && offset <= 1358) {
        index++;
        activeSlide(index);
    }
    if (offset > 1358) {
        index = 0;
        activeSlide(index);
        offset = 0
    };
    sliderLine.style.left = -offset + 'px';
});

sliderPrev.addEventListener('click', () => {
    offset = offset - 679;
    if (offset < 1358 && offset >= 0) {
        index--;
        activeSlide(index);
    }
    if (offset < 0) {
        offset = 1358;
        index = circles.length - 1;
        activeSlide(index);
    };
    sliderLine.style.left = -offset + 'px';
});