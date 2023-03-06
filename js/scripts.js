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
    createListItem.appendChild(pokeButton);
    pokemonListFolder.appendChild(createListItem);

    pokeButton.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }
 
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

  function showModal(title, img, text) {
    let modalContainer = document.querySelector('#modal-container');

    // Clear all existing modal content
    modalContainer.innerHTML = '';

    let modal = document.createElement('div');
    modal.classList.add('modal');

    // Add the new modal content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    let myImage = document.createElement('img');
      myImage.src = img
    let contentElement = document.createElement('p');
    contentElement.innerText = text;



    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(myImage);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);



    modalContainer.classList.add('is-visible');
    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  }
  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
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
      pokemonRepository.showModal(pokemon.name, pokemon.imageUrl, 'Height: ' + pokemon.height);
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



