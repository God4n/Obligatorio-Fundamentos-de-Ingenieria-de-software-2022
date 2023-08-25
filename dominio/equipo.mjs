/**
 * Clase que representa un Equipo.
 */
export default class Equipo {

  /**
   * Crea una instacia de la clase Equipo.
   * @constructor
   * @param {string} pais - El nombre del pais.
   * @param {string} escudo - Link a la foto del escudo de la seleccion.
   */
  constructor(pais, escudo) {
    this.pais = pais;
    this.escudo = escudo;
  }
}
