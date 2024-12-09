document.getElementById('speak-button').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    const warning = document.getElementById('warning');
    
    // Ограничение на длину текста
    if (textInput.length > 500) {
        warning.style.display = 'block'; // Показать предупреждение
        return; // Если текст слишком длинный, выходим
    } else {
        warning.style.display = 'none'; // Скрыть предупреждение
    }

    if (textInput.trim()) {
        const speech = new SpeechSynthesisUtterance(textInput);
        speech.lang = 'ru-RU';
        window.speechSynthesis.speak(speech);
    } else {
        alert("Пожалуйста, введите текст.");
    }
});
