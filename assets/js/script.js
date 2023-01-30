let totalSliders = document.querySelectorAll('.slider-item').length;
let sliderContainer = document.querySelector('.slider-container').style.width;
let sliderControlsH = document.querySelector('.slider-controls');
let slider = document.querySelector('.slider').clientHeight;
let currentSlide = 0;

sliderContainer = `calc(100vw * ${totalSliders})`;
sliderControlsH.style.height = `${slider}px`;

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
    let sliderWidth = document.querySelector('.slider-item');
    let maxWidth = document.body.clientWidth;
    let newMargin = (currentSlide * maxWidth);

    console.log(maxWidth)
    console.log(newMargin)
    console.log(sliderWidth)

    sliderWidth.style.marginLeft = `-${newMargin}px`;
}