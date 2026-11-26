/*
 * ¿Para qué usamos export?
 * Este archivo es un módulo de JavaScript. Sus funciones no están disponibles
 * automáticamente en otros archivos: export permite que se puedan importar.
 *
 * En JsBasico.jsx utilizamos:
 *   import * as ejercicios from '../utils/ejercicios.js';
 * Esto reúne las funciones exportadas bajo el nombre ejercicios. Por ejemplo:
 *   ejercicios.sumarPrecios(['5', '8', '3']);
 *
 * Una función auxiliar que solo se llame dentro de este archivo no necesita exportarse.
 */

// EJEMPLOS RESUELTOS

// El control entrega texto: Number lo convierte antes del cálculo.
export function precioPareja(precio) {
  precio = Number(precio);
  let cantidad = 2;
  return precio * cantidad;
}

// Convertimos la edad recibida como texto antes de compararla.
export function puedeEntrar(edad) {
  edad = Number(edad);
  if (edad >= 18) {
    return 'Puede entrar';
  }
  return 'Necesita acompañante';
}

// Recibimos un array de precios. Un acumulador guarda la suma del recorrido.
// Number convierte cada precio antes de sumar, ya que los controles envían texto.
export function sumarPrecios(precios) {
  let total = 0;
  // length permite trabajar con cualquier cantidad de precios, incluso ninguno.
  for (let i = 0; i < precios.length; i = i + 1) {
    total = total + Number(precios[i]);
  }
  return total;
}

// EJERCICIOS: completa los TODO conservando los parámetros.
// 1. Minutos enteros: 0 <= inicio < fin <= 1440.
// duracion(600, 645) devuelve 45.
export function duracion(inicio, fin) {
  inicio = Number(inicio);
  fin = Number(fin);
  if(Number.isInteger(inicio) && Number.isInteger(fin) && inicio >= 0 && inicio < fin && fin <= 1440){
    return fin - inicio;
  }
  // TODO: resta inicio a fin.
  return "Parametros no válidos";
}

// 2. Devuelve un booleano: ambos enteros y 0 <= inicio < fin <= 1440.
// horarioValido(600, 645) → true; horarioValido(645, 645) → false.
export function horarioValido(inicio, fin) {
  inicio = Number(inicio);
  fin = Number(fin);
  // TODO: combina Number.isInteger y comparaciones con &&.
  if(Number.isInteger(fin) && Number.isInteger(inicio) && inicio < fin){
    return true;
  }
  return false;
}

// 3. Recibe un array de géneros y el texto buscado. Cuenta coincidencias exactas.
// contarPorGenero(['indie', 'rock', 'indie'], 'indie') → 2.
// contarPorGenero([], 'indie') → 0. Debe funcionar con cualquier longitud.
export function contarPorGenero(generos, buscado) {
  // TODO: empieza un contador en 0, recorre generos con for y compara cada valor.
  let contador= 0;
  for (let i = 0; i < generos.length; i++) {
    if(generos[i]=== buscado)
        contador++;
  }
  return contador;
}

// 4. Recibe un array de duraciones no negativas, en minutos, como textos.
// minutosTotales(['45', '90', '60']) → 195; minutosTotales([]) → 0.
// Debe funcionar con cualquier longitud y sin modificar el array recibido.
export function minutosTotales(duraciones) {
  // TODO: empieza un acumulador en 0 y recorre duraciones con for.
  // Convierte cada valor con Number(duraciones[i]) antes de sumarlo.
  let acumulador = 0;
  for (let i = 0; i < duraciones.length; i++) {
    acumulador += Number(duraciones[i]);
  }
  return acumulador;
}

// 5. Dos textos: nombre de artista y consulta.
// Ignora mayúsculas y espacios exteriores de la consulta. Texto vacío coincide.
// coincideTexto('Bruma Solar', ' BRUMA ') → true.
export function coincideTexto(artista, texto) {
  // TODO: usa trim(), toLowerCase() e includes(). Devuelve un booleano.
  let busqueda= texto.trim().toLowerCase();
  return artista.toLowerCase().includes(busqueda);
}

// 6. Dos códigos de escenario. Devuelve un booleano.
// coincideEscenario('rio', 'rio') → true; ('rio', 'bosque') → false.
export function coincideEscenario(escenario, buscado) {
  // TODO: compara los parámetros con igualdad estricta (===).
  if(escenario=== buscado){
    return true;
  }
  return false;
}

// 7. Convertir minutos a hora.
// Convierte minutos enteros entre 0 y 1440 al formato HH:MM. Casos: 635 → 10:35; 0 → 00:00; 1440 → 24:00. Para valores inválidos devuelve 'Dato no válido'.
export function hora(minutos) {
  // TODO: Usa Number, Number.isInteger, Math.floor, el resto (%) y padStart.
  let duracion=Number(minutos);
  if(Number.isInteger(duracion) && duracion>=0 && duracion <= 1440){
    let horas= Math.floor(duracion/60);
    let min= duracion % 60;
    let minMostrados= String(min).padStart(2,"0");
    let hrMostrados= String(horas).padStart(2,"0");
    let duracionMonstrada= hrMostrados + ":"+minMostrados;
    return duracionMonstrada;
  }
  return "Dato no válido";
}

