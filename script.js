const butaoaddTarefa = document.querySelector("#butao-adicionar-tarefa")
const butaoaVERTarefa = document.querySelector("#butao-verTarefa")

const voltar2janela = document.querySelector("#voltar-da-2janela-inicial")
const volta3janela = document.querySelector("#volta-da3janela-inicio")
const volta4janela= document.querySelector("#voltapara-inicio-janela4")

const confirmaTarefa = document.querySelector("#confirmaAddtarefa")
const butaoacessar4janela = document.querySelector("#butao-remover-tarefa")
const lixeiraRemover = document.querySelector("#lixeira")

butaoaVERTarefa.addEventListener("click",verTarefa)
butaoaddTarefa.addEventListener("click",addTarefa)
lixeiraRemover.addEventListener("click",removertarefa)

volta4janela.addEventListener("click",voltarDa4janelaP1)
voltar2janela.addEventListener("click",voltarDa2JanelaP1)
volta3janela.addEventListener("click",voltaDa3janelaP1)

confirmaTarefa.addEventListener("click",confirmaEaddTarefa)
butaoacessar4janela.addEventListener("click",janela4removertarefa)

const conteinerInicio = document.querySelector(".conteiner")
const conteinerAddTarefa = document.querySelector(".conteiner-adicionar-tarefa")
const conteiner3janela = document.querySelector(".conteiner-3janela")
const conteiner4janela = document.querySelector(".conteiner-remover-tarefa")
const erromsg = document.querySelector("h2")

const tarefas = []

function addTarefa(){
    conteinerInicio.style.display = "none"
    conteinerAddTarefa.style.display = "flex"
}

let controlemsgerro = null

function mensagemErro(){
    if(controlemsgerro !== null){
        return
    }else{
        erromsg.style.visibility = "visible"
        controlemsgerro = setTimeout(function(){
            erromsg.style.visibility = "hidden"
            controlemsgerro = null
        },3000)
    }
}


function confirmaEaddTarefa(){
    let valorTarefa = document.querySelector("#adicionar-tarefa")

    if(valorTarefa.value === ""){
        mensagemErro()
        return
    }else{
        tarefas.push(valorTarefa.value)
        valorTarefa.value = ""
    }

}

function verTarefa(){
    conteinerAddTarefa.style.display = "none"
    conteinerInicio.style.display = "none"
    conteiner3janela.style.display = "flex"
    
    let contador = 0

    for(let elementoLista of tarefas){
        contador++
        let lista = document.createElement("h3")
        lista.innerText = `tarefa ${contador}: ${elementoLista}`
        conteiner3janela.appendChild(lista)        
    }
}

function voltarDa2JanelaP1(){
    conteinerAddTarefa.style.display = "none"
    conteinerInicio.style.display = "flex"
    erromsg.style.visibility = "hidden"  
}

function voltaDa3janelaP1(){
    const tarefasCriadas = document.querySelectorAll(".conteiner-3janela h3")
    
    for(let tarefa of tarefasCriadas){
        tarefa.remove()
    }

    conteiner3janela.style.display = "none"
    conteinerInicio.style.display = "flex"
}

function voltarDa4janelaP1(){
    const tarefasCriadas = document.querySelectorAll(".conteiner-remover-tarefa h3")
    
    for(let tarefa of tarefasCriadas){
        tarefa.remove()
    }
    conteiner4janela.style.display = "none"
    conteinerInicio.style.display = "flex"
}

let contador = 0
let elementoLista = ""

function janela4removertarefa(){
    conteiner4janela.style.display = "flex"
    conteinerInicio.style.display = "none"


    for(elementoLista of tarefas){
        contador++
        let lista = document.createElement("h3")
        lista.innerText = elementoLista
        lista.addEventListener("click",flitrarElemtosParaRemover)
        conteiner4janela.appendChild(lista)        
    }
}

let tarefaSelecionada = []

let textoSelecionado = []
let indiciselecionado = []

function flitrarElemtosParaRemover(event){

    let selecionado = event.target.classList.contains("clickDuplo")

    if(selecionado === false){
        event.target.classList.add("clickDuplo")
        tarefaSelecionada.push(event.target)
        textoSelecionado.push(event.target.innerText)
    
    }else{
        event.target.classList.remove("clickDuplo")
        let indice = tarefaSelecionada.findIndex(indice => indice === event.target)

        tarefas.splice(indice,1)
        tarefaSelecionada.splice(indice,1)
        textoSelecionado.splice(indice,1)
    }

}   



function removertarefa(){
    for(let i = 0; i< tarefas.length; i++){
        for(let j = 0; j< textoSelecionado.length; j++){
            
            if(tarefas[i] === textoSelecionado[j]){
                indiciselecionado.push(i)
                
            }
        }
    }

    for(let r = indiciselecionado.length - 1; r >= 0; r--){
        tarefas.splice(indiciselecionado[r],1)
    }
    
    textoSelecionado = []
    indiciselecionado = []

    for( let i = 0; i< tarefaSelecionada.length; i++){
        tarefaSelecionada[i].remove()
    }
    
    tarefaSelecionada = []
}