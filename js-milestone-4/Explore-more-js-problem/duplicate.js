var names = ['abul', 'kabul', 'gabul', 'sabul', 'abul', 'kabul', 'sabul'];

function removeDuplicate(names){
    var unique = [];
    for( let i = 0; i < names.length; i++){
        var name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }   
    }
    return unique;

}
var uniqueName = removeDuplicate(names);
console.log(uniqueName);
