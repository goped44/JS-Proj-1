const Slide = document.querySelector('.slide');
const Images = document.querySelectorAll('.slide img');

//Buttons

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter

let counter = 1;
const size = Images[0].clientWidth;

Slide.style.transform = 'translateX(' + (-size * counter) +'px)';

//Button Listeners

nextBtn.addEventListener('click', ()=> {
    if (counter >= Images.length -1) return;
    Slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    Slide.style.transform = 'translateX(' + (-size * counter) +'px)';
});

prevBtn.addEventListener('click', ()=> {
    if (counter <= 0) return;
    Slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    Slide.style.transform = 'translateX(' + (-size * counter) +'px)';
});

Slide.addEventListener('transitionend', () => {
    if (Images[counter].id === 'lastClone') {
        Slide.style.transition = "none";
        counter = Images.length -2;
        Slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (Images[counter].id === 'firstClone') {
        Slide.style.transition = "none";
        counter = Images.length - counter;
        Slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});