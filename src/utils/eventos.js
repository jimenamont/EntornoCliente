/*
 * Eventos del navegador: React llama a estos manejadores cuando interactuamos.
 * export permite importarlos en Eventos.jsx mediante import * as eventos.
 * Recibimos el evento cuando necesitamos saber qué control se ha utilizado.
 * currentTarget es el elemento que tiene conectado el manejador.
 */
//Sin filter / finito / map / reduce
// EJEMPLOS RESUELTOS

// onClick: leemos el contador, lo convertimos a número y sumamos una visita.
export function sumarVisita() {
  let salida = document.getElementById('eventos-visitas');
  let visitas = Number(salida.textContent);
  salida.textContent = visitas + 1;
}

// onChange: .value contiene el texto del input que tiene el manejador.
export function saludarAsistente(evento) {
  let nombre = evento.currentTarget.value.trim();
  let salida = document.getElementById('eventos-saludo');
  if (nombre === '') {
    salida.textContent = 'Escribe tu nombre para recibir un saludo.';
  } else {
    salida.textContent = 'Hola, ' + nombre + '. ¡Bienvenido al festival!';
  }
}

// onSubmit: preventDefault evita el envío normal y la recarga del documento.
// elements.namedItem busca cada control por su atributo name.
export function calcularCompra(evento) {
  evento.preventDefault();
  let formulario = evento.currentTarget;
  let precioTexto = formulario.elements.namedItem('precio').value;
  let cantidadTexto = formulario.elements.namedItem('cantidad').value;
  let precio = Number(precioTexto);
  let cantidad = Number(cantidadTexto);
  let salida = document.getElementById('eventos-compra');
  if (precioTexto.trim() === '' || cantidadTexto.trim() === '' ||
      !Number.isFinite(precio) || precio < 0 ||
      !Number.isInteger(cantidad) || cantidad < 1) {
    salida.textContent = 'Introduce un precio no negativo y una cantidad entera mayor que 0.';
    return;
  }
  let total = precio * cantidad;
  salida.textContent = 'Total: ' + total.toFixed(2) + ' €';
}

// EJERCICIOS: completa los TODO.

// 1. Alterna la propiedad hidden del listado eventos-cancelados.
// Cambia el texto del botón (evento.currentTarget) a Mostrar/Ocultar cancelados.
// Informa también del nuevo estado en eventos-estado-cancelados.
export function alternarCancelados(evento) {
  // TODO: lee hidden, invierte su valor y actualiza el texto del botón.
  document.getElementById('eventos-estado-cancelados').textContent = 'Ejercicio pendiente: alternarCancelados.';
}

// 2. Lee el código del select con evento.currentTarget.value.
// rio → 'Escenario Río: aforo de 500 personas.'
// bosque → 'Escenario Bosque: aforo de 300 personas.'
// Valor vacío → 'Selecciona un escenario.' Salida: eventos-escenario.
export function seleccionarEscenario(evento) {
  // TODO: utiliza if/else o switch para elegir el mensaje.
  document.getElementById('eventos-escenario').textContent = 'Ejercicio pendiente: seleccionarEscenario.';
}

// 3. Lee el valor del range y muestra el porcentaje en eventos-volumen.
// Ejemplo: al seleccionar 75, la salida debe ser '75 %'.
export function cambiarVolumen(evento) {
  // TODO: utiliza evento.currentTarget.value y añade el símbolo %.
  document.getElementById('eventos-volumen').textContent = 'Ejercicio pendiente: cambiarVolumen.';
}

// 4. Lee .checked en eventos-genero-indie, eventos-genero-rock y eventos-genero-jazz.
// Construye un array con los géneros marcados y muestra su join(', ').
// Si no hay ninguno, muestra 'Ningún género seleccionado'. Salida: eventos-generos.
export function elegirGeneros() {
  // TODO: usa un array y un if para cada casilla.
  document.getElementById('eventos-generos').textContent = 'Ejercicio pendiente: elegirGeneros.';
}

// 5. Lee los controles nombre y cantidad de eventos-formulario-reserva.
// Usa trim para el nombre y Number para la cantidad. Debe ser un entero de 1 a 6.
// Datos válidos: 'Reserva ficticia: Ana, 2 entradas.'; inválidos: 'Revisa nombre y cantidad.'
// Salida: eventos-reserva. No se envía ni se almacena ninguna reserva real.
export function reservarEntradas(evento) {
  // Evita recargar
  evento.preventDefault();
  // TODO: lee evento.currentTarget.elements, valida y muestra el resumen.
  document.getElementById('eventos-reserva').textContent = 'Ejercicio pendiente: reservarEntradas.';
}

// 6. Restablece eventos-formulario-reserva mediante reset().
// Después vacía el textContent de eventos-reserva. Funciona aunque el 5 esté pendiente.
export function reiniciarReserva() {
  // TODO: localiza el formulario, llama a reset y limpia la salida.
  document.getElementById('eventos-reserva').textContent = 'Ejercicio pendiente: reiniciarReserva.';
}
