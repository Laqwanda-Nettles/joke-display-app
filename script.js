"use strict";

const URL = "https://v2.jokeapi.dev/joke/Any?safe-mode&type=single";

async function fetchJoke() {
  try {
    const results = await fetch(URL);
    const data = await results.json();
    console.log(data);
    const joke = document.getElementById("joke");
    joke.innerHTML = `${data.joke}`;
  } catch (error) {
    console.error(error);
  }
}
fetchJoke();
document.getElementById("jokeBtn").addEventListener("click", fetchJoke);
