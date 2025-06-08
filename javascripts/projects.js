// Выдвижная папка для avata privat club
document.addEventListener('DOMContentLoaded', function() {
const textElement = document.querySelector('.case-1-text');
const wrapper = document.querySelector('.case-1-wrapper');
const projectsTitle = document.querySelector('.projects_title');
const avataContent = document.querySelector('.avata-content');
if (textElement && wrapper && projectsTitle && avataContent) {
    avataContent.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
    // Добавляем обработчик клика
    textElement.addEventListener('click', function() {
        if (wrapper.style.transform.includes('-54vh')) {
            // Опускание папки
            wrapper.style.transform = 'translateY(0)';
            wrapper.style.filter = '';
            projectsTitle.style.opacity = '100%';
            avataContent.style.opacity = '0';
            avataContent.style.visibility = 'hidden';
        } else {
            // Поднятие папки
            wrapper.style.transform = 'translateY(-54vh)';
            wrapper.style.filter = 'contrast(0.92)';
            projectsTitle.style.opacity = '10%';
            avataContent.style.opacity = '1';
            avataContent.style.visibility = 'visible';
            }
        });
    }
});