const contextContainer = document.getElementById("context-sentences");

const foreignSentences = contextContainer.querySelectorAll('[class^="s"]');
const translatedSentences = contextContainer.querySelectorAll('[class^="t"]');

const parsedSentences = document.getElementById("parsed-sentences");

// Loop through the foreign sentences first and generate HTML
for (let i = 0; i < foreignSentences.length; i++) {
    const detailsElement = document.createElement("details");
    const summaryElement = document.createElement("summary");
    summaryElement.textContent = foreignSentences[i].textContent;
    detailsElement.appendChild(summaryElement);

// Work with the translated sentences
      const divElement = document.createElement("div");
      divElement.className = "translation";
      divElement.textContent = translatedSentences[i] ? translatedSentences[i].textContent : '';
      detailsElement.appendChild(divElement);

      parsedSentences.appendChild(detailsElement);

      const lineBreak = document.createElement("br");
      parsedSentences.appendChild(lineBreak);    
}
