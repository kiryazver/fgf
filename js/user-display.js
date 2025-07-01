document.addEventListener('DOMContentLoaded', function() {
    function displayCurrentUser() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const userInfoContainer = document.getElementById('user-info');
        
        if (currentUser && userInfoContainer) {
            userInfoContainer.innerHTML = `
                <img src="${currentUser.avatar}" alt="${currentUser.name}" class="user-avatar">
                <span class="user-name">${currentUser.name}</span>
            `;
        }
    }
    
    // Вызываем при загрузке страницы
    displayCurrentUser();
    
    // Можно также вызвать после успешной авторизации
});