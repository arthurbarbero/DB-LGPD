
const elementoHTML = "<div id='toasted-container' style='position: fixed; display: flex; justify-content: center; width: 100%; top: 0px;'> <div id='toasted'><img src='/front-end/icons/times-solid.svg' style='width:10px'> </div> </div>";

const styleToasted = "display: none; width: 320px; height: 40px; align-items: center; justify-content: space-between; padding-right: 10px; padding-left: 10px; border-radius: 6px;  color: #fff;  font-size: 12pt; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; font-weight: bolder; margin-top: 20px; transition: all 0.4s ease-in;"

function setCssStyle(status) {
    let elemento = document.getElementById('toasted');
    if(status === 'success') {
        elemento.setAttribute('style', styleToasted + 'background-color: rgb(110, 201, 110); border-left: 10px solid green;');
    } else if (status === 'error') {
        elemento.setAttribute('style', styleToasted + 'background-color: rgb(241, 125, 125); border-left: 10px solid red;')
    }
}

function addHTML() {
    const toastedElem = document.getElementById('toasted-container')
    if(!toastedElem) {
        let body = document.querySelector('body');
        body.insertAdjacentHTML('afterend', elementoHTML);
    }   
}


function setToasted(status, msgOnToasted) {
    addHTML()
    const elemento = document.getElementById('toasted');
    if(status) {
        setCssStyle('success');
        elemento.insertAdjacentHTML('afterbegin', msgOnToasted);
    } else {
        setCssStyle('error');
        elemento.insertAdjacentHTML('afterbegin', msgOnToasted);
    }
    elemento.style.display = 'flex';

    setTimeout(function() {
        document.getElementById('toasted-container').remove();
    }, 3000);
        

}