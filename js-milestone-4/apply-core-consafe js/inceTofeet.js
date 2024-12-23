//  ince to feet convater

function inceTofeet(inces){
    const feet = inces / 12;
    return feet;

}

const dadaInce = 144;
const dadaFeet = inceTofeet(dadaInce);
console.log(dadaFeet);
