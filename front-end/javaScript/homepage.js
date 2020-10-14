window.onload = () => {
    if (localStorage.getItem('user_id')) {
        navMenu = document.getElementsByClassName('nav-menu')[0].children

        navMenu[0].innerText = 'Meu perfil'
        navMenu[1].innerText = 'Logout'

        navMenu[0].setAttribute('onclick', "window.location.href='profile_page.html'")
        navMenu[1].setAttribute('onclick', "logout()")
    }
}

function logout() {
    if (localStorage.getItem('user_id')) {
        localStorage.removeItem('user_id')
        window.location.reload()
    }
}