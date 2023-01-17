let pokemonList = [
    { name: "Charmander", height: 0.6, type: ["fire", "flying"] },
    { name: "Charmeleon", height: 1.1, type: ["fire", "flying"] },
    { name: "Charizard", height: 1.7, type: ["fire", "flying"] },
    { name: "Pikachu", height: 4, type: "electric" },
    { name: "Raichu", height: 8, type: "electric" },
    { name: "Squirtle", height: 5, type: "water" },
    { name: "Wartortle", height: 1, type: "water" },
    { name: "Blastoise", height: 1.6, type: "water" },

]

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height >= 5) {
      document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "m) - Wow, that is a big pokemon!" + "<br>");
    } else if (pokemonList[i].height >= 1.6 && pokemonList[i].height < 5) {
      document.write(pokemonList[i].name + " (height: " +pokemonList[i].height + "m) - That is a medium pokemon!" + "m) - That is a medium pokemon!" + "<br>");
    } else {
      document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "m) - That is a small pokemon!" + "<br>");
    }
  }
  
