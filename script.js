document.addEventListener('DOMContentLoaded', function() {
    const quality = document.getElementById('quality');
    const cheap = document.getElementById('cheap');
    const fast = document.getElementById('fast');

    function updateSwitches() {
        // Если включены "Качественно" и "Дешево", отключаем "Быстро"
        if (quality.checked && cheap.checked) {
            fast.checked = false;
        }

        // Если включены "Качественно" и "Быстро", отключаем "Дешево"
        if (quality.checked && fast.checked) {
            cheap.checked = false;
        }

        // Если включены "Дешево" и "Быстро", отключаем "Качественно"
        if (cheap.checked && fast.checked) {
            quality.checked = false;
        }

        // Если все три включены, отключаем "Быстро"
        if (quality.checked && cheap.checked && fast.checked) {
            fast.checked = false;
        }
    }

    // Обработчики событий изменения состояния переключателей
    quality.addEventListener('change', updateSwitches);
    cheap.addEventListener('change', updateSwitches);
    fast.addEventListener('change', updateSwitches);
});