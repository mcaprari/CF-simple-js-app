let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; 

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
      // 'height' in pokemon &&
      // 'type' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      document.write("Not a pokemon.");
    }
  }

  function getAll() {
    return pokemonList;
  }

  // add list item
  function addListItem(pokemon) {
    // organizes funtions and selectors
    let pokemonListFolder= document.querySelector('.pokemon-list')
    let createListItem= document.createElement('li');
    let pokeButton= document.createElement('button');
    // creates button for each pokemon added
    pokeButton.innerText= pokemon.name;
    pokeButton.classList.add("button-class");
    listItem.appendChild(pokeButton);
    pokemonList.appendChild(listItem);

    pokeButton.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }
  //   document.querySelector('.pokemon-list');
  //   pokemonListFolder.appendChild(createListItem);
  //   pokemonListFolder.lastElementChild.appendChild(pokeButton);
  //   let buttonSelect= pokemonListFolder.lastElementChild.querySelector('button');
  //   buttonSelect.classList.add(pokemon.typeClass);
  //   //creates an even listener to every button
  //   buttonSelect.addEventListener('click', function () {
  //     showDetails(pokemon);
  // });
  // }

  function loadList() {
    return fetch(apiUrl).then
    (function (response) {
      return response.json();
    })
    .then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    })
    .catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
  })();

  pokemonRepository.loadList().then(function () {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });
  
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  
  /* //adds pokemon to pokemonlist
  pokemonRepository.add({name: 'Charmander', height: .6, types: [' fire', ' flying'], typeClass: 'pokemontype__fireFlying'});
  pokemonRepository.add({name: 'Chareleon', height: 1.1, types: ['fire', 'flying'], typeClass: 'pokemontype__fireFlying'});
  pokemonRepository.add({name: 'Charizard', height: 1.7, types: ['fire', ' flying'], typeClass: 'pokemontype__fireFlying'});
  pokemonRepository.add({name: 'Pikachu', height: .4, types: [' eletric'], typeClass: 'pokemontype__electric'});
  pokemonRepository.add({name: 'Raichu', height: .8, types: ['electric'], typeClass: 'pokemontype__electric'});
  pokemonRepository.add({name: 'Squirtle', height: .5, types: ['water'], typeClass: 'pokemontype__water'});
  pokemonRepository.add({name: 'Bulbasaur', height: 1, types: [' water'], typeClass: 'pokemontype__water'});
  pokemonRepository.add({name: 'Charmander', height: 1.6, types: ['water'], typeClass: 'pokemontype__water'});

  // loop to creat button for each pokemon
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  }); */



