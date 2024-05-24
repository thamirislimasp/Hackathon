// Interação Modal-Login-Cadastro
// Get the modal
var modalLogin = document.getElementById('id01');
var modalCad = document.getElementById('id02');
function abreFechaCad(){
    modalLogin.style.display = "none";
    modalCad.style.display = "block";
}
function abreFechaLogin(){
    modalLogin.style.display = "block";
    modalCad.style.display = "none";
}

// Interação Filtros-Home

let filManha = document.getElementById('manha-home')
let filTarde = document.getElementById('tarde-home')
let filNoite = document.getElementById('noite-home')

function colunasVisu(){
    if (filManha.checked) {
        document.getElementById('card-manha').style.display = "block"
        document.getElementById('card-tarde').style.display = "none"
        document.getElementById('card-noite').style.display = "none"
    }
}


// Interação Agendamento
let ctnAgendar = document.getElementById('agendamento')
let ctnAlterar = document.getElementById('alterar-agenda')
let ctnRelatar = document.getElementById('relatorio')
function agendar(){
    ctnAgendar.style.display = "block"
    ctnAlterar.style.display = "none"
    ctnRelatar.style.display = "none"
}
function alterar(){
    ctnAgendar.style.display = "none"
    ctnAlterar.style.display = "block"
    ctnRelatar.style.display = "none"
}
function gerar(){
    ctnAgendar.style.display = "none"
    ctnAlterar.style.display = "none"
    ctnRelatar.style.display = "block"
}


// testando funções 

let nomesDoc = [
    "Aline",
    "Ana",
    "Beatriz",
    "Bruno",
    "Camila",
    "Felipe",
    "Fernanda",
    "Gabriel",
    "Gustavo",
    "Isabela",
    "Julia",
    "Leonardo",
    "Lucas",
    "Luana",
    "Mariana",
    "Mateus",
    "Pedro",
    "Rafael",
    "Renata",
    "Tiago",
];

let nomesAsc = nomesDoc.sort();

let inputDoc = document.getElementById('doc-input');

inputDoc.addEventListener("keyup", (e) =>{

    limparLista();

    for (let i of nomesAsc){
        
        

        if (i.toLowerCase().startsWith(inputDoc.value.toLowerCase()) && inputDoc != ""){
            let listaDoc = document.createElement("li");

            listaDoc.classList.add("listagem");
            listaDoc.style.cursor = "pointer";
            listaDoc.setAttribute("onclick", "mostrarNomes('" + i + "')");
            let negrito  = "<b>" + i.substring(0, inputDoc.value.length) + "</b>";
            negrito += i.substring(inputDoc.value.length)
            // console.log(negrito);
            listaDoc.innerHTML = negrito;
            document.querySelector(".doc-list").appendChild(listaDoc);
        }

    
    }
    
});

function mostrarNomes(value){
    inputDoc.value = value;
    limparLista();
}

function limparLista(){
    // Limpa o campo de busca
    let limpaItens = document.querySelectorAll(".listagem");
    limpaItens.forEach((limpador) =>{
        limpador.remove();
    });

}
