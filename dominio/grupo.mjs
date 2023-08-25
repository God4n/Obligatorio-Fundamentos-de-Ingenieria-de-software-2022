/**
 * Clase que representa un Grupo.
 */
export default class Grupo {
  /**
   * Crea una instacia de la clase Grupo.
   * @constructor
   * @param {string} nombre - El nombre del Grupo.
   * @param {number} part - Cantidad actual de participantes.
   * @param {number} max - Cantidad maxima de participantes.
   * @param {boolean} priv - Si es privado o no.
   * @param {string} lider - Nombre del usuario con mas puntos.
   */
  constructor(nombre, part, max, priv, lider) {
    this.nombre = nombre;
    this.setPart(part);
    this.setMax(max);
    this.privado = priv;
    this.lider = lider;
  }

  /**
   * En caso de ser una cantidad valida,
   * cambia la cantidad de participantes actuales en el equipo.
   * @param {number} part - La nueva cantidad de participantes actuales.
   */
  setPart(part) {
    if (part > 0) {
      this.participantes = part;
    } else {
      throw new Error('Tiene que haber algun jugador');
    }
  }

  /**
   * En caso de ser una cantidad valida,
   * cambia la cantidad de participantes maximos en el equipo.
   * @param {number} max - La nueva cantidad de participanes maximos.
   */
  setMax(max) {
    if (max > 1) {
      this.maximo = max;
    } else {
      throw new Error(
          'Tiene que haber por lo menos dos participantes en el grupo');
    }
  }
}
