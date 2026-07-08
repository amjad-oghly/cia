// ============================================
// home.js - منطق الصفحة الرئيسية
// ============================================

// حماية الصفحة - إعادة التوجيه إذا لم يكن مسجلاً
protectPage();

// عرض اسم المستخدم
const username = getCurrentUser();
document.getElementById('welcomeUser').textContent = 'مرحباً، ' + username;