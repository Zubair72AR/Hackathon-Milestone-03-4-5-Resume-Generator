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
let expertDiv = document.querySelector("#expertise-Div");
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
    expertDiv.append(addExpeBtn);
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
    expertDiv.removeChild(expertDiv.children[`${delAddBtnExpert--}`]);
    // Hide Delete Button
    if (delAddBtnExpert == 0) {
        delExpertBtn.style.display = "none";
    }
}
// Add+ More Input for Skills
let skillDiv = document.querySelector("#skill-div");
let delSkillButton = document.querySelector("#del-Skill-Btn");
let delAddBtnSkill = 0;
function addSkillsBtn() {
    // Creating HTML Element
    let addSkillButton = document.createElement("input");
    // New Attributes for Created Element
    addSkillButton.setAttribute("type", "text");
    addSkillButton.setAttribute("id", "skills-Input");
    addSkillButton.classList.add("form-input");
    addSkillButton.setAttribute("required", "");
    addSkillButton.setAttribute("placeholder", "Enter Here");
    addSkillButton.setAttribute("value", "");
    // Inserting Input
    skillDiv.append(addSkillButton);
    // Increment for Managing Delete Button
    delAddBtnSkill++;
    // Show Delete Button
    if (delAddBtnSkill == 1) {
        delSkillButton.style.display = "inline-block";
    }
    console.log(delAddBtnSkill);
}
// Deleting inputs if user created more then requirement
function delSkillBtn() {
    // Removing last Element
    skillDiv.removeChild(skillDiv.children[`${delAddBtnSkill--}`]);
    // Hide Delete Button
    if (delAddBtnSkill == 0) {
        delSkillButton.style.display = "none";
    }
}
