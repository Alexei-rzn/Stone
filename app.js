document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const inputData = document.getElementById('inputData').value;
    
    // Обрабатываем введенные данные (в этом случае просто выводим их)
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<strong>Вы ввели:</strong> ${inputData}`;
    
    // Очищаем поле ввода после отправки
    document.getElementById('inputData').value = '';
});
