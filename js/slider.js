document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider-container");

    sliders.forEach(sliderContainer => {
        const slider = sliderContainer.querySelector(".slider");
        const sliderValue = sliderContainer.querySelector(".slider-value");
        function updateSliderValue() {
            sliderValue.textContent = slider.value;
        }
        slider.addEventListener("input", updateSliderValue);
        updateSliderValue();
    });
});
