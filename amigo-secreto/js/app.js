let arrayDeNomes = [];

function adicionar() {
    let listaAmigos = document.getElementById('lista-amigos');
    let nomeDoAmigo = document.getElementById('nome-amigo').value;

    if (nomeDoAmigo == ''){
        alert('Por favor, insira um nome válido!');
        return;
    } else if (arrayDeNomes.includes(nomeDoAmigo)) {
        alert('Por favor, não inclua nomes repetidos!')
        return;
    } else {
        arrayDeNomes.push(nomeDoAmigo);
    }
    
    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = nomeDoAmigo;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeDoAmigo;
    }
    document.getElementById('nome-amigo').value = '';
}

function sortear() {

    if (arrayDeNomes.length <= 3){
        alert('Adcione no mínimo 4 participantes, né.')
        return;
    } 

    embaralha(arrayDeNomes)
    let listaSorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < arrayDeNomes.length; i++) {
        const atual = arrayDeNomes[i];
        const proximo = arrayDeNomes[(i + 1) % arrayDeNomes.length]; // o truque está aqui
        listaSorteio.innerHTML += (`${atual} → ${proximo}<br>`);
    }

}

function embaralha(arrayDeNomes) {

    for (let indice = arrayDeNomes.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [arrayDeNomes[indice - 1], arrayDeNomes[indiceAleatorio]] = 
            [arrayDeNomes[indiceAleatorio], arrayDeNomes[indice - 1]];
    }
}

function reiniciar() {
    amigos = []
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

