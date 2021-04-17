const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const divContainer = document.querySelector(".container");


async function makeApiCall() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const games= results.results;
        divContainer.innerHTML = ""
      for(let i = 0; i < games.length; i++){
        if (i === 8){
          break
        }
        divContainer.innerHTML +=`<div class="style"><p>Name:${games[i].name} </p>
                                       <p>Rating:${games[i].rating}</p> 
                                       <p>Amount of tags:${games[i].tags.length}</p>
                                 </div>`;
      }
  
    } catch (error) {
      
        divContainer.innerHTML = "Unexpected error occurred";
    }
}

makeApiCall();
