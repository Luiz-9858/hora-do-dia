function carregar() {
  const msg = document.getElementById("msg");
  const img = document.getElementById("imagem");
  const data = new Date();
  const hora = data.getHours();

  msg.innerHTML = `Agora são <strong>${hora}</strong> horas.`;

  // Configurações dos períodos
  const periodos = {
    manha: {
      imagem: "./image/manha.png",
      classe: "manha",
    },
    tarde: {
      imagem: "./image/tarde.jpg",
      classe: "tarde",
    },
    noite: {
      imagem: "./image/noite.jpg",
      classe: "noite",
    },
  };

  let periodo;

  if (hora >= 0 && hora < 12) {
    periodo = periodos.manha;
  } else if (hora >= 12 && hora < 18) {
    periodo = periodos.tarde;
  } else {
    periodo = periodos.noite;
  }

  // Aplica as mudanças
  img.src = periodo.imagem;
  document.body.className = periodo.classe;

  // Atualiza a cada minuto
  setTimeout(carregar, 60000);
}

// Carrega quando a página abrir
window.onload = carregar;
