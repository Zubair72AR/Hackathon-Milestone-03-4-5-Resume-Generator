/////////////////////////////////////////////////
// Add+ More Input for Languages
/////////////////////////////////////////////////
let langDiv = document.querySelector("#lang-Div") as HTMLElement;
let delLangBtn = document.querySelector("#del-Lang-Btn") as HTMLElement;
let delAddBtnLang = 1;

function addLanguageBtn() {
  // Creating HTML Element
  let addLanBtn = document.createElement("input");
  // New Attributes for Created Element
  addLanBtn.setAttribute("type", "text");
  addLanBtn.setAttribute("id", `language-Input${delAddBtnLang}`);
  addLanBtn.classList.add("form-input");
  addLanBtn.setAttribute("placeholder", "Enter Here");
  addLanBtn.setAttribute("value", "");
  addLanBtn.setAttribute("required", "");
  // Inserting Input
  langDiv.append(addLanBtn);
  // Increment for Managing Delete Button
  delAddBtnLang++;
  // Show Delete Button
  if (delAddBtnLang == 2) {
    delLangBtn.style.display = "inline-block";
  }
}

// Deleting inputs if user created more then requirement
function delLanguageBtn() {
  // Removing last Element
  langDiv.removeChild(langDiv.children[`${delAddBtnLang - 1}`]);
  delAddBtnLang--;
  // Hide Delete Button
  if (delAddBtnLang <= 1) {
    delLangBtn.style.display = "none";
  }
}

/////////////////////////////////////////////////
// Add+ More Input for Expertise
/////////////////////////////////////////////////
let expertDiv = document.querySelector("#expertise-Div") as HTMLElement;
let delExpertBtn = document.querySelector("#del-Expert-Btn") as HTMLElement;
let delAddBtnExpert = 1;

function addExpertBtn() {
  // Creating HTML Element
  let addExpeBtn = document.createElement("input");
  // New Attributes for Created Element
  addExpeBtn.setAttribute("type", "text");
  addExpeBtn.setAttribute("id", `expertise-Input${delAddBtnExpert}`);
  addExpeBtn.classList.add("form-input");
  addExpeBtn.setAttribute("required", "");
  addExpeBtn.setAttribute("placeholder", "Enter Here");
  addExpeBtn.setAttribute("value", "");
  // Inserting Input
  expertDiv.append(addExpeBtn);
  // Increment for Managing Delete Button
  delAddBtnExpert++;
  // Show Delete Button
  if (delAddBtnExpert == 2) {
    delExpertBtn.style.display = "inline-block";
  }
}

// Deleting inputs if user created more then requirement
function delExpertiseBtn() {
  // Removing last Element
  expertDiv.removeChild(expertDiv.children[`${delAddBtnExpert - 1}`]);
  delAddBtnExpert--;
  // Hide Delete Button
  if (delAddBtnExpert <= 1) {
    delExpertBtn.style.display = "none";
  }
}

/////////////////////////////////////////////////
// Add+ More Input for Experience
/////////////////////////////////////////////////
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
  addExperiElem.setAttribute(
    "id",
    `experiencePosition-Input${delAddBtnExperi}`
  );
  addExperiElem.classList.add("form-input");
  addExperiElem.setAttribute("placeholder", "Enter your position title here");
  addExperiElem.setAttribute("value", "");
  addExperiElem.setAttribute("required", "");

  // Creating HTML Element 02
  let addExperiElem2 = document.createElement("input");
  // New Attributes for Created Element
  addExperiElem2.setAttribute("type", "text");
  addExperiElem2.setAttribute(
    "id",
    `experienceCompYear-Input${delAddBtnExperi}`
  );
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
  addExperiElem3.setAttribute("id", `experiencePara-Input${delAddBtnExperi}`);
  addExperiElem3.setAttribute("rows", "3");
  addExperiElem3.classList.add("form-input");
  addExperiElem3.setAttribute("placeholder", "Enter here");
  addExperiElem3.setAttribute("required", "");

  // Inserting Above Created Elements Inside Div
  divExperi.appendChild(addExperiElem);
  divExperi.appendChild(addExperiElem2);
  divExperi.appendChild(addExperiElem3);

  // Given Position where to be Appear
  addExperiBtn.before(divExperi);

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
  if (delAddBtnExperi <= 1) {
    delExperiBtn.style.display = "none";
  }
}

