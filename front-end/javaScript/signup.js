const BASE_URL = 'http://127.0.0.1:5000'
const idInputs = ['nome', 'sobrenome', 'email', 'senha', 'ddd', 'cel', 'nasc', 'cpf', 'rua', 'bairro', 'cep', 'numeros', 'estado', 'cidade', 'complemento'];

function setToasted(status) {
    const elemento = document.getElementById('toasted');
    if(status) {
        elemento.className = 'success';
        elemento.insertAdjacentHTML('afterbegin', 'Register User Success');
    } else {
        elemento.className = 'error';
        elemento.insertAdjacentHTML('afterbegin', 'Failed to register use');
    }
    elemento.style.display = 'flex';

    setTimeout(function() {
        elemento.style.display = 'none'
        elemento.innerHTML = '<img src="/front-end/icons/times-solid.svg" >' }, 3000);
        if(status) window.location.href = 'homepage.html';

}

async function sendData(jsonData) {
    return axios.post(`${BASE_URL}/account/register`, { data: jsonData }, {headers: { 'Access-Control-Allow-Origin':'*', 'Content-Type': 'application/json' }})
    .then(resp => {
        // localStorage.setItem('user', resp.data.id)
        setToasted(true);
    })
    .catch(err => {
        setToasted(false);
    })
}

function getInputsById() {
    let cliente = new Object();

    idInputs.forEach(idElemento => {
        cliente[idElemento] = document.getElementById(idElemento).value;
    });

    cliente = encrypt(JSON.stringify(
        {
            first_name: cliente.nome,
            last_name: cliente.sobrenome,
            email: cliente.email,
            password: cliente.senha,
            birth_dt: cliente.nasc,
            address : {
                street: cliente.rua,
                neighbourhood: cliente.bairro,
                number: cliente.numeros,
                zip_code: cliente.cep,
                city: cliente.cidade,
                state: cliente.estado,
            }
        }
    ));
    return cliente;
}
async function saveData() {
    let cliente = getInputsById();
    sendData(cliente);
}
