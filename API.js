const URL = "https://pokeapi.co/api/v2/pokemon/ditto";

const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
}