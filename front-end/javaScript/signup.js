const BASE_URL = 'http://ec2-52-67-163-45.sa-east-1.compute.amazonaws.com'
const idInputs = ['nome', 'sobrenome', 'email', 'senha', 'ddd', 'cel', 'nasc', 'cpf', 'rua', 'bairro', 'cep', 'numeros', 'estado', 'cidade', 'complemento'];


async function sendData(jsonData) {
    return axios.post(`${BASE_URL}/account/register`, { data: jsonData }, {headers: { 'Access-Control-Allow-Origin':'*', 'Content-Type': 'application/json' }})
    .then(resp => {
        setToasted(true, 'Register User Success');
        localStorage.setItem("user_id", resp.data.id)

        setTimeout(function() {
            window.location.href = '../../index.html' }, 3500);
    })
    .catch(err => {
        setToasted(false, 'Failed to register use');
        
    })
}

function getInputsById() {
    var cliente = new Object();

    let aux = []
    idInputs.forEach(idElemento => {
        document.getElementById(idElemento).classList.remove("span")
        if (document.getElementById(idElemento).value != ""){
            cliente[idElemento] = document.getElementById(idElemento).value;
        }else{
            document.getElementById(idElemento).classList.add("span")
            aux.push(idElemento)
        }
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
    if (aux.length <= 0 ){

        return cliente;

    }else{

        setToasted(false, 'Preencha todos os campos corretamente !');
    }
}

async function saveData() {
    let cliente = getInputsById();

    if (cliente != null){
        sendData(cliente);
    }
}

async function onFocusLoose(element) {
    let hasclass = element.classList.value
    
    if (element.value && hasclass.includes("span")) {
        element.classList.remove('span');
    }
};