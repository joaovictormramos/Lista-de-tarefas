alert("Olá, sou a Pedra de estimação! ")

function tocaPedra(){
   var nome = prompt("Qual seu nome?");
   if(nome){
    alert("Prazer em conhecer, "+nome+".");
    document.getElementById("Pedra").src = "pedra_rindo.png"
    var nome_lista = prompt("Vamos criar uma lista de terefas. Dê um nome.")
    document.getElementById('nome_lista').innerHTML = nome_lista;
   }
}
function nome_lilsta(){
    var nome_lista = prompt("Deseja alterar o nome da lista?");
    document.getElementById('nome_lista').innerHTML = nome_lista;
}
function adiciona_tarefa() {
    var puxa_tarefa = document.getElementById('tarefa').value;
    var pai = document.getElementById('lista_tarefas');
    var li = document.createElement("li");
    var botao = document.createElement('button');
    var idTarefa = 'tarefa-' + Date.now();
    botao.id = 'excluir';
    botao.innerHTML = '<strong style="color:white;">X</strong>';
    li.id = idTarefa;
    var tarefa = document.createTextNode(puxa_tarefa);
    li.appendChild(tarefa);
    li.appendChild(botao);
    pai.appendChild(li);
    botao.onclick = function() {;
        pai.removeChild(li); 
      };
    li.style.fontFamily = 'Courier New';
    li.style.fontSize = '25px'; 
    li.style.color = 'white';
    li.style.border = '1px solid green';
    li.style.backgroundColor = 'green';
    li.style.opacity = '0.5';
    li.style.marginBottom = '1px';
    botao.style.fontSize = '25px';
    botao.style.margin = '25px';
    botao.style.backgroundColor = 'red';
    botao.style.cursor = 'pointer';
}
