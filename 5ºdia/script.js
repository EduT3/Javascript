let lista = [];
let listagem = document.getElementById("listagem");
let resposta = document.getElementById("sn");

resposta.addEventListener("input", function () {
  let valorResposta = resposta.value.trim().toLowerCase();

  if (valorResposta === "sim" && !document.getElementById("adicionar")) {
    listagem.innerHTML = `
      <p>Qual o nome do Produto?</p>
      <input type="text" id="adicionar">
      <button onclick="adicionarItem()">Adicionar</button>
      <ul id="itens"></ul>
    `;
  }
});

function adicionarItem() {
  let inputAdicionar = document.getElementById('adicionar');
  let categoria = prompt("Qual a categoria do produto? (frutas, laticínios, congelados, doces)");

  if (categoria === null) return;
  categoria = categoria.trim().toLowerCase();
  if (!["frutas", "laticínios", "congelados", "doces"].includes(categoria)) {
    alert("Escolha uma categoria: frutas, laticínios, congelados ou doces.");
    return;
  }
  if (inputAdicionar.value.trim()) {
    lista.push({ item: inputAdicionar.value.trim(), categoria: categoria });
    inputAdicionar.value = ""; // Limpar o campo de entrada

    atualizarLista();
    console.log("Item adicionado:", inputAdicionar.value, "Categoria:", categoria);
  } else {
    console.log("Erro: informe o nome do produto e a categoria.");
  }
}

function removerItem(index) {
  lista.splice(index, 1);
  atualizarLista();
}

function atualizarLista() {
  let listaItens = document.getElementById("itens");
  listaItens.innerHTML = "";

  const categorias = {
    frutas: [],
    laticínios: [],
    congelados: [],
    doces: []
  };

  lista.forEach(function (elemento, indice) {
    const { item, categoria } = elemento;
    categorias[categoria.toLowerCase()].push({ item, indice });
  });

  for (let categoria in categorias) {
    const itens = categorias[categoria];
    if (itens.length > 0) {
      const itemLista = document.createElement("li");
      itemLista.textContent = `${categoria.charAt(0).toUpperCase() + categoria.slice(1)}:`;
      const listaItensCategoria = document.createElement("ul");

      itens.forEach(function (itemObj) {
        const itemLi = document.createElement("li");
        itemLi.textContent = itemObj.item;

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.addEventListener("click", function () {
          removerItem(itemObj.indice);
        });

        itemLi.appendChild(botaoRemover);
        listaItensCategoria.appendChild(itemLi);
      });

      itemLista.appendChild(listaItensCategoria);
      listaItens.appendChild(itemLista);
    }
  }
}
