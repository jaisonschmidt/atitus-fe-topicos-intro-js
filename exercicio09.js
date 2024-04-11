function resumoCompra(nomeProduto, preco, quantidade) {
    let mensagem = nomeProduto + ", valor unitário: " + preco + ", total da compra: " + preco * quantidade;
    
    console.log(mensagem);
}

resumoCompra("iPhone", 6000, 3);
resumoCompra("xBox", 4500, 2);
resumoCompra("Notebook", 8000, 3);
