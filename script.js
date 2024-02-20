function navigateTo(menuId) {
    document.querySelectorAll('.menu').forEach(menu => {
        menu.classList.add('hidden');
    });
    document.getElementById(menuId).classList.remove('hidden');
}

function goBack() {
    document.querySelectorAll('.menu').forEach(menu => {
        menu.classList.add('hidden');
    });
    document.getElementById('main-menu').classList.remove('hidden');
}
