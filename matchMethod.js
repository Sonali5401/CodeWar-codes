function findVowels(str) {
    return str.match(/[aeiou]/ig);
  }

  console.log(findVowels('dctacademy')) //['a','a','e']

  /* Match Method in JS */
var str = "The rain in SPAIN stays mainly in the plain";
var res = str.match(/ain/gi);
console.log(res)