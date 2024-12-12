<?php
// Настройки подключения к базе данных
$servername = "localhost";
$username = "test";
$password = "1234567890Test";
$dbname = "metro";

// Создаем подключение
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверяем подключение
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Выполняем SQL-запрос
$sql = "SELECT ШК 1, ШК 2, ШК 3";
$result = $conn->query($sql);

// Проверяем, есть ли результаты и выводим их
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "ШК 1: " . $row["ШК 1"]. " - ШК 2: " . $row["ШК 2"]. " - ШК 3: " . $row["ШК 3"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
