window.onload = () => {
    if ( localStorage.getItem('user_id') ) {
        window.location.href = '../../index.html';
    }
}

async function login() {
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const data = encrypt(JSON.stringify({'email': email.value, 'password': password.value}));
    
    await axios.post('http://ec2-52-67-163-45.sa-east-1.compute.amazonaws.com/account/login', {'data': data}, {headers: { 'Access-Control-Allow-Origin':'*', 'Content-Type': 'application/json' }})
    .then(response => {
        localStorage.setItem('user_id', response.data.id);
        window.location.href = '../../index.html';
    })
    .catch(response => { 
        setToasted(false, 'Failed to do sign-in');
    })
}
