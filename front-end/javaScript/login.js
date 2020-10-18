window.onload = () => {
    if ( localStorage.getItem('user_id') ) {
        window.location.href = 'homepage.html';
    }
}

async function login() {
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const data = encrypt(JSON.stringify({'email': email.value, 'password': password.value}));
    
    await axios.post('http://127.0.0.1:5000/account/login', {'data': data}, {headers: { 'Access-Control-Allow-Origin':'*', 'Content-Type': 'application/json' }})
    .then(response => {
        console.log(response.data)
        localStorage.setItem('user_id', response.data.id);
        window.location.href = 'homepage.html';
    })
    .catch(response => { 
        console.log(response)
        setToasted(false, 'Failed to do sign-in');
    })
}
