import Partido from './partido.mjs';

describe('creación de un partido', () => {
  const unPartido = new Partido(1, 'Barcelona',
      'Nacional', '1/10/2023', '21:00', 1, 1);
  describe('Verificacion de parametros', () => {
    it('Funciona', () =>{
      expect(unPartido.id).toBe(1);
      expect(unPartido.local).toBe('Barcelona');
      expect(unPartido.visitante).toBe('Nacional');
      expect(unPartido.fecha).toBe('1/10/2023');
      expect(unPartido.hora).toBe('21:00');
      expect(unPartido.resLocal).toBe(1);
      expect(unPartido.resVisitante).toBe(1);
      expect(unPartido.predLocal).toBe(-1);
      expect(unPartido.predVis).toBe(-1);
    });
  });
  describe('Verificacion de set', () => {
    it('Funciona', () =>{
      describe('Local', () =>{
        unPartido.setLocal(1);
        expect(unPartido.predLocal).toBe(1);
      });
      describe('Visitantes', () =>{
        unPartido.setVis(2);
        expect(unPartido.predVis).toBe(2);
      });
    });
    it('No funciona', () =>{
      expect(() =>{
        unPartido.setLocal(-1);
      }).toThrow(Error);
      expect(() =>{
        unPartido.setVis(-2);
      }).toThrow(Error);
    });
  });
});
