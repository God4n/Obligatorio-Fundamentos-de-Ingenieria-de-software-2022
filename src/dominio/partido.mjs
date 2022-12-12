/**
 * Clase que representa un Partido.
 */
export default class Partido {
  /**
   * Crea una instacia de la clase Partido.
   * @constructor
   * @param {number} id - El identificador del partido.
   * @param {string} local - Nombre del equipo local.
   * @param {string} visitante - Nombre del equipo visitante.
   * @param {string} fecha - Fecha en la que se jugara (formato: DIA, DD/MM).
   * @param {string} hora - Hora en la que se juega el partido.
   * @param {number} resLocal - Cantidad de goles anotados por el local.
   * @param {number} resVisitante - Cantidad de goles anotados por el visitante.
   */
  constructor(id, local, visitante, fecha, hora, resLocal, resVisitante) {
    this.id = id;
    this.local = local;
    this.visitante = visitante;
    this.fecha = fecha;
    this.hora = hora;
    this.resLocal = resLocal;
    this.resVisitante = resVisitante;
    this.predLocal = -1;
    this.predVis = -1;
  }

  /**
   * En caso de ser una cantidad valida,
   * cambia la prediccion realizada por el usuario de los goles
   * anotados por el local.
   * @param {number} goles - Cantidad predecida de goles del local.
   */
  setLocal(goles) {
    if (goles >= 0) {
      this.predLocal = goles;
    } else {
      throw new Error('Los goles marcados deben ser un numero mayor a cero');
    }
  }

  /**
   * En caso de ser una cantidad valida,
   * cambia la prediccion realizada por el usuario de los goles
   * anotados por el visitante.
   * @param {number} goles - Cantidad predecida de goles del visitante.
   */
  setVis(goles) {
    if (goles >= 0) {
      this.predVis = goles;
    } else {
      throw new Error('Los goles marcados deben ser un numero mayor a cero');
    }
  }
}
