document.getElementById('speak-button').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    
    if (textInput.trim() === "") {
        alert("Пожалуйста, введите текст для озвучивания.");
        return;
    }
    
    const speech = new SpeechSynthesisUtterance(textInput);
    speech.lang = 'ru-RU'; // Установите язык на русский
    speech.volume = 1; // Громкость от 0 до 1
    speech.rate = 1; // Скорость речи
    speech.pitch = 1; // Тональность

    window.speechSynthesis.speak(speech);
});
