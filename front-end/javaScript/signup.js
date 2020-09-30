const BASE_URL = 'http://127.0.0.1:5000'
const idInputs = ['nome', 'sobrenome', 'email', 'senha', 'ddd', 'cel', 'nasc', 'cpf', 'rua', 'bairro', 'cep', 'numeros', 'estado', 'cidade', 'complemento'];

let cliente = new Object();

async function sendData(jsonData) {
    return axios.post(`${BASE_URL}/account/register`, { data: jsonData }, {headers: { 'Access-Control-Allow-Origin':'*', 'Content-Type': 'application/json' }})
    .then(resp => {
        console.log(resp);
    })
    .catch(err => {console.log(err)})
}
function getInputsById() {
    idInputs.forEach(idElemento => {
        cliente[idElemento] = document.getElementById(idElemento).value;
    });
}
function saveData() {
    getInputsById();
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
    sendData(cliente);
}
