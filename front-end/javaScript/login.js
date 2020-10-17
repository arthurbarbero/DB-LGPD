window.onload = () => {
    const idUser = localStorage.setItem('user_id', response.data.id);
    if(idUser) {
        window.location.href = 'homepage.html';
    }
}

async function login() {
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const data = encrypt(JSON.stringify({'email': email, 'password': password}));
    
    await axios.post('http://127.0.0.1:5000/account/login', data)
    .then(response => {
        localStorage.setItem('user_id', response.data.id);
        window.location.href = 'homepage.html';
    })
    .catch(response => { 
        setToasted(false, 'Failed to do sign-in');
    })
}
