let form = document.getElementById('Calculadora');
const Calcular = document.getElementById("button");
const ERROR = document.getElementById("error");
const Man = document.getElementById("man");
const Flu = document.getElementById("flu");
const DIA = document.getElementById("dia");
let pesoInput = document.getElementById("peso");

Calcular.addEventListener('click', calcular);

function calcular() {
    let peso = pesoInput.valueAsNumber;


    if (peso <= 0 || isNaN(peso)) {
        ERROR.innerHTML = "Ingrese un peso válido mayor que cero";
        ERROR.style.display = "block";
        Flu.style.display = "none";
        Man.style.display = "none";
        DIA.style.display = "none"; 
        return;
    }
    ERROR.style.display = "none";
   

    if (peso <= 30) {
        let volumenDiario = segar(peso);
        DIA.innerHTML = "Diario: " + volumenDiario + "cc";
        DIA.style.display = "block";
        Flu.innerHTML = "Mantenimiento: " + (volumenDiario / 24).toFixed(2) + "cc/hr";
        Flu.style.display = "block";
        Man.innerHTML = "M+m/2: " + ((volumenDiario / 24) * 1.5).toFixed(2) + "cc/hr";
        Man.style.display = "block";
    } else {
        let superficieCorporal = superficie(peso);
        DIA.innerHTML = "SC * 1500: " + (superficieCorporal * 1500).toFixed(2) + "cc";
        DIA.style.display = "block";
        Flu.innerHTML = "SC * 2000: " + (superficieCorporal * 2000).toFixed(2) + "cc";
        Flu.style.display = "block";
        Man.style.display = "none";
    }
}

function segar(valor) {
    if (valor > 20) {
        return 1500 + ((valor - 20) * 20);
    } else if (valor > 10) {
        return 1000 + ((valor - 10) * 50);
    } else {
        return valor * 100;
    }
}

function superficie(valor) {
    return ((valor * 4) + 7) / (valor + 90);
}