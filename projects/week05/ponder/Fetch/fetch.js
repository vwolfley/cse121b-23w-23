// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";

let results = null;

async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}

async function getPokemonList(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doStuffList(data);
  }
}

// function compare(a, b) {
//     if (a.name > b.name) {
//       // sort b before a
//       return 1;
//     } else if (a.name < b.name) {
//       // a and b different but unchanged (already in the correct order)
//       return -1;
//     } else return 0; // a and b are equal
//   }
  
  
//   function sortPokemon(list) {
//     let sortedList = list.sort(compare);
//     return sortedList;
//   }

function doStuff(data) {
  const outputElement = document.querySelector("#output");
  results = data;
  const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
  outputElement.innerHTML = html;
  console.log("first: ", results);
}

function doStuffList(data) {
  console.log(data);
  const pokeListElement = document.querySelector("#outputList");
  let pokeList = data.results;
  pokeList.sort((a, b) => (a.name > b.name ? 1 : -1))
  pokeList.forEach((currentItem) => {
    const html = `<li>${currentItem.name}</li>`;
    pokeListElement.innerHTML += html;
  });
}

getPokemon(url);
getPokemonList(urlList);

console.log("second: ", results);