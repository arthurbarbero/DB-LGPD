window.onload = async () => {
    if (!localStorage.getItem('user_id')) {
        window.location.href = '../../index.html'
    } else {
        let user_id = localStorage.getItem('user_id')

        await axios.post('http://ec2-52-67-163-45.sa-east-1.compute.amazonaws.com/account/getUser', { 'id': user_id }, { headers: { 'Access-Control-Allow-Origin':'*', 'Content-Type': 'application/json' }})
        .then(response => {

            response.data.account = JSON.parse(decrypt(response.data.account))
            response.data.address = JSON.parse(decrypt(response.data.address))

            let email = document.getElementById('email')
            let nome = document.getElementById('nome')
            let data_nascimento = document.getElementById('data-nascimento')
            let rua = document.getElementById('rua')
            let num = document.getElementById('num')
            let bairro = document.getElementById('bairro')
            let cep = document.getElementById('cep')
            let uf = document.getElementById('uf')
            let cidade = document.getElementById('cidade')
            
            email.value = response.data.account.email
            nome.value = `${response.data.account.first_name} ${response.data.account.last_name}`
            rua.value = response.data.address.street
            num.value = response.data.address.number
            bairro.value = response.data.address.neighbourhood
            cep.value = response.data.address.zip_code
            uf.value = response.data.address.state
            cidade.value = response.data.address.city
            data_nascimento.value = response.data.account.birth_dt
        })
        .catch(response => { 
            setToasted(false, 'Failed to retrieve data');
        })
    }
}

function logout() {
    if (localStorage.getItem('user_id')) {
        localStorage.removeItem('user_id')
        window.location.reload()
    }
}