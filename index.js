const inputText = document.querySelector("#input-text"),
  translateBtn = document.querySelector("#translate"),
  outputText = document.querySelector("#output-text");
translateBtn.addEventListener("click", translateToMinionLang);

function constructURL(text) {
  const URL = "https://api.funtranslations.com/translate/minion.json";
  return `${URL}?text=${text}`;
}

function errorHandler(error) {
  console.log("Something went wrong! Please try again..", error);
}

function translateToMinionLang() {
  fetch(constructURL(inputText.value))
    .then((response) => response.json())
    .then((data) => (outputText.innerText = data.contents.translated))
    .catch(errorHandler);
}
