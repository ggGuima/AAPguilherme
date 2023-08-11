const ALLERGENICOS = new Map([
  [1, "eggs"],
  [2, "peanuts"],
  [4, "shellfish"],
  [8, "strawberries"],
  [16, "tomatoes"],
  [32, "chocolate"],
  [64, "pollen"],
  [128, "cats"],
]);
export class Allergies {
  constructor(valor) { 
    this.valor = valor
  }
  list() {
    let alergias = [];
    for (let alergia of ALLERGENICOS.keys())
      if (alergia & this.valor) alergias.push(ALLERGENICOS.get(alergia));
    return alergias;
  }
  allergicTo(tipoAlergia) {
    return this.list().some((i) => i == tipoAlergia);
  }
}