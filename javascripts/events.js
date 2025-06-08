document.addEventListener("DOMContentLoaded", function() {
// Функция для перестановки элементов при клике на .order
const orderBlock = document.querySelector('.order');
if (orderBlock) {
    let isSorted = false;
    orderBlock.addEventListener('click', function() {
        if (isSorted) return;
        const newOrder = [5, 4, 2, 3, 1, 8, 7, 6, 9];
        const parent = document.querySelector('.event-wrapper').parentNode;
        const elements = Array.from(document.querySelectorAll('.event-wrapper'));
        newOrder.forEach((newIndex, position) => {
            const element = elements[newIndex - 1];
            parent.appendChild(element);
        });
        isSorted = true;
    });
}
// Функция для переключения версий постеров
const clickablePosters = document.querySelectorAll(".clickable-poster");
if (clickablePosters.length > 0) {
    clickablePosters.forEach(img => {
        img.addEventListener("click", function() {
            // Смена версии картинки на цветную
            const currentSrc = this.src;
            const originalSrc = this.dataset.original;
            const alternateSrc = this.dataset.alternate;
            
            this.src = currentSrc.includes(originalSrc) 
                ? alternateSrc 
                : originalSrc;
            // Увеличение
            this.classList.toggle("large");
        });
    })};
});