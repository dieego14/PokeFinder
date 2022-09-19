console.log("Script running");

// Helper function - gets a random integer up to (but not including) the maximum
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Capture the three major foci of user interaction in variables.
const submitButton = document.querySelector("#submit");
const queryField = document.querySelector("#search");
const imageHolderDiv = document.querySelector("#imageholder");
// Log the elements to confirm that the querySelectors worked.
console.log(submitButton);
console.log(queryField);
console.log(imageHolderDiv);

const characterName = document.querySelector("#characterName");
const characterType = document.querySelector("#characterType");
const characterAbilities = document.querySelector("#characterAbilities");
const characterHeight = document.querySelector("#characterHeight");
const characterId = document.querySelector("#characterId");

submitButton.addEventListener("click", async (e) => {
  let topic = queryField.value;
  if (queryField.value >= 898){
    alert("Please choose a number less than 899");
    imageHolderDiv = false;
  };
  // } else if (queryField.value < 898){
  //   imageHolderDiv = true
  
  let url = "https://pokeapi.co/api/v2/pokemon/";
  url += topic;
  url += "?limit=898";
  let response = await fetch(url);
  console.log(response);
  let data =  await response.json();
  console.log(data);
  
  // Displayed info
  let imageUrl = data.sprites.front_default;
  let name = data.name;
  let type = data.types[0].type.name;
  let abilities = data.abilities[0].ability.name;
  let height = data.height;
  let ID = data.id;
  console.log(imageUrl);
  imageHolderDiv.innerHTML = ` <figure>
          <img src="${imageUrl}"
            <figcaption id="characterId" class="has-text-centered">
              ID: ${ID}
            </figcaption>
        </figure>`;
  characterName.innerHTML = `Name: ${name}`;
  characterType.innerHTML = `Type: ${type}`;
  characterAbilities.innerHTML = `Abilities: ${abilities}`;
  characterHeight.innerHTML = `Height: ${height}`;
  console.log(ID);
});
