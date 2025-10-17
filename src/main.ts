import "./style.css";

const numeroTurno = document.getElementById("numero-turno") as HTMLElement;
let numeroTurnoInt: number = 0;
// Convertimos el contenido del DIV que es de tipo String a Number
if (numeroTurno.textContent != null && numeroTurno.textContent != undefined) {
  numeroTurnoInt = parseInt(numeroTurno.textContent);
}

const btnSiguiente = document.getElementById("btnSiguiente");
const btnAnterior = document.getElementById("btnAnterior");
const btnReiniciar = document.getElementById("btnReiniciar");
const btnCambiar = document.getElementById("btnCambiar");
const inputValorInicio = document.getElementById(
  "inputValorInicio"
) as HTMLInputElement;

function mostrarDosCifrasDisplay(): void {
  let contenidoDisplay: string = numeroTurno.textContent || "";
  numeroTurno.textContent = contenidoDisplay.padStart(2, "0");
}

if (btnSiguiente != null && btnSiguiente != undefined) {
  btnSiguiente.addEventListener("click", (): void => {
    let valorNumeroTurno: number = (numeroTurnoInt += 1);
    numeroTurno.textContent = valorNumeroTurno.toString();
    mostrarDosCifrasDisplay();
  });
}

if (btnAnterior != null && btnAnterior != undefined) {
  btnAnterior.addEventListener("click", (): void => {
    let valorNumeroTurno: number = (numeroTurnoInt -= 1);
    numeroTurno.textContent = valorNumeroTurno.toString();
    mostrarDosCifrasDisplay();
  });
}

if (btnReiniciar != null && btnReiniciar != undefined) {
  btnReiniciar.addEventListener("click", (): void => {
    numeroTurnoInt = 0;
    numeroTurno.textContent = numeroTurnoInt.toString();
    mostrarDosCifrasDisplay();
  });
}

if (btnCambiar != null && btnCambiar != undefined) {
  btnCambiar.addEventListener("click", () => {
    // Convertimos el contenido del valor del input de tipo string a Number
    numeroTurnoInt = parseInt(inputValorInicio.value);
    let valorNumeroTurno: number = numeroTurnoInt;
    numeroTurno.textContent = valorNumeroTurno.toString();
    mostrarDosCifrasDisplay();
  });
}
