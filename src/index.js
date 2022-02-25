import "./styles.css";

//Medidor de velocidade
//requisitos
// Velocidade maxima de até 70km
// a cada 5 km acima do limite, voce ganhar 4 pontos
// caso pontos for > 12, ' carteira suspensa"

verificarVelocidade(75);
function verificarVelocidade(velocidade) {
  const velocidadeMaxima = 70;
  const pontosPorKM = 5;

  if (velocidade <= velocidadeMaxima) console.log("Velocidade Ok");
  else {
    const pontos = Math.floor((velocidade - velocidadeMaxima) / pontosPorKM);
    if (pontos >= 12) console.log("Carteira Suspensa");
    else console.log("Pontos", pontos);
  }
}
