"use strict";
// Add+ More Input for Languages
let langDiv = document.querySelector("#lang-Div");
let delLangBtn = document.querySelector("#del-Lang-Btn");
let delAddBtnLang = 0;
function addLanguageBtn() {
    // Creating HTML Element
    let addLanBtn = document.createElement("input");
    // New Attributes for Created Element
    addLanBtn.setAttribute("type", "text");
    addLanBtn.setAttribute("id", "language-Input");
    addLanBtn.classList.add("form-input");
    addLanBtn.setAttribute("placeholder", "Enter Here");
    addLanBtn.setAttribute("value", "");
    addLanBtn.setAttribute("required", "");
    // Inserting Input
    langDiv.append(addLanBtn);
    // Increment for Managing Delete Button
    delAddBtnLang++;
    // Show Delete Button
    if (delAddBtnLang == 1) {
        delLangBtn.style.display = "inline-block";
    }
}
// Deleting inputs if user created more then requirement
function delLanguageBtn() {
    // Removing last Element
    langDiv.removeChild(langDiv.children[`${delAddBtnLang--}`]);
    // Hide Delete Button
    if (delAddBtnLang == 0) {
        delLangBtn.style.display = "none";
    }
}
// Add+ More Input for Expertise
let ExpertDiv = document.querySelector("#expertise-Div");
let delExpertBtn = document.querySelector("#del-Expert-Btn");
let delAddBtnExpert = 0;
function addExpertBtn() {
    // Creating HTML Element
    let addExpeBtn = document.createElement("input");
    // New Attributes for Created Element
    addExpeBtn.setAttribute("type", "text");
    addExpeBtn.setAttribute("id", "expertise-Input");
    addExpeBtn.classList.add("form-input");
    addExpeBtn.setAttribute("required", "");
    addExpeBtn.setAttribute("placeholder", "Enter Here");
    addExpeBtn.setAttribute("value", "");
    // Inserting Input
    ExpertDiv.append(addExpeBtn);
    // Increment for Managing Delete Button
    delAddBtnExpert++;
    // Show Delete Button
    if (delAddBtnExpert == 1) {
        delExpertBtn.style.display = "inline-block";
    }
}
// Deleting inputs if user created more then requirement
function delExpertiseBtn() {
    // Removing last Element
    ExpertDiv.removeChild(ExpertDiv.children[`${delAddBtnExpert--}`]);
    // Hide Delete Button
    if (delAddBtnExpert == 0) {
        delExpertBtn.style.display = "none";
    }
}
