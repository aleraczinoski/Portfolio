document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      renderizarSkills(data);
      renderizarProjetos(data.projetos);
      renderizarCertificados(data.certificados);
    })
    .catch((error) => console.error("Erro ao carregar o JSON:", error));
});

function renderizarSkills(data) {
  const container = document.querySelector("#Competencias .container");
  container.innerHTML = "<h2>Competências</h2>";

  // Hard Skills
  const h3Hard = document.createElement("h3");
  h3Hard.className = "subtitulo-competencia";
  h3Hard.textContent = "Hard Skills";
  container.appendChild(h3Hard);

  data.hardSkills.forEach((skill) => {
    const div = document.createElement("div");
    div.className = "containerCompetencia";
    div.innerHTML = `
      <img src="${skill.icone}" alt="Logo ${skill.nome}">
      <h4>${skill.nome}</h4>
    `;
    container.appendChild(div);
  });

  // Soft Skills
  const h3Soft = document.createElement("h3");
  h3Soft.className = "subtitulo-competencia";
  h3Soft.textContent = "Soft Skills";
  container.appendChild(h3Soft);

  data.softSkills.forEach((skill) => {
    const div = document.createElement("div");
    div.className = "containerCompetencia";
    div.innerHTML = `
      <img src="${skill.icone}" alt="Ícone ${skill.nome}">
      <h4>${skill.nome}</h4>
    `;
    container.appendChild(div);
  });
}

function renderizarProjetos(projetos) {
  const container = document.querySelector("#Projetos .container");
  container.innerHTML = "<h2>Projetos</h2>";

  projetos.forEach((projeto) => {
    const div = document.createElement("div");
    div.className = "containerProjeto";

    let skillsHTML = "";
    projeto.tecnologias.forEach((tech) => {
      skillsHTML += `<div class="skill">${tech}</div>`;
    });

    div.innerHTML = `
      <a href="${projeto.link}">
        <img src="${projeto.imagem}" alt="${projeto.titulo}">
      </a>
      <h4>${projeto.titulo}</h4>
      <p>${projeto.descricao}</p>
      ${skillsHTML}
    `;
    container.appendChild(div);
  });
}

function renderizarCertificados(certificados) {
  const container = document.querySelector("#Certificados .container");
  container.innerHTML = "<h2>Certificados</h2>";

  certificados.forEach((certificado) => {
    const div = document.createElement("div");
    div.className = "containerCertificados";
    div.innerHTML = `
      <a href="${certificado.link}">
        <img src="${certificado.imagem}" alt="${certificado.titulo}">
      </a>
      <h4>${certificado.titulo}</h4>
    `;
    container.appendChild(div);
  });
}
