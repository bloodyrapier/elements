document.addEventListener('DOMContentLoaded', function() {
  // Первая карусель
  const carousel1 = {
    element: document.getElementById('carousel1'),
    counter: document.querySelector('#carousel1 + .carousel-counter')
  };
  initCarousel(carousel1);
  
  // Вторая карусель
  const carousel2 = {
    element: document.getElementById('carousel2'),
    counter: document.querySelector('#carousel2 + .carousel-counter')
  };
  initCarousel(carousel2);
  
  // Функция для инициализации карусели
  function initCarousel(carousel) {
    const images = carousel.element.querySelectorAll('.carousel-slide img');
    const prevBtn = carousel.element.querySelector('.prev');
    const nextBtn = carousel.element.querySelector('.next');
    
    let currentIndex = 0;
    const totalImages = images.length;
    
    function updateCarousel() {
      images.forEach((img, index) => {
        img.classList.toggle('active', index === currentIndex);
      });
      carousel.counter.textContent = `${currentIndex + 1}/${totalImages}`;
    }
    
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateCarousel();
    });
    
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel();
    });
    updateCarousel();
  }
});