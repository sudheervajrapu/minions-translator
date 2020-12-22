const getTextArea = document.querySelector("#input-text"),
  getButton = document.querySelector("#translate"),
  outputDiv = document.querySelector("#output-text");
getButton.addEventListener("click", clickMe);

function constructURL(text) {
  const URL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
  return `${URL}?text=${text}`;
}

function errorHandler(error) {
  console.log("An error has occured", error);
}

function clickMe() {
  const URL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
  fetch(constructURL(getTextArea.value))
    .then((response) => response.json())
    .then((data) => (outputDiv.innerText = data.contents.translated))
    .catch(errorHandler);
}
