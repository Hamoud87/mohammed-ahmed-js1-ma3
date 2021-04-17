const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const resultsContainer = document.querySelector(".results");

function createHTML(results){
  const facts = results.all;
  resultsContainer.innerHTML = "";
  for(let i = 0; i < facts.length; i++){
  if(i === 8){
  break;
}
    resultsContainer.innerHTML +=`<div>${facts[i].text}</div>`;
  }
}
async function getResults(){
  try{
    const response = await fetch(url);
    const data = await response.json();
    const facts = data.all;
    createHTML(facts);
  } catch (error){
    resultsContainer.innerHTML = displayError("An error occurred when calling the API");
  }
}
getResults();
