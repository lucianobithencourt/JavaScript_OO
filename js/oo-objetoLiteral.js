

class Produto {
    constructor($descricao,$preco){
        this.descricao=$descricao;
        this.preco=$preco;
    }
    verDescricao () {
        console.log(`${this.descricao} por apenas ${(this.preco).toFixed(2)}`);
    }

}

class Produto {
    constructor($descricao,$preco){
        this.descricao=$descricao;
        this.preco=$preco;
    }
    verDescricao () {
        console.log(`${this.descricao} por apenas ${(this.preco).toFixed(2)}`);
    }

let produtoLiteral = {
    descricao: 'Geladeira',
    preco:4500,
    verDescricao: function () {
        console.log(`${this.descricao} por apenas ${(this.preco).toFixed(2)}`);
    }

let produtoTablet = {
     descricao = 'tablet Apple'
}
}

produtoLiteral.verDescricao()