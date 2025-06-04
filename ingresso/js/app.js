function comprar(){
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeDeIngressos = parseInt(document.getElementById('qtd').value);

    let pista =  parseInt(document.getElementById('qtd-pista').textContent);
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);
    let superior = parseInt(document.getElementById('qtd-superior').textContent);

    let quantidadeDisponivel;
    if (tipoDeIngresso === 'pista') {
        quantidadeDisponivel = parseInt(pista);
    } else if (tipoDeIngresso === 'inferior') {
        quantidadeDisponivel = parseInt(inferior);
    } else {
        quantidadeDisponivel = parseInt(superior);
    }

    if (quantidadeDisponivel < quantidadeDeIngressos){
        alert('Ingressos nessa quantidade indisponíveis! Verifique a quantidade de Ingressos disponíveis para essa modalidade.');
        return;
    } else if (tipoDeIngresso === 'pista') {
        alert(`Compra de ${quantidadeDeIngressos} ingressos pista feito com sucesso!`);;
        pista = pista - quantidadeDeIngressos;
        document.getElementById('qtd-pista').textContent = pista;
        return;
    } else if (tipoDeIngresso === 'inferior') {
        alert(`Compra de ${quantidadeDeIngressos} ingressos inferior feito com sucesso!`);;
        inferior = inferior - quantidadeDeIngressos;
        document.getElementById('qtd-inferior').textContent = inferior;
        return;
    } else if (tipoDeIngresso === 'superior') {
        alert(`Compra de ${quantidadeDeIngressos} ingressos superior feito com sucesso!`);;
        superior = superior - quantidadeDeIngressos;
        document.getElementById('qtd-superior').textContent = superior;
        return;
    }
    
}