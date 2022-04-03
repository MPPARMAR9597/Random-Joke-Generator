var getJokeSectionFromDocument = document.getElementById("show_joke_section");
var newJokeButton = document.getElementById("generate_new_joke");
var fetchJokeApiUrl = "https://v2.jokeapi.dev/joke/Development?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

var JokeGeneratorFunction = () => {
    getJokeSectionFromDocument.classList.remove("effect");
    fetch(fetchJokeApiUrl)
        .then(getApiData => getApiData.json())
        .then(getApiItems => {
            getJokeSectionFromDocument.textContent = `${getApiItems.joke}`;
            getJokeSectionFromDocument.classList.add("effect");
        });
}
newJokeButton.addEventListener("click", JokeGeneratorFunction);

JokeGeneratorFunction();