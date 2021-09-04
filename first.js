// function calcFunction(price, tax){
//     // if a => 100, return a
//     const result = price + price * tax;
//     return result;
// }
// const myResult = calcFunction(100, 0.1);
// console.log(myResult)

// const myName = "Shino";
// alert(myName)

function benchpress() {
    var w = parseInt(document.getElementById('w').value);
    var r = parseInt(document.getElementById('r').value);
    var maxWeight = (w * r / 40 + w);
    // var final = (maxWeight.toFixed(2));
    document.getElementById('result').innerHTML="Your Maximum bench press weight is " + maxWeight + "!";
}