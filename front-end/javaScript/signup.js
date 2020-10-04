const BASE_URL = 'http://54.94.78.88'
const idInputs = ['nome', 'sobrenome', 'email', 'senha', 'ddd', 'cel', 'nasc', 'cpf', 'rua', 'bairro', 'cep', 'numeros', 'estado', 'cidade', 'complemento'];


async function sendData(jsonData) {
    return axios.post(`${BASE_URL}/account/register`, { data: jsonData }, {headers: { 'Access-Control-Allow-Origin':'*', 'Content-Type': 'application/json' }})
    .then(resp => {
        setToasted(true, 'Register User Success');
        localStorage.setItem("user_id", resp.data.id)

        setTimeout(function() {
            window.location.href = '/index.html' }, 3500);
    })
    .catch(err => {
        setToasted(false, 'Failed to register use');
        
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
