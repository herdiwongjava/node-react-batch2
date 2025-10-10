console.log("");
console.log("TUGAS NO.1 A - CLASS");
console.log("-----------------");

class Animal {
  constructor(name) {
    this._name = name;
    this._legs = 4;
    this._cold_blooded = false;
  }

  get name() {
    return this._name;
  }

  set name(x) {
    this._name = x;
  }

  get legs() {
    return this._legs;
  }

  set legs(x) {
    this._legs = x;
  }

  get cold_blooded() {
    return this._cold_blooded;
  }

  set cold_blooded(x) {
    this._cold_blooded = x;
  }
}

var sheep = new Animal("shaun");

console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false
sheep.legs = 3;
console.log(sheep.legs);

console.log("");
console.log("TUGAS NO.1 B - CLASS");
console.log("-----------------");

class Ape extends Animal {
  constructor(name, cold_blooded) {
    super(name, cold_blooded);
    this._legs = 4;
  }

  yell() {
    return "Auoooo";
  }
}

class Frog extends Animal {
  constructor(name, legs, cold_blooded) {
    super(name, legs, cold_blooded);
  }

  jump() {
    return "hop hop";
  }
}

var sungokong = new Ape("kera sakti");
console.log(sungokong.yell()); // "Auooo"
sungokong.legs = 2;
console.log(sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);

var kodok = new Frog("buduk");
console.log(kodok.jump()); // "hop hop"
console.log(kodok.name);
console.log(kodok.legs);
console.log(kodok.cold_blooded);



console.log("");
console.log("TUGAS NO.2 - CLASS");
console.log("-----------------");

class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer = null;
  }

  render() {
    const date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    const output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}


var clockClass = new Clock({ template: "h:m:s" });
clockClass.start();
