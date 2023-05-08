export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    imagem: string;
    qtdEstoque: number;
}

export interface IProdutoCarrinho extends IProduto {
    qtd: number;
}


function gerarCorAleatoria() {
    const hexadecimais = '0123456789abcdef';
    let cor = '';  
    for (let i = 0; i < 6; i++) {
      const indice = Math.floor(Math.random() * 16);
      cor += hexadecimais[indice];
    }
  
    return cor;
}

function gerarNumeroAleatorio(max: number,min: number){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let listaCores = Array(15).fill(0);
listaCores = listaCores.map(() => gerarCorAleatoria())

export const produtos: IProduto[] = [
    {id: 1, descricao: "Mouse 01", preco: 35.99, descricaoPreco: "à vista no PIX", imagem: `https://corhexa.com/png/250x250/${listaCores[0]}`, qtdEstoque: gerarNumeroAleatorio(30,5)},
    {id: 2, descricao: "Mouse 02", preco: 45.99, descricaoPreco: "à vista no PIX", imagem: `https://corhexa.com/png/250x250/${listaCores[1]}`, qtdEstoque: gerarNumeroAleatorio(30,5)},
    {id: 3, descricao: "Mouse 03", preco: 55.99, descricaoPreco: "à vista no PIX", imagem: `https://corhexa.com/png/250x250/${listaCores[2]}`, qtdEstoque: gerarNumeroAleatorio(30,5)},
    {id: 4, descricao: "Mouse Gamer", preco: 235.99, descricaoPreco: "à vista no PIX", imagem: `https://corhexa.com/png/250x250/${listaCores[3]}`, qtdEstoque: gerarNumeroAleatorio(30,5)},
    {id: 5, descricao: "Monitor 01", preco: 715.99, descricaoPreco: "à vista no PIX", imagem: `https://corhexa.com/png/250x250/${listaCores[4]}`, qtdEstoque: gerarNumeroAleatorio(30,5)},
    {id: 6, descricao: "Monitor 02", preco: 899.99, descricaoPreco: "à vista no PIX", imagem: `https://corhexa.com/png/250x250/${listaCores[5]}`, qtdEstoque: gerarNumeroAleatorio(30,5)},
    {id: 7, descricao: "Teclado 01", preco: 89.99, descricaoPreco: "à vista no PIX", imagem: `https://corhexa.com/png/250x250/${listaCores[6]}`, qtdEstoque: gerarNumeroAleatorio(30,5)},
    {id: 8, descricao: "Teclado 02", preco: 99.99, descricaoPreco: "à vista no PIX", imagem: `https://corhexa.com/png/250x250/${listaCores[7]}`, qtdEstoque: gerarNumeroAleatorio(30,5)},
    {id: 9, descricao: "Notebook 01", preco: 1899.99, descricaoPreco: "à vista no PIX", imagem: `https://corhexa.com/png/250x250/${listaCores[8]}`, qtdEstoque: gerarNumeroAleatorio(30,5)},
    {id: 10, descricao: "Notebook 02", preco: 2799.99, descricaoPreco: "à vista no PIX", imagem: `https://corhexa.com/png/250x250/${listaCores[9]}`, qtdEstoque: gerarNumeroAleatorio(30,5)},
    {id: 11, descricao: "Cadeira Gamer", preco: 499.99, descricaoPreco: "à vista no PIX", imagem: `https://corhexa.com/png/250x250/${listaCores[10]}`, qtdEstoque: gerarNumeroAleatorio(30,5)},
    {id: 12, descricao: "Caixa de Som 01", preco: 129.99, descricaoPreco: "à vista no PIX", imagem: `https://corhexa.com/png/250x250/${listaCores[11]}`, qtdEstoque: gerarNumeroAleatorio(30,5)},
    {id: 13, descricao: "Caixa de Som 02", preco: 179.99, descricaoPreco: "à vista no PIX", imagem: `https://corhexa.com/png/250x250/${listaCores[12]}`, qtdEstoque: gerarNumeroAleatorio(30,5)},
    {id: 14, descricao: "Fone de Ouvido 01", preco: 49.99, descricaoPreco: "à vista no PIX", imagem: `https://corhexa.com/png/250x250/${listaCores[13]}`, qtdEstoque: gerarNumeroAleatorio(30,5)},
    {id: 15, descricao: "Fone de Ouvido 02", preco: 89.99, descricaoPreco: "à vista no PIX", imagem: `https://corhexa.com/png/250x250/${listaCores[14]}`, qtdEstoque: gerarNumeroAleatorio(30,5)},
]


