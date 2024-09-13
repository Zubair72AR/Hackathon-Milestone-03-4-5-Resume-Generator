// Add+ More Input for Form
let delLanguageBtn = document.querySelector("#del-Language-Btn") as HTMLElement;
let inTheLanguageSec = document.querySelector("#language-Sec") as HTMLElement;
let beforeAddLanBtn = document.querySelector(
  "#add-Language-Btn"
) as HTMLElement;
let delAddBtn = 1;

function addLanguageButton() {
  // Creating HTML Element Input for Adding More Languages
  let addLanBtn = document.createElement("input");
  // New Attributes for Created Input
  addLanBtn.setAttribute("type", "text");
  addLanBtn.setAttribute("id", "language-Input");
  addLanBtn.classList.add("form-input");
  addLanBtn.setAttribute("placeholder", "Enter Here");
  addLanBtn.setAttribute("value", "");
  addLanBtn.setAttribute("required", "");
  // Inserting Input
  inTheLanguageSec.insertBefore(addLanBtn, beforeAddLanBtn);
  // Increment for Managing Delete Button
  delAddBtn++;
  // will Hide Delete Button
  if (delAddBtn == 2) {
    delLanguageBtn.style.display = "inline-block";
  }
}

// Deleting inputs if user created more then required
function delLanguageButton() {}
