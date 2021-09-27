var btnTranslate =document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var result = document.querySelector("#output");

var serverURL ="https://api.funtranslations.com/translate/mandalorian.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function clickHandler(){
    var inputText = textInput.value;

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            result.innerText = translatedText;
        })
};

btnTranslate.addEventListener("click", clickHandler);