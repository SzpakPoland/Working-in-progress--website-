const enBtn = document.getElementById('language-toggle2en');
if (enBtn) {
    enBtn.onclick = function() {
        window.location.href = 'en/';
    };
}

const plBtn = document.getElementById('language-toggle2pl');
if (plBtn) {
    plBtn.onclick = function() {
        window.location.href = '../';
    };
}