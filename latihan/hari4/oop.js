console.log("");
console.log("CLASS");
console.log("-----------------");

class Car {
  constructor(brand, factory) {
    this._brand = brand;
    this._factory = factory;
    this._sound = "honk! honk! vroomvroom";
    this._color = "";
  }

  get color() {
    return this._color;
  }

  set color(x) {
    this._color = x;
  }

  present(x) {
    return `I have a new ${x}, INI METHOD di CLASS CAR`;
  }

  static hello() {
    return "Hello!!, INI STATIC METHOD di CLASS CAR";
  }
}

var inovam = new Car("innovam", "tptotwo");
console.log(inovam);
console.log(inovam.present("car"));
inovam.color = "red";
console.log(inovam);
console.log(Car.hello());

console.log("");
console.log("INHERITANCE");
console.log("-----------------");

class Orang {
  constructor(nama) {
    this.nama = "jhon";
    this.umur = 20;
  }

  berjalan() {
    return "TAP TAP TAP";
  }
}

class Guru extends Orang {
  constructor(nama, umur) {
    super(nama, umur), (this.school = "");
  }

  berjalan() {
    return "TAP TAP TAP";
  }
}

let guru = new Guru("abidin", 24);
guru.school = "BPVP";
console.log(guru);
console.log(guru.berjalan());
