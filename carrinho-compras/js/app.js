function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeDeProduto = produto.split('-')[0];
    let valorDoProduto = parseFloat(produto.split('R$')[1]);
    let quantidadeDoProduto = document.getElementById('quantidade');
    let valorCompleto = valorDoProduto * quantidadeDoProduto;
    alert(nomeDeProduto);
    alert(valorDoProduto);
    alert(valorCompleto);
}

function limpar(){

}