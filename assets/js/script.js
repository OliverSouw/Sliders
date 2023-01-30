let slider = document.querySelector('.slider').clientHeight;
let totalSliders = document.querySelectorAll('.slider-item').length;
let sliderContainer = document.querySelector('.slider-container').style.width;
let sliderControls = document.querySelector('.slider-controls');

let currentSlide = 0;

sliderContainer = `calc(100vw * ${totalSliders})`;
sliderControls.style.height = `${slider}px`;

function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSliders - 1;
    }
    updateMargin();
}

function goNext() {
    currentSlide++;
    if(currentSlide > (totalSliders - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider-item').clientWidth;
    let sliderWidth = document.querySelector('.slider-item');
    let newMargin = (currentSlide * sliderItemWidth);

    sliderWidth.style.marginLeft = `-${newMargin}px`;
}