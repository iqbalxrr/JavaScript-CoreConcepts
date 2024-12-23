const lyrics = ('sada sada kAla kala .rong jomasa sada kala ')

// split >> {khondo khondo kora bivogto kora  }

let parts = lyrics.split(' ');
console.log(parts);
let sentence = lyrics.split('.');
console.log(sentence);
let charecter = lyrics.split('');
console.log(charecter);
// output 
/*[
  's', 'a', 'd', 'a', ' ', 's', 'a',
  'd', 'a', ' ', 'k', 'A', 'l', 'a',
  ' ', 'k', 'a', 'l', 'a', ' ', '.',
  'r', 'o', 'n', 'g', ' ', 'j', 'o',
  'm', 'a', 's', 'a', ' ', 's', 'a',
  'd', 'a', ' ', 'k', 'a', 'l', 'a',
  ' '
]

*/

// slice/ substring >> {tukra tukra kora / pis pis kore kata / fali fali kora }

let partial = lyrics.slice(4,9);
console.log(partial);

let partial2 = lyrics.substring(4,9);

console.log(partial2);

