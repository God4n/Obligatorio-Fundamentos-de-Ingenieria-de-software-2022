import Grupo from './grupo.mjs';

describe('creación de un grupo', () => {
  const unGrupo = new Grupo('Grupo1', 10, 15, true, 'manuwu');
  describe('funcional', () => {
    it('funciona', () =>{
      expect(unGrupo.nombre).toBe('Grupo1');
      expect(unGrupo.participantes).toBe(10);
      expect(unGrupo.maximo).toBe(15);
      expect(unGrupo.privado).toBe(true);
      expect(unGrupo.lider).toBe('manuwu');
    });
  });
  describe('grupo sin participantes', () => {
    it('da error', () =>{
      expect(() => {
        unGrupo.setPart(0);
      }).toThrow(Error);
    });
  });
  describe('grupo sin suficientes participantes', () =>{
    it('da error', () =>{
      expect(() => {
        unGrupo.setMax(1);
      }).toThrow(Error);
    });
  });
});
