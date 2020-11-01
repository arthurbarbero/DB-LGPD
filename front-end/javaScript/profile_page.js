const BASE_URL = 'http://ec2-52-67-163-45.sa-east-1.compute.amazonaws.com'

async function getInputs() {
    let email = document.getElementById('email')
    let nome = document.getElementById('nome')
    let data_nascimento = document.getElementById('data-nascimento')
    let rua = document.getElementById('rua')
    let num = document.getElementById('num')
    let bairro = document.getElementById('bairro')
    let cep = document.getElementById('cep')
    let uf = document.getElementById('uf')
    let cidade = document.getElementById('cidade')

    return{
        email,
        nome,
        data_nascimento,
        rua,
        num,
        bairro,
        cep,
        uf,
        cidade
    }
}

function loadPage() {
    let user_id = localStorage.getItem('user_id')

    axios.post(`${BASE_URL}/account/getUser`, { 'id': user_id }, { headers: { 'Access-Control-Allow-Origin':'*', 'Content-Type': 'application/json' }})
    .then(async response => {

        response.data.account = JSON.parse(decrypt(response.data.account))
        response.data.address = JSON.parse(decrypt(response.data.address))

        let obj = await getInputs()
        
        obj.email.value = response.data.account.email
        obj.nome.value = `${response.data.account.first_name} ${response.data.account.last_name}`
        obj.rua.value = response.data.address.street
        obj.num.value = response.data.address.number
        obj.bairro.value = response.data.address.neighbourhood
        obj.cep.value = response.data.address.zip_code
        obj.uf.value = response.data.address.state
        obj.cidade.value = response.data.address.city
        obj.data_nascimento.value = response.data.account.birth_dt
    })
    .catch(response => { 
        setToasted(false, 'Failed to retrieve data');
    })
}

window.onload = async () => {
    if (!localStorage.getItem('user_id')) {
        window.location.href = '../../index.html'
    } else {
        loadPage()
    }
}

function logout() {
    if (localStorage.getItem('user_id')) {
        localStorage.removeItem('user_id')
        window.location.reload()
    }
}

async function deleteAccount() {
    Swal.fire({
        title: 'Você tem certeza?',
        text: 'Após deletar sua conta, não será possível reverter o processo, todos os dados serão apagados!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, deletar!',
        cancelButtonText: 'Não, cancelar!'
      }).then(async (result) => {
            if (result.value) {
                let user_id = await localStorage.getItem('user_id')

                axios.post(`${BASE_URL}/account/delUser`, { 'id': user_id }, { headers: { 'Access-Control-Allow-Origin':'*', 'Content-Type': 'application/json' }})                
                .then((response)=>{
                    if(response.status === 200) {
                        logout()
                        window.location.href = '../../index.html'

                    } else {
                        Swal.fire({
                            title: 'ERROR',
                            text: 'Ocorreu um erro, tente novamente',
                            icon: 'error',
                            showCancelButton: true,
                            cancelButtonText: 'Ok :(',
                            showConfirmButton: false
                        })
                    }
                }).catch((error)=> {
                    Swal.fire({
                        title: 'ERROR',
                        text: 'Ocorreu um erro, tente novamente',
                        icon: 'error',
                        showCancelButton: true,
                        cancelButtonText: 'Ok :(',
                        showConfirmButton: false
                    })
                })
            }
      })
}

async function cancelEdit() {
    loadPage()

    let obj = await getInputs()

    Object.keys(obj).forEach((item) => {
        obj[`${item}`].setAttribute("disabled","disabled")

    })

    let edit = document.getElementById("btn-edit")
    let delet = document.getElementById("btn-delete")

    edit.value = "Editar"
    delet.value = "Deletar Conta"

    edit.setAttribute("onclick", "editAccount()")
    delet.setAttribute("onclick", "deleteAccount()")

}

async function saveEdit() {
    let obj = await getInputs()
    let pwd = document.getElementById("senha")
    let userId = localStorage.getItem("user_id")

    var sobrenome = ( ()=> {
        let texto = ""
        Object.keys(obj).forEach(key => {
            if (key === "nome"){
                let aux = obj[`${key}`].value.split(" ")

                aux = aux.map((item, i)=>{
                    if (i !== 0) {
                        texto = `${texto} ${item}`
                    }
                })
            }
        })

        return texto
    })() 

    jsonData = encrypt(JSON.stringify(
        {
            id: userId,
            first_name: obj.nome.value.split(" ")[0],
            last_name: sobrenome,
            email: obj.email.value,
            password: pwd.value,
            birth_dt: obj.data_nascimento.value,
            address : {
                street: obj.rua.value,
                neighbourhood: obj.bairro.value,
                number: obj.num.value,
                zip_code: obj.cep.value,
                city: obj.cidade.value,
                state: obj.uf.value
            }
        }
    ));

    axios.put(`${BASE_URL}/account/setUser`, { data: jsonData }, {headers: { 'Access-Control-Allow-Origin':'*', 'Content-Type': 'application/json' }})
    .then(resp => {
        setToasted(true, 'Edit User Success');
        cancelEdit()

    })
    .catch(err => {
        setToasted(false, 'Failed to register user');
        
    })

}

async function editAccount() {
    let obj = await getInputs()

    Object.keys(obj).forEach((item) => {
        obj[`${item}`].removeAttribute("disabled")

    })

    let edit = document.getElementById("btn-edit")
    let delet = document.getElementById("btn-delete")

    edit.value = "Cancelar"
    delet.value = "Salvar"

    edit.setAttribute("onclick", "cancelEdit()")
    delet.setAttribute("onclick", "saveEdit()")

}