// 8. Aplicar un descuento.
// Devuelve el precio final como número con un máximo de dos decimales. Precio no negativo y porcentaje entre 0 y 100, ambos finitos. Rechaza campos vacíos. Casos: 20 y 15 → 17; 19.99 y 10 → 17.99; -1 o 120 % → 'Dato no válido'.
export function aplicarDescuento(precio, porcentaje) {
  // TODO: Valida antes de operar. toFixed devuelve texto; convierte de nuevo con Number.
  let precioNum=Number(precio);
  let porcentajeNum= Number(porcentaje);
  if(precioNum >=0 && 0<= porcentajeNum && porcentajeNum<= 100 && Number.isFinite(precioNum) &&Number.isFinite(porcentajeNum)){
    let descuento = precioNum *(porcentajeNum/100);
    let final= precioNum-descuento;
    let precioFinal= final.toFixed(2);
    return Number(precioFinal);
  }
  return "Dato no válido";
}

// 9. Encontrar la mayor duración.
// Devuelve la mayor duración numérica sin modificar el array. Casos: 45;90;60 → 90; 60;60 → 60; lista vacía → null. Los elementos serán duraciones válidas no negativas.
export function mayorDuracion(duraciones) {
  // TODO: Recorre el array y conserva el máximo. Convierte cada elemento con Number.
  if (duraciones.length===0){
    return null;
  }
  let duracion;
  let maximo=0;
  for (let i = 0; i < duraciones.length; i++) {
    duracion = Number(duraciones[i]);
    if (duracion <0 || !Number.isInteger(duracion)){
      return "Dato no válido"
    }
    if (duracion> maximo){
      maximo= duracion;
    }
  }
    return maximo;
}

// 10. Eliminar géneros repetidos.
// Devuelve un array nuevo sin duplicados y conserva el orden. Quita espacios exteriores, pero distingue mayúsculas. Casos: indie;rock;indie → [indie, rock]; lista vacía → [].
export function generosUnicos(generos) {
  // TODO: Usa un array acumulador, trim e includes antes de añadir cada género.
  let acumulador=[];
  let genero;
  for (let i = 0; i < generos.length; i++) {
    genero= generos[i].trim();
    if (!acumulador.includes(genero)){
      acumulador.push(genero);
    }
  }
  return acumulador;
}

// 11. Buscar artistas.
// Devuelve un array nuevo de nombres que contienen la consulta, ignorando mayúsculas y espacios exteriores de esta. Conserva los nombres originales. Una consulta vacía devuelve todos; 'zzz' devuelve [].
export function buscarArtistas(artistas, texto) {
  // TODO: Usa filter con una función con nombre, toLowerCase e includes. No uses flechas.
  let nombres=[];
  let text= texto.trim().toLowerCase();
  for (let i = 0; i < artistas.length; i++) {
    let artista= artistas[i].toLowerCase();
    if (artista.includes(text)){
      nombres.push(artistas[i]);
    }
  }
  return nombres;
}

// 12. Convertir duraciones a horas.
// Devuelve un array nuevo con las duraciones en horas. Casos: 60;90;120 → [1, 1.5, 2]; lista vacía → []. No modifiques el array original.
export function duracionesEnHoras(duraciones) {
  // TODO: Usa map con una función con nombre. Convierte cada elemento con Number y divide por 60.
  // funcion con nombre que pasa a horas

  let resultado = [];
    for (let i = 0; i < duraciones.length; i++) {
       resultado.push(Number(duraciones[i]) / 60);
    }
    return resultado;
}

// 13. Calcular una compra.
// Cada precio se corresponde con la cantidad de la misma posición. Devuelve el total como número, redondeado a dos decimales. Casos: 12;8;5 y 2;1;3 → 47; ambas listas vacías → 0. Longitudes distintas → 'Datos no válidos'. Los elementos serán precios no negativos y cantidades enteras no negativas.
export function calcularCompra(precios, cantidades) {
  // TODO: Comprueba las longitudes. Usa reduce con una función con nombre, índice y acumulador inicial 0. Convierte ambos valores con Number.
  if(precios.length !== cantidades.length){
    return "Datos no válidos"
  }
  let total=0;
  for (let i = 0; i < precios.length; i++) {
    let precioNum = Number(precios[i]);
    let cantidadNum = Number(cantidades[i]);
    total+=(precioNum*cantidadNum);
  }
  return Number(total.toFixed(2));
}

// 14. Detectar solapamientos.
// Recibe dos intervalos en minutos enteros, entre 0 y 1440 y con inicio menor que fin. Casos: 600–660 y 630–690 → true; 600–660 y 660–720 → false; intervalos separados → false. Si algún intervalo no es válido devuelve 'Horario no válido'.
export function solapan(inicioA, finA, inicioB, finB) {
  // TODO: Convierte los cuatro parámetros con Number. Valida y comprueba si cada inicio es anterior al fin del otro intervalo.
  let inicioANum=Number(inicioA);
  let finANum=Number(finA);
  let inicioBNum=Number(inicioB);
  let finBNum=Number(finB);

  if (Number.isInteger(inicioANum)&& Number.isInteger(finANum)&&inicioANum >= 0 && finANum <= 1440 && inicioANum < finANum && Number.isInteger(inicioBNum) && Number.isInteger(finBNum) && inicioBNum >= 0 && finBNum <= 1440 && inicioBNum < finBNum){
    return inicioANum < finBNum && inicioBNum < finANum;
  }
  return "Horario no válido";
}
