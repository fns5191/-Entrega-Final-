
const primeraDivisa = document.getElementById('primera-moneda');
const segundaDivisa = document.getElementById('segunda-moneda');

const primeraCantidad = document.getElementById('cantidad-uno');
const segundaCantidad = document.getElementById('cantidad-dos');

const tasa = document.getElementById('rate');

const rotarValores = document.getElementById('rotar-valores');

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

rotarValores.addEventListener('click', () => {
  const temp = primeraDivisa.value;
  primeraDivisa.value = segundaDivisa.value;
  segundaDivisa.value = temp;
  calculate();
});

calculate();