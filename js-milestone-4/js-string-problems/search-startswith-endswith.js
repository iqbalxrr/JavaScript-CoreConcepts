const lyrics = ('sada sada kala kala .rong jomasa sada kala ')



var searchString = 'sada';

// includes 

// const LyricsLower = lyrics.toLowerCase();

// var searchStringLower = searchString.toLowerCase();

// var result = LyricsLower.includes(searchStringLower); 
// console.log(result);

var doesExsisOnline = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExsisOnline);

// // -------------------------------

// // index of

// console.log(lyrics.indexOf('kala'));
// console.log(lyrics.indexOf('tomi'));

// if(lyrics.indexOf('kala') !== -1 ){
//     console.log('exists inside the string ');
// }
// else{
//     console.log('exists find it ');
// }


// // ---------------------------------

// // startswith 

// console.log(lyrics.startsWith('sada'));

// // endswith

// const fileName = 'myfile.pdf';
// const otherFile = 'mypic.jpg';

//  const cheekResult =fileName.endsWith('pdf');

// console.log(cheekResult);

// const lyriCs = ['amr soner bangla ami tomei valobasi , chirodin tomr akas tomr batas ']


// var searchAnyString = 'amr';

// var result = lyriCs.toLowerCase().includes(searchAnyString.toLowerCase());
// console.log(result);


const lyriCs = ['amr soner bangla ami tomei valobasi , chirodin tomr akas tomr batas'];

var searchAnyString = 'amr';

// Convert the lyrics to a single string and make both the lyrics and search string lowercase
var result = lyriCs.join(' ').toLowerCase().includes(searchAnyString.toLowerCase());

console.log(result); // This will output true or false




