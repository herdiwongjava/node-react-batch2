console.log("if");
console.log("");

if (true) {
  console.log("eksekusi hasil true");
}

if (false) {
  console.log("eksekusi hasil false");
}

var mood = "happy";
if (mood == "happy") {
  console.log("hari ini aku bahagia");
}

console.log("");
console.log("if else");

var mood = "happy";
if (mood == "happy") {
  console.log("hari ini aku bahagia");
} else {
  console.log("saya tidak happy");
}

console.log("");
console.log("if else if");

var mood = "happy";
if (mood == "happy") {
  console.log("hari ini aku bahagia");
} else if (mood == "sedih") {
  console.log("hari ini aku sedih");
} else {
  console.log("saya baik-baik saja");
}

console.log("");
console.log("nasted if");

var minimarketStatus = "open";
var telur = "soldout";
var buah = "soldout";
if (minimarketStatus == "open") {
    console.log("Saya akan membeli telur dan buah");
    if (telur == "soldout" && buah == "soldout") {
        console.log("belanjaan saya tidak lengkap");
    } else if (telur == "soldout") {
        console.log("telur habis");
    } else if (buah == "soldout") {
        console.log("buah habis");
    }
} else {
  console.log("minimarket tutup, saya pulang lagi");
}


console.log("");
console.log("switch case");
var buttonPushed = 3;
switch(buttonPushed) {
    case 1 : {console.log('matikan TV!'); break;}
    case 2 : {console.log('turunkan volume TV!'); break;}
    case 3 : {console.log('tingkatkan volume TV!'); break;}
    case 4 : {console.log('matikan suara TV!'); break;}
    default : {console.log('Tidak terjadi apa-apa');}
}


console.log("");
console.log("Ternary");
var age = 17;
var bisaVote = age > 17 ? "bisa vote" : "tidak boleh vote"
console.log(bisaVote)
