export default class Slider {
    constructor() {
        this.slideShow = document.querySelectorAll('.categories__container--flex');
        this.buttons = document.querySelectorAll('.categories__button');
        this.bindEvents();
    }
    bindEvents() {
        this.slideShow.forEach(set => set.addEventListener('click', this.changeSlides));
        this.buttons.forEach(button => button.addEventListener('click', this.changeSlides));
    }
    changeSlides() {
        const slide = document.querySelector('.category');
        const slidesContainer = document.querySelector('.gallery__container');
        const currentButton = document.querySelector('.categories__button--act');
        const newButton = document.querySelector(`.categories__button[data-slide="${selectedSlide}"]`);

        const selectedSlide = this.dataset.slide;
        const slideWidth = slide.offsetWidth;
        const slideMargin = parseInt(window.getComputedStyle(slide).marginRight);

        let nextSlide = 0;

        function getDesktopView() {
            if (selectedSlide == 1) {
                nextSlide = `${(slideWidth / 2) + 10}px`;
            } else if (selectedSlide == 2){
                nextSlide = `-${slideWidth * 2 + (slideWidth / 2) + (slideMargin * 2) + 10}px`;
            } else {
                nextSlide = `-${slideWidth * 5 + (slideWidth / 2) + (slideMargin * 5) + 10}px`;
            }

            return nextSlide;
        }

        function getMobileView() {
            if (selectedSlide == 1) {
                nextSlide = `30px`;
            } else if (selectedSlide == 2){
                nextSlide = `-${(slideWidth + slideMargin / 2.5) - 30}px`;
            } else {
                nextSlide = `-${(slideWidth * 2) + (slideMargin * 0.5)}px`;
            }

            return nextSlide;
        }

        nextSlide = window.innerWidth < 1000 ? getMobileView() : getDesktopView();

        slidesContainer.style.transform = `translate(${nextSlide})`;
        currentButton.classList.remove('categories__button--act');
        newButton.classList.add('categories__button--act');

    }
}
