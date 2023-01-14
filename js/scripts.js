let pokemonList = [
    {name: "Charmander", height: .6,type: ['fire', 'flying']},
    {name: "Charmeleon", height: 1.1, type: ['fire', 'flying']},
    {name: "Charizard", heihgt: 1.7, type: ['fire', 'flying']},
    {name: "Pikachu", height: .4, type: 'electric'},
    {name: "Raichu", height: .8, type: 'electric'},
    {name: "Squirtle", height: .5, type: 'water'},
    {name: "Wartortle", height:1, type: 'water'},
    {name: "Blastoise", height: 1.6, type: 'water'},
];

for (let i=0; i < pokemonList.length;i++) { 
    if (pokemonList[i].height >= 1.1){
        console.log(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow, that's big!" + "<br>");
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + "<br>");
    
    } else {
        console.log(pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + "<br>")
    }
}
