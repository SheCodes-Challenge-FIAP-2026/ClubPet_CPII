const produto = [
    {
        nome: 'Ração Premium para cães',
        img: '../assets/img/card_racao.png',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit.',
        preco: 137.90
    },
    {
        nome: 'Ração para gatos',
        img: '../assets/img/card_racao2.png',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit.',
        preco: 167.90
    },
    {
        nome: 'Petisco natural',
        img: '../assets/img/card_petisco.png',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit.',
        preco: 20.90
    },
    {
        nome: 'Sachê',
        img: '../assets/img/card_sache.png',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit.',
        preco: 8.50
    },
    {
        nome: 'Osso mastigável',
        img: '../assets/img/card_osso.png',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit.',
        preco: 19.90
    },
    {
        nome: 'Ração Premium para cães',
        img: '../assets/img/card_racao.png',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit.',
        preco: 137.90
    },
    {
        nome: 'Ração para gatos',
        img: '../assets/img/card_racao2.png',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit.',
        preco: 167.90
    },
    {
        nome: 'Petisco natural',
        img: '../assets/img/card_petisco.png',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit.',
        preco: 20.90
    },
    {
        nome: 'Sachê',
        img: '../assets/img/card_sache.png',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit.',
        preco: 8.50
    },
    {
        nome: 'Osso mastigável',
        img: '../assets/img/card_osso.png',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit.',
        preco: 19.90
    },{
        nome: 'Ração Premium para cães',
        img: '../assets/img/card_racao.png',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit.',
        preco: 137.90
    },
    {
        nome: 'Ração para gatos',
        img: '../assets/img/card_racao2.png',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit.',
        preco: 167.90
    },
    {
        nome: 'Petisco natural',
        img: '../assets/img/card_petisco.png',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit.',
        preco: 20.90
    },
    {
        nome: 'Sachê',
        img: '../assets/img/card_sache.png',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit.',
        preco: 8.50
    },
    {
        nome: 'Osso mastigável',
        img: '../assets/img/card_osso.png',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit.',
        preco: 19.90
    }
];

const listaProdutos = document.getElementById('lista-produtos');
produto.forEach((produto) => {
    listaProdutos.innerHTML += `
    <div class='card-portifolio'>
        <h2>${produto.nome}</h2>
        <img src="${produto.img}" alt="${produto.nome}">
        <p>${produto.descricao}</p>
        <p id="preco"><strong>Preço: </strong>${produto.preco}</p>
    </div>
    
    `
})


