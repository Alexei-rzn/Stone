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
$sql = "SELECT id, name, email FROM users";
$result = $conn->query($sql);

// Проверяем, есть ли результаты и выводим их
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Email: " . $row["email"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
