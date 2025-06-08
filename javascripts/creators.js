// Появление фотографии участника команды при наведении на фото
document.addEventListener('DOMContentLoaded', function() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        const img = block.querySelector('img');
        // Показ фотографии при наведении
        block.addEventListener('mouseenter', () => {
            img.style.opacity = '1';
            block.style.backgroundColor = 'transparent';
        });
        // Возврат белого фона
        block.addEventListener('mouseleave', () => {
            img.style.opacity = '0';
            block.style.backgroundColor = 'white';
        });
    });
});