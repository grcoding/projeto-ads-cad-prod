document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();


    const productData = {
        nome: document.getElementById('productName').value,
        categoria: document.getElementById('category').value,
        preco: document.getElementById('price').value,
        estoque: document.getElementById('stock').value,
        descricao: document.getElementById('description').value
    };

    
    console.log("Dados do Produto:", productData);
    
    alert(`Produto "${productData.nome}" cadastrado com sucesso!`);

    // reseta o form apos o envio
    this.reset();
});