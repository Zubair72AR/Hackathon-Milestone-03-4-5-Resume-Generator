// function for adding more inputs

function addInputs("id",) {
  // Creating HTML Element
  let createInputs = document.createElement("input");
  // New Attributes for Created Element
  createInputs.setAttribute("type", "text");
  createInputs.setAttribute("id", "language-Input");
  createInputs.classList.add("form-input");
  createInputs.setAttribute("placeholder", "Enter Here");
  createInputs.setAttribute("value", "");
  createInputs.setAttribute("required", "");
  // Inserting Input
  langDiv.append(addLanBtn);
  // Increment for Managing Delete Button
  delAddBtnLang++;
  // Show Delete Button
  if (delAddBtnLang == 1) {
    delLangBtn.style.display = "inline-block";
  }
}
function addInput(idName:string,placeholder:string) {
    // Creating HTML Element
    let createInput = document.createElement("input");
    // New Attributes for Created Element
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", `${idName}`);
    createInput.classList.add("form-input");
    createInput.setAttribute("placeholder", `${placeholder}`);
    createInput.setAttribute("value", "");
    createInput.setAttribute("required", "");
}