/////////////////////////////////////////////////
// Add+ More Input for Education
/////////////////////////////////////////////////
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
  addEducElement.setAttribute(
    "id",
    `educationInstitute-Input${delAddBtnEducation}`
  );
  addEducElement.classList.add("form-input");
  addEducElement.setAttribute("placeholder", "Name of Institute");
  addEducElement.setAttribute("value", "");
  addEducElement.setAttribute("required", "");

  // Creating HTML Element 02
  let addEducElement2 = document.createElement("input");
  // New Attributes for Created Element
  addEducElement2.setAttribute("type", "text");
  addEducElement2.setAttribute(
    "id",
    `educationDegree-Input${delAddBtnEducation}`
  );
  addEducElement2.classList.add("form-input");
  addEducElement2.setAttribute("placeholder", "Enter Degree");
  addEducElement2.setAttribute("value", "");
  addEducElement2.setAttribute("required", "");

  // Creating HTML Element 03
  let addEducElement3 = document.createElement("input");
  // New Attributes for Created Element
  addEducElement3.setAttribute("type", "text");
  addEducElement3.setAttribute(
    "id",
    `educationYear-Input${delAddBtnEducation}`
  );
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
  if (delAddBtnEducation <= 1) {
    delEducButton.style.display = "none";
  }
}

/////////////////////////////////////////////////
// Add+ More Input for Skills
/////////////////////////////////////////////////
let skillDiv = document.querySelector("#skill-div") as HTMLElement;
let delSkillButton = document.querySelector("#del-Skill-Btn") as HTMLElement;
let delAddBtnSkill = 1;

function addSkillsBtn() {
  // Creating HTML Element
  let addSkillButton = document.createElement("input");
  // New Attributes for Created Element
  addSkillButton.setAttribute("type", "text");
  addSkillButton.setAttribute("id", `skills-Input${delAddBtnSkill}`);
  addSkillButton.classList.add("form-input");
  addSkillButton.setAttribute("required", "");
  addSkillButton.setAttribute("placeholder", "Enter Here");
  addSkillButton.setAttribute("value", "");
  // Inserting Input
  skillDiv.append(addSkillButton);
  // Increment for Managing Delete Button
  delAddBtnSkill++;
  // Show Delete Button
  if (delAddBtnSkill == 2) {
    delSkillButton.style.display = "inline-block";
  }
}

// Deleting inputs if user created more then requirement
function delSkillBtn() {
  // Removing last Element
  skillDiv.removeChild(skillDiv.children[`${delAddBtnSkill - 1}`]);
  delAddBtnSkill--;
  // Hide Delete Button
  if (delAddBtnSkill <= 1) {
    delSkillButton.style.display = "none";
  }
}

/////////////////////////////////////////////////
// Generating CV - Collecting Data from Input form into CV
/////////////////////////////////////////////////

let langList = document.querySelector("#lang-List") as HTMLElement;
let skillGenResume = document.querySelector("#skillGenResume") as HTMLElement;
let sectionEducation = document.querySelector("#eduGenResume") as HTMLElement;
// General Function for Data Collecting
function dataTransfer(collect: string, provide: string) {
  let dataCollector = document.querySelector(`${collect}`) as HTMLElement;
  let dataProvider = document.querySelector(`${provide}`) as HTMLInputElement;
  dataCollector.innerText = dataProvider.value;
}
/*
function dataTransferLi(collectLi: string, provideLi: string) {
  let dataCollectorLi = document.querySelector(`${collectLi}`) as HTMLElement;
  let dataProviderLi = document.querySelector(
    `${provideLi}`
  ) as HTMLInputElement;

  let createLi = document.createElement("li");

  createLi = dataProviderLi.innerHTML;
  collectLi.append(dataCollectorLi);
}*/

