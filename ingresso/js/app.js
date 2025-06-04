function comprar(){
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeDeIngressos = document.getElementById('qtd').value;
    let pista =  parseInt(document.getElementById('qtd-pista').textContent);
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);
    let superior = parseInt(document.getElementById('qtd-superior').textContent);

    let quantidadeDisponivel;
    if (tipoDeIngresso === 'pista') {
        quantidadeDisponivel = pista;
    } else if (tipoDeIngresso === 'inferior') {
        quantidadeDisponivel = inferior;
    } else {
        quantidadeDisponivel = superior;
    }

    if (quantidadeDisponivel < quantidadeDeIngressos){
        alert('Ingressos nessa quantidade indisponíveis! Verifique a quantidade de Ingressos disponíveis para essa modalidade.');
    } else {
        alert('oi')
        passandoValor(tipoDeIngresso, quantidadeDeIngressos, pista, inferior, superior)
    }
    
}