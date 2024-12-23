// wood need,....
// cheir = 3 cft
// table = 10 cft
// bed = 20 cft 

function woodCalculate(cheirQuantity, tableQuantity, bedQuantity){

    const cheirWood = 3;
    const tableWood = 10;
    const bedWood = 20 ;

    const cheirWoodNeed = cheirQuantity * cheirWood;
    const tableWoodNeed = tableQuantity * tableWood;
    const bedWoodNeed = bedQuantity * bedWood;
    
    const totalWoodNeed = cheirWoodNeed + tableWoodNeed + bedWoodNeed; 

    return totalWoodNeed;

}
const woodNeed = woodCalculate(1, 1, 1);
console.log(woodNeed);
