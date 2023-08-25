/**
 * Clase que representa un Sistema.
 */
export default class Sistema {
  /**
   * Crea una instacia de la clase Sistema.
   * @constructor
   */
  constructor() {
    this.grupos = [];
    this.equipos = [];
    this.partidos = [];
  }

  /**
   * Agrega un Grupo a la lista de Grupos, si el nombre no esta en uso.
   * @param {Object} grupo - Objeto del Grupo que se va a agregar.
   */
  agregarGrupo(grupo) {
    const esta = this.grupos.some((m) => m.nombre == grupo.nombre);
    if (!esta) {
      this.grupos.push(grupo);
    } else {
      throw new Error(`El nombre ya esta en uso.`);
    }
  }
  /**
   * Devuelve la lista de Grupos.
   * @return {Object[]} - Array con todos los objetos de la clase Grupo.
   */
  getGrupos() {
    return this.grupos;
  }

  /**
   * Agrega un Equipo a la lista de Equipos,
   * si el nombre del pais no esta en uso.
   * @param {Object} equipo - Objeto del Equipo que se va a agregar.
   */
  agregarEquipo(equipo) {
    const esta = this.equipos.some((m) => m.pais == equipo.pais);
    if (!esta) {
      this.equipos.push(equipo);
    } else {
      throw new Error(`El país ya existe.`);
    }
  }
  /**
   * Devuelve la lista de Equipos.
   * @return {Object[]} - Array con todos los objetos de la clase Equipo.
   */
  getEquipos() {
    return this.equipos;
  }
  /**
   * Devuelve el objeto Equipo del pais solicitado, en caso de existir.
   * @param {string} pais - Nombre del pais.
   * @return {Object} - Objeto Equipo del pais solicitado.
   */
  devolverEquipo(pais) {
    for (let i = 0; i < this.getEquipos().length; i++) {
      if (this.getEquipos()[i].pais === (pais)) {
        return this.getEquipos()[i];
      }
    }
    throw new Error('El equipo de este pais no se encuentra en el mundial');
  }

  /**
   * Agrega un Partido a la lista de Partidos, si el id no esta en uso.
   * @param {Object} partido - Objeto del Partido que se va a agregar.
   */
  agregarPartido(partido) {
    const esta = this.partidos.some((m) => m.id == partido.id);
    if (!esta) {
      this.partidos.push(partido);
    } else {
      throw new Error(`El partido ya existe.`);
    }
  }
  /**
   * Devuelve la lista de Partidos.
   * @return {Object[]} - Array con todos los objetos de la clase Partido.
   */
  getPartidos() {
    return this.partidos;
  }
  /**
   * Devuelve el objeto Partido que tiene ese id, en caso de existir.
   * @param {number} id - Identificador del partido a buscar.
   * @return {Object} - Objeto del Partido solicitado.
   */
  devolverPartido(id) {
    for (let i = 0; i < this.getPartidos().length; i++) {
      if (this.getPartidos()[i].id === id) {
        return this.getPartidos()[i];
      }
    }
    throw new Error('No existe el partido');
  }
  /**
   * Devuelve el partido jugado por los dos equipos, en caso de existir.
   * @param {string} local - Nombre del equipo local.
   * @param {string} vis - Nombre del equipo visitante.
   * @return {Object} - Objeto del Partido solicitado.
   */
  partidoPorParticipantes(local, vis) {
    for (let i = 0; i < this.getPartidos().length; i++) {
      if (this.getPartidos()[i].local == local &&
      this.getPartidos()[i].visitante == vis) {
        return this.getPartidos()[i];
      }
    }
    throw new Error('No existe el partido');
  }
}
