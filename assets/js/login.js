// ============================================
// login.js - منطق صفحة تسجيل الدخول
// ============================================

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    if (doLogin(username, password)) {
        window.location.href = 'dashboard.html';
    } else {
        errorMsg.style.display = 'block';
        setTimeout(() => { errorMsg.style.display = 'none'; }, 3000);
    }
});