let webhook = "http://localhost:5678/webhook/animacao-css";

async function cliqueiNoBotao() {
  let textoInput = document.querySelector(".input-animacao").value;
  let codigo = document.querySelector(".area-codigo");
  let areaResultado = document.querySelector(".area-resultado");

  let resposta = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pergunta: textoInput }),
  });

  console.log(resposta);
  let resultado = await resposta.json();

  let info = JSON.parse(resultado[0].resposta);

  console.log(info);

  codigo.innerHTML = info.code;
  areaResultado.innerHTML = info.preview;
  document.head.insertAdjacentHTML(
    "beforeend",
    "<style>" + info.style + "</style>"
  );
}
