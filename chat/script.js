document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо стандартну відправку форми

    const login = document.getElementById('login-input').value;
    const output = document.getElementById('output');

    if (login.length < 8) {
        output.style.color = "#ff7b72"; // Червоний
        output.innerText = "Помилка: Логін занадто короткий!";
    } else {
        output.style.color = "#3fb950"; // Зелений
        output.innerText = "Авторизація успішна...";
    }


});

