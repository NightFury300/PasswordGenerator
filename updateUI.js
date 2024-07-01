const slider = document.querySelector("#slider");
const sliderText = document.querySelector("#sliderVal");
slider.addEventListener('input',() => {
sliderText.innerHTML = slider.value;
})