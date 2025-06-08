document.addEventListener('DOMContentLoaded', function() {
   // Названия товаров под карточками для карусели моб. версии
  const itemNames = [
    "(Футболка женская)", "(Шопер)", "(Термос)", "(Чай)", "(Ежедневник)",
    "(Брошюра)", "(Стикеры)", "(Флаг)", "(Постер)", "(Футболка мужская)",
    "(Футболка женская)", "(Шопер)", "(Термос)", "(Чай)", "(Ежедневник)",
    "(Брошюра)", "(Стикеры)", "(Флаг)", "(Постер)", "(Футболка мужская)",
    "(Футболка женская)", "(Шопер)", "(Термос)", "(Чай)", "(Ежедневник)",
    "(Брошюра)", "(Стикеры)", "(Флаг)", "(Постер)", "(Футболка мужская)"
  ];
  // Карусель с товарами для мобильной версии
  document.querySelectorAll('.gallery-shop-carousel').forEach(shopCarousel => {
    let shopCounter = shopCarousel.nextElementSibling;
    let itemNameElement = null;
    while (shopCounter && !shopCounter.classList.contains('counter') && !shopCounter.classList.contains('counter_mobile')) {
      if (shopCounter.classList.contains('item_name')) {
        itemNameElement = shopCounter;
      }
      shopCounter = shopCounter.nextElementSibling;
    }
    const shopItems = shopCarousel.querySelectorAll('.shop-carousel-slide img');
    const prev = shopCarousel.querySelector('.prev');
    const next = shopCarousel.querySelector('.next');
    const currentPage = shopCounter ? shopCounter.querySelector('.current-page, .current_page') : null;
    let shopCurrentIndex = 0;
    const totalShopItems = shopItems.length;

    function updateShopCarousel() {
      shopItems.forEach((item, index) => {
        item.classList.toggle('active', index === shopCurrentIndex);
      });
      if (currentPage) {
        currentPage.textContent = (shopCurrentIndex + 1).toString().padStart(2, '0');
      }
      if (itemNameElement) {
        itemNameElement.textContent = itemNames[shopCurrentIndex] || '';
      }
    }
    if (prev) {
      prev.addEventListener('click', () => {
        shopCurrentIndex = (shopCurrentIndex - 1 + totalShopItems) % totalShopItems;
        updateShopCarousel();
      });
    }
    
    if (next) {
      next.addEventListener('click', () => {
        shopCurrentIndex = (shopCurrentIndex + 1) % totalShopItems;
        updateShopCarousel();
      });
    }
    
    updateShopCarousel();
  });

  // Карусель со свайпом для десктопа
  const carouselWrapper = document.querySelector('.item-carousel-wrapper');
  if (carouselWrapper) {
    const carousels = document.querySelectorAll('.item-carousel');
    const currentPageElement = document.querySelector('.counter .current-page, .counter .current_page');
    let currentIndex = 0;
    let startX;

    function showCurrentSlide() {
      carousels.forEach((carousel, index) => {
        carousel.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
      });
    }
    function updateCounter() {
      if (currentPageElement) {
        currentPageElement.textContent = (currentIndex + 1).toString().padStart(2, '0');
      }
    }
    function goToSlide(index) {
      if (index >= 0 && index < carousels.length) {
        currentIndex = index;
        showCurrentSlide();
        updateCounter();
      }
    }
    function handleSwipe(endX) {
      const threshold = 25;
      const diff = startX - endX;
      
      if (diff > threshold && currentIndex < carousels.length - 1) {
        goToSlide(currentIndex + 1);
      } else if (diff < -threshold && currentIndex > 0) {
        goToSlide(currentIndex - 1);
      }
    }
    carouselWrapper.addEventListener('mousedown', (e) => {
      startX = e.clientX;
      carouselWrapper.classList.remove('animated');
    });
    carouselWrapper.addEventListener('mouseup', (e) => {
      handleSwipe(e.clientX);
      carouselWrapper.classList.add('animated');
    });
    
    carouselWrapper.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      carouselWrapper.classList.remove('animated');
    });
    
    carouselWrapper.addEventListener('touchend', (e) => {
      handleSwipe(e.changedTouches[0].clientX);
      carouselWrapper.classList.add('animated');
    });
    updateCounter();
    showCurrentSlide();
    setTimeout(() => carouselWrapper.classList.add('animated'), 100);
  }
});