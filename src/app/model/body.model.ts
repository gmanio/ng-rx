export class BodyModel {
  date: number;
  weight: number;   // kg
  muscle: number;   // percent
  fat: number;      // percent
  rm: number;       // kcal
  bmi: number;

  constructor(object) {
    this.date = object.date || new Date().getTime();
    this.weight = object.weight || 0;
    this.muscle = object.muscle || 0;
    this.fat = object.fat || 0;
    this.rm = object.rm || 0;
    this.bmi = object.bmi || 0;
  }
}