function generateResume() {
  /////////////////////////////////////////////////
  // Single Input Data Collecting
  /////////////////////////////////////////////////
  dataTransfer(".name", "#fullName-Input");
  dataTransfer(".designation", "#designation-Input");
  dataTransfer(".para-AboutMe", "#aboutMe-Input");
  dataTransfer(".phone", "#phone-Input");
  dataTransfer(".envelope", "#email-Input");
  dataTransfer(".location", "#address-Input");

  // Multiple Data Collecting

  /////////////////////////////////////////////////
  // Languages Section Data Collecting
  /////////////////////////////////////////////////

  dataTransfer("#lang-Li", "#language-Input");
  // For Loop if More Inputs are created by User
  for (let lang = 1; lang < delAddBtnLang; lang++) {
    let createLi = document.createElement("li");
    createLi.setAttribute("id", `#lang-Li${lang}`);

    langList.appendChild(langList.children[`${lang + 1}`]);

    dataTransfer(`#lang-Li${lang}`, `#language-Input${lang}`);
  }

  /////////////////////////////////////////////////
  // Experience Section Data Collecting
  /////////////////////////////////////////////////
  dataTransfer(".title-Experience", "#experiencePosition-Input");
  dataTransfer(".comp-Experience", "#experienceCompYear-Input");
  dataTransfer(".para-Experience", "#experiencePara-Input");

  // For Loop if More Inputs are created by User
  for (let exp = 1; exp < delAddBtnExperi; exp++) {
    // Creating Main Div
    let divAddExp = document.createElement("div");
    divAddExp.classList.add("add-Sec-Experience");

    // Creating HTML Data 01
    let addDataExp = document.createElement("h5");
    // Adding Class for Apply CSS Style
    addDataExp.classList.add("title-Experience");
    addDataExp.setAttribute("id", `title-Experience${exp}`);

    // Creating HTML Data 02
    let addDataExp2 = document.createElement("p");
    // Adding Class for Apply CSS Style
    addDataExp2.classList.add("comp-Experience");
    addDataExp2.setAttribute("id", `comp-Experience${exp}`);

    // Creating HTML Data 03
    let addDataExp3 = document.createElement("p");
    // Adding Class for Apply CSS Style
    addDataExp3.classList.add("para-Experience");
    addDataExp3.setAttribute("id", `para-Experience${exp}`);

    // Inserting Above Created Elements Inside Div
    divAddExp.appendChild(addDataExp);
    divAddExp.appendChild(addDataExp2);
    divAddExp.appendChild(addDataExp3);

    // Given Position where to be Appear
    sectionEducation.before(divAddExp);

    // Transferring Data if Created More
    dataTransfer(`#title-Experience${exp}`, `#experiencePosition-Input${exp}`);
    dataTransfer(`#comp-Experience${exp}`, `#experienceCompYear-Input${exp}`);
    dataTransfer(`#para-Experience${exp}`, `#experiencePara-Input${exp}`);
  }

  /////////////////////////////////////////////////
  // Education Section Data Collecting
  /////////////////////////////////////////////////
  dataTransfer(".institute-Education", "#educationInstitute-Input");
  dataTransfer(".degree-Education", "#educationDegree-Input");
  dataTransfer(".year-Education", "#educationYear-Input");

  // For Loop if More Inputs are created by User
  for (let edu = 1; edu < delAddBtnEducation; edu++) {
    // Creating Main Div
    let divAddEdu = document.createElement("div");
    divAddEdu.classList.add("add-Sec-Education");

    // Creating HTML Data 01
    let addDataEdu = document.createElement("h5");
    // Adding Class for Apply CSS Style
    addDataEdu.classList.add("institute-Education");
    addDataEdu.setAttribute("id", `institute-Education${edu}`);

    // Creating HTML Data 02
    let addDataEdu2 = document.createElement("p");
    // Adding Class for Apply CSS Style
    addDataEdu2.classList.add("degree-Education");
    addDataEdu2.setAttribute("id", `degree-Education${edu}`);

    // Creating HTML Data 03
    let addDataEdu3 = document.createElement("p");
    // Adding Class for Apply CSS Style
    addDataEdu3.classList.add("year-Education");
    addDataEdu3.setAttribute("id", `year-Education${edu}`);

    // Inserting Above Created Elements Inside Div
    divAddEdu.appendChild(addDataEdu);
    divAddEdu.appendChild(addDataEdu2);
    divAddEdu.appendChild(addDataEdu3);

    // Given Position where to be Appear
    skillGenResume.before(divAddEdu);

    // Transferring Data if Created More
    dataTransfer(
      `#institute-Education${edu}`,
      `#educationInstitute-Input${edu}`
    );
    dataTransfer(`#degree-Education${edu}`, `#educationDegree-Input${edu}`);
    dataTransfer(`#year-Education${edu}`, `#educationYear-Input${edu}`);
  }
}
