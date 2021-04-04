const getTextArea = document.querySelector("#input-text"),
  getButton = document.querySelector("#translate"),
  outputDiv = document.querySelector("#output-text");
getButton.addEventListener("click", translateToMinionLang);

function constructURL(text) {
  const URL = "https://api.funtranslations.com/translate/minion.json";
  return `${URL}?text=${text}`;
}

function errorHandler(error) {
  console.log("An error has occured", error);
}

function translateToMinionLang() {
  fetch(constructURL(getTextArea.value))
    .then((response) => response.json())
    .then((data) => (outputDiv.innerText = data.contents.translated))
    .catch(errorHandler);
}
