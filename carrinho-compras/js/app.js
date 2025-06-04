let totalGeral = 0;
function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeDeProduto = produto.split('-')[0];
    let valorDoProduto = parseFloat(produto.split('R$')[1]);
    let quantidadeDoProduto = document.getElementById('quantidade').value;
    let valorCompleto = valorDoProduto * parseFloat(quantidadeDoProduto);
    let carrinhoDeProdutos = document.getElementById('lista-produtos');

    
    carrinhoDeProdutos.innerHTML += (`<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidadeDoProduto}x</span> ${nomeDeProduto} <span class="texto-azul">R$${valorCompleto}</span> </section>`);
    totalGeral = totalGeral + valorCompleto;
    let mostrarValorTotal = document.getElementById('valor-total');
    mostrarValorTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    document.getElementById('lista-produtos').innerHTML = ('');
    document.getElementById('valor-total').innerHTML = ('R$ ');
}