/////////////////////////////////////////////////////////////
// aparecer y esconder botones
let btnClick = document.getElementById("btn-click");
let btnAppear = document.getElementById("btn-appear");
let boxSolut = document.getElementById("box-solution");

ingresar(btnClick, btnAppear, boxSolut);

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// FUNCIONES
// guarda el valor ingresado por el usuario
function addNumber() {
  let x = true;
  while (x == true) {
    let info = parseInt(prompt("Ingresa tu numero entre 1 y 20: "));

    if (info >= 1 && info <= 20) {
      alert("Numero dentro de los parametros...");
      return info;
      break;
    } else if (info < 1 && info > 20) {
      alert("Numero fuera del rango, intentalo otra vez...");
      continue;
    } else if (!Number.isInteger(info)) {
      alert("Ingresaste un dato alfabetico, ingresa un numero...");
      continue;
    }
  }
}

// funcion que entrega la solucion de multiplicacion
function tablaMulti(info) {
  let putSolution = document.getElementById("solucion");
  let arr = [];
  for (let i = 1; i <= info; i++) {
    arr.push(i);
    alert(`${info} x ${i} = ${info * i}`);
  }
}

// funcion que entrega el resultado del factorial del numero
function factorial(info) {
  let i = 1;
  let j = 1;
  while (i <= info) {
    alert(`Factorial de ${i} es ${j}`);
    i++;
    j *= i;
  }
}

// funcion de ingreso
function ingresar(btnClick, btnAppear, boxSolut) {
  // paso 1, abre programa
  btnClick.addEventListener("click", () => {
    btnAppear.classList.toggle("main__btn--appear");
    boxSolut.classList.toggle("main__btn--appear");

    // paso 2, solicita informacion al usuario
    let btnInfo = document.getElementById("btn-info");

    btnInfo.addEventListener("click", () => {
      let infoUser = addNumber();

      // paso 3 entregar solucion de multipliacion al click
      let multiSolut = document.getElementById("tabla");
      multiSolut.addEventListener("click", () => {
        tablaMulti(infoUser);
      });

      // paso 4 entrega la solucion del factorial del numero
      let factSolut = document.getElementById("factorial");
      factSolut.addEventListener("click", () => {
        factorial(infoUser);
      });
    });

    // Reset al recargar la pagina
    reset();
  });
}

// funcion que resetea la informacion
function reset() {
  let reset = document.getElementById("clear");
  reset.addEventListener("click", () => {
    window.location.reload();
  });
}
