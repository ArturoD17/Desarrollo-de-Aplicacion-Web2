let contador = 0;
const valor = document.getElementById("valor");

document.getElementById("incrementar").addEventListener("click", () => {
  contador++;
  valor.textContent = contador;
});

const filtro = document.getElementById("filtro");

filtro.addEventListener("keyup", () => {
  const texto = filtro.value.toLowerCase();
  document.querySelectorAll("li").forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(texto)
      ? ""
      : "none";
  });
});
