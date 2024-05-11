
const dadosAgenda = [];
let lines = "";

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  addConteudo();
  attTabela();
});

function addConteudo() {
  const nome = document.getElementById("name");
  const telefone = document.getElementById("telefone");

  if (dadosAgenda.includes(nome.value)) {
    alert(`O nome ${nome.value} já existe na agenda.`);
  } else {
    dadosAgenda.push(nome.value);
    
    let line = `<tr id="${nome.value}">`;
    line += `<td>${nome.value}</td>`;
    line += `<td>${telefone.value}</td>`;
    line += `<td><button id="excluir" onclick='removeItem("${nome.value}")'>EXCLUIR</button></td>`;

    lines += line;
    console.log(line);
  }
  nome.value = "";
  telefone.value = "";
}
function attTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = lines;
}

function removeItem(id) {
  let telefone = document.getElementById(id);
  telefone.parentNode.removeChild(telefone)
}

const handlePhone = (event) => {
  let input = event.target;
  input.value = phoneMask(input.value);
};

const phoneMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};
