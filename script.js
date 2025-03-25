// Função que cria o HTML dos resultados de pesquisa
function gerarResultados(dados) {
    let section = document.getElementById('resultados-pesquisa');
    let resultados = "";

    for (let dado of dados) {
        resultados += `
            <div class="item-resultado">
                <img src="${dado.imagem}" alt="${dado.nome}" class="imagem-produto">
                <h2><a href="${dado.link}" target="_blank">${dado.nome}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Mais Informações</a>
            </div>
        `;
    }

    if (!resultados) {
        resultados = "<p>Resultado não Encontrado</p>";
    }

    section.innerHTML = resultados;
}

// Função de filtro que é chamada sempre que o usuário digita na caixa de pesquisa
function pesquisar() {
    let inputElement = document.querySelector("input");
    let campoPesquisa = inputElement.value.toLowerCase();

    // Filtrando os dados com base no texto digitado
    let dadosFiltrados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(campoPesquisa) || 
        dado.descricao.toLowerCase().includes(campoPesquisa)
    );

    // Gerando os resultados filtrados
    gerarResultados(dadosFiltrados);
}

// Inicializa os resultados exibindo todos os produtos
gerarResultados(dados);

// Adiciona o evento de input para chamar a função de pesquisa
document.querySelector("input").addEventListener("input", pesquisar);