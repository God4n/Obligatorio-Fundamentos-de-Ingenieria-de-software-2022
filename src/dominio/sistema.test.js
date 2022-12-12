import Sistema from './sistema.mjs';
import Partido from './partido.mjs';
import Grupo from './grupo.mjs';
import Equipo from './equipo.mjs';

describe('Pruebas Sistema', () => {
  const unEquipo = new Equipo('Uruguay', 'http://url.prueba');
  const unPartido = new Partido(1, 'Barcelona',
      'Nacional', '1/10/2023', '21:00', 1, 1);
  const unGrupo = new Grupo('Grupo1', 10, 15, true, 'manuwu');
  const unSistema = new Sistema();
  describe('Pruebas con agregar equipo', () =>{
    it('Agregar un equipo que no existe', () =>{
      unSistema.agregarEquipo(unEquipo);
      expect(unSistema.getEquipos()).toEqual([unEquipo]);
    });
    it('Agregar un equipo que ya existe', () =>{
      expect(() => {
        unSistema.agregarEquipo(unEquipo);
      }).toThrow(Error);
    });
  });
  describe('Pruebas con agregar grupo', () =>{
    it('Agregar un grupo que no existe', () =>{
      unSistema.agregarGrupo(unGrupo);
      expect(unSistema.getGrupos()).toEqual([unGrupo]);
    });
    it('Agregar un grupo que ya existe', () =>{
      expect(() => {
        unSistema.agregarGrupo(unGrupo);
      }).toThrow(Error);
    });
  });
  describe('Pruebas con agregar partido', () =>{
    it('Agregar un partido que no existe', () =>{
      unSistema.agregarPartido(unPartido);
      expect(unSistema.getPartidos()).toEqual([unPartido]);
    });
    it('Agregar un partido que ya existe', () =>{
      expect(() => {
        unSistema.agregarPartido(unPartido);
      }).toThrow(Error);
    });
  });
  describe('Pruebas con devolver', () =>{
    it('Devolver partido existente', () =>{
      expect(unSistema.devolverPartido(unPartido.id)).toEqual(unPartido);
    });
    it('Devolver partido que no existe', () =>{
      expect(() => {
        unSistema.devolverPartido(30);
      }).toThrow(Error);
    });
    it('Devolver equipo existente', () =>{
      expect(unSistema.devolverEquipo(unEquipo.pais)).toEqual(unEquipo);
    });
    it('Devolver equipo que no existe', () =>{
      expect(() => {
        unSistema.devolverEquipo('Chile');
      }).toThrow(Error);
    });
  });
  describe('Partido por participantes', () =>{
    it('Devuelve un partido existente', () =>{
      expect(unSistema.partidoPorParticipantes(unPartido.local,
          unPartido.visitante)).toEqual(unPartido);
    });
    it('Devolver equipo que no existe', () =>{
      expect(() => {
        expect(unSistema.partidoPorParticipantes('Brasil', 'Uruguay'));
      }).toThrow(Error);
    });
  });
});
