// Login functionality
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'abeille' && password === '443413') {
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('login-error').classList.remove('hidden');
    }
});

