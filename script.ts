// Add+ More Input for Languages
let langDiv = document.querySelector("#lang-Div") as HTMLElement;
let delLangBtn = document.querySelector("#del-Lang-Btn") as HTMLElement;
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
let expertDiv = document.querySelector("#expertise-Div") as HTMLElement;
let delExpertBtn = document.querySelector("#del-Expert-Btn") as HTMLElement;
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
let skillDiv = document.querySelector("#skill-div") as HTMLElement;
let delSkillButton = document.querySelector("#del-Skill-Btn") as HTMLElement;
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

// Add+ More Input for Experience
let addExperiBtn = document.querySelector("#add-Experi-Btn") as HTMLElement;
let delExperiBtn = document.querySelector("#del-Experi-Btn") as HTMLElement;
let idExperiSec = document.querySelector("#id-Experi-Sec") as HTMLElement;
let delAddBtnExperi = 1;

function addExperienceBtn() {
  // Creating New Div
  let divExperi = document.createElement("div");
  divExperi.setAttribute("id", "experience-Sec");

  // Creating HTML Element 01
  let addExperiElem = document.createElement("input");
  // New Attributes for Created Element
  addExperiElem.setAttribute("type", "text");
  addExperiElem.setAttribute("id", "experiencePosition-Input");
  addExperiElem.classList.add("form-input");
  addExperiElem.setAttribute("placeholder", "Enter your position title here");
  addExperiElem.setAttribute("value", "");
  addExperiElem.setAttribute("required", "");

  // Creating HTML Element 02
  let addExperiElem2 = document.createElement("input");
  // New Attributes for Created Element
  addExperiElem2.setAttribute("type", "text");
  addExperiElem2.setAttribute("id", "experienceCompYear-Input");
  addExperiElem2.classList.add("form-input");
  addExperiElem2.setAttribute(
    "placeholder",
    "Company Name / Jan 2020 - Dec 2021"
  );
  addExperiElem2.setAttribute("value", "");
  addExperiElem2.setAttribute("required", "");

  // Creating HTML Element 03
  let addExperiElem3 = document.createElement("textarea");
  // New Attributes for Created Element
  addExperiElem3.setAttribute("id", "experiencePara-Input");
  addExperiElem3.setAttribute("rows", "3");
  addExperiElem3.classList.add("form-input");
  addExperiElem3.setAttribute("placeholder", "Enter here");
  addExperiElem3.setAttribute("required", "");

  // Inserting Above Created Elements Inside Div
  divExperi.appendChild(addExperiElem);
  divExperi.appendChild(addExperiElem2);
  divExperi.appendChild(addExperiElem3);

  // Given Position where to be Appear
  delExperiBtn.before(divExperi);

  // Increment for Managing Delete Button
  delAddBtnExperi++;
  // Show Delete Button
  if (delAddBtnExperi == 2) {
    delExperiBtn.style.display = "inline-block";
  }
}

// Deleting inputs if user created more then requirement
function delExperienceBtn() {
  // Removing Element
  idExperiSec.removeChild(idExperiSec.children[`${delAddBtnExperi--}`]);
  // Hide Delete Button
  if (delAddBtnExperi == 1) {
    delExperiBtn.style.display = "none";
  }
}

// Add+ More Input for Education
let addEducButton = document.querySelector("#add-Education-Btn") as HTMLElement;
let delEducButton = document.querySelector("#del-Education-Btn") as HTMLElement;
let idEduSec = document.querySelector("#id-Edu-Sec") as HTMLElement;
let delAddBtnEducation = 1;

function addEducationBtn() {
  // Creating New Div
  let div = document.createElement("div");
  div.setAttribute("id", "education-Sec");

  // Creating HTML Element 01
  let addEducElement = document.createElement("input");
  // New Attributes for Created Element
  addEducElement.setAttribute("type", "text");
  addEducElement.setAttribute("id", "educationInstitute-Input");
  addEducElement.classList.add("form-input");
  addEducElement.setAttribute("placeholder", "Name of Institute");
  addEducElement.setAttribute("value", "");
  addEducElement.setAttribute("required", "");

  // Creating HTML Element 02
  let addEducElement2 = document.createElement("input");
  // New Attributes for Created Element
  addEducElement2.setAttribute("type", "text");
  addEducElement2.setAttribute("id", "educationDegree-Input");
  addEducElement2.classList.add("form-input");
  addEducElement2.setAttribute("placeholder", "Enter Degree");
  addEducElement2.setAttribute("value", "");
  addEducElement2.setAttribute("required", "");

  // Creating HTML Element 03
  let addEducElement3 = document.createElement("input");
  // New Attributes for Created Element
  addEducElement3.setAttribute("type", "text");
  addEducElement3.setAttribute("id", "educationYear-Input");
  addEducElement3.classList.add("form-input");
  addEducElement3.setAttribute("placeholder", "Jan 2020 - Dec 2021");
  addEducElement3.setAttribute("value", "");
  addEducElement3.setAttribute("required", "");

  // Inserting Above Created Elements Inside Div
  div.appendChild(addEducElement);
  div.appendChild(addEducElement2);
  div.appendChild(addEducElement3);

  // Given Position where to be Appear
  addEducButton.before(div);

  // Increment for Managing Delete Button
  delAddBtnEducation++;
  // Show Delete Button
  if (delAddBtnEducation == 2) {
    delEducButton.style.display = "inline-block";
  }
}

// Deleting inputs if user created more then requirement
function delEducationBtn() {
  // Removing Element
  idEduSec.removeChild(idEduSec.children[`${delAddBtnEducation--}`]);
  // Hide Delete Button
  if (delAddBtnEducation == 1) {
    delEducButton.style.display = "none";
  }
}
