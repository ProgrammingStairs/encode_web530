var p = 1000;
var r = 3.45;
var t = 2;

var amt = p * Math.pow((1+r/100),t);
console.log("Amount : "+amt);

var ci = amt-p;
console.log("Compound Interest : "+ci);
