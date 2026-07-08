// ============================================
// auth.js - منطق المصادقة المشترك بين جميع الصفحات
// ============================================

// بيانات المستخدمين
const users = {
    'user1': '12345678',
    'user2': '123456789'
};

// التحقق من حالة تسجيل الدخول
function isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
}

// الحصول على اسم المستخدم الحالي
function getCurrentUser() {
    return localStorage.getItem('currentUser');
}

// تسجيل الدخول
function doLogin(username, password) {
    if (users[username] && users[username] === password) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('currentUser', username);
        return true;
    }
    return false;
}

// تسجيل الخروج
function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('currentUser');
    window.location.href = '../pages/login.html';
}

// حماية الصفحة (تستخدم في الصفحات المحمية)
function protectPage() {
    if (!isLoggedIn()) {
        window.location.href = '../pages/login.html';
    }
}