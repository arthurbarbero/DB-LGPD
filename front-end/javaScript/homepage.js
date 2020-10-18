window.onload = () => {
    if ( localStorage.getItem('user_id') ) {
        let navMenu = document.getElementById('nav-menu')
        
        let signup = document.getElementById('btn-cadastre-se')
        let login = document.getElementById('btn-login')

        navMenu.removeChild(signup)
        navMenu.removeChild(login)
        
        let meuPerfil = document.createElement('button')
        meuPerfil.setAttribute("id", "btn-login" )
        meuPerfil.setAttribute("type", "input" )
        meuPerfil.setAttribute("onclick", "window.location.href = '/front-end/template/profile_page.html'" )

        let img = document.createElement('img')
        img.setAttribute("class", "icon-header")
        img.setAttribute("id", "icon-perfil")
        img.setAttribute("src", "/front-end/icons/perfil.svg")
        img.setAttribute("alt", "perfil")

        let text = document.createElement('span')
        text.innerText = "Meu Perfil"

        meuPerfil.appendChild(img)
        meuPerfil.appendChild(text)

        navMenu.appendChild(meuPerfil)

        let logout = document.createElement('button')
        logout.setAttribute('id','btn-cadastre-se')
        logout.setAttribute('type','input')
        logout.setAttribute('onclick','logout()')
        logout.innerText = 'Logout'

        navMenu.appendChild(logout)
    }
}

function logout() {
    if (localStorage.getItem('user_id')) {
        localStorage.removeItem('user_id')
        window.location.reload()
    }
}