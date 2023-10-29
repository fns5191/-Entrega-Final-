/* Creo dos constantes y las linkeo con las ID del HTML para establecer las monedas */


const primeraDivisa = document.getElementById('primera-moneda');
const segundaDivisa = document.getElementById('segunda-moneda');

/* A su vez creo dos constantes más para vincular los valores que se eligirán tasar */

const primeraCantidad = document.getElementById('cantidad-uno');
const segundaCantidad = document.getElementById('cantidad-dos');

const tasa = document.getElementById('rate');

const rotarValores = document.getElementById('rotar-valores');

/* Establezco las funciones y eventos que junto a la API le darán el valor a cada interacción entre monedas */

function calculate() {
  const primera_divisa = primeraDivisa.value;
  const segunda_divisa = segundaDivisa.value;

fetch(`https://v6.exchangerate-api.com/v6/b71ba5a6f69833fe3ac900ec/latest/${primera_divisa}`)
    .then((res) => res.json())
    .then((data) => {
    
    const rate = data.conversion_rates[segunda_divisa];
    tasa.innerText = `1 ${primera_divisa} = ${rate} ${segunda_divisa}`;

    segundaCantidad.value = (primeraCantidad.value * rate).toFixed(2);
    });
}

primeraDivisa.addEventListener('change', calculate);
primeraCantidad.addEventListener('input', calculate);

segundaDivisa.addEventListener('change', calculate);
segundaCantidad.addEventListener('input', calculate);

/* Agrego un evento para poder darle el efecto de rotación al botón de rotar valores */

rotarValores.addEventListener('click', () => {
  const temp = primeraDivisa.value;
  primeraDivisa.value = segundaDivisa.value;
  segundaDivisa.value = temp;
  calculate();
});

calculate();
