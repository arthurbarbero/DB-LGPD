window.onload = () => {
    if (!localStorage.getItem('user_id')) {
        window.location.href = 'homepage.html'
    }
}

function logout() {
    if (localStorage.getItem('user_id')) {
        localStorage.removeItem('user_id')
        window.location.reload()
    }
}