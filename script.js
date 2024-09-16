"use strict";
/////////////////////////////////////////////////
// Add+ More Input for Languages
/////////////////////////////////////////////////
let langDiv = document.querySelector("#lang-Div");
let delLangBtn = document.querySelector("#del-Lang-Btn");
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
let expertDiv = document.querySelector("#expertise-Div");
let delExpertBtn = document.querySelector("#del-Expert-Btn");
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
let addExperiBtn = document.querySelector("#add-Experi-Btn");
let delExperiBtn = document.querySelector("#del-Experi-Btn");
let idExperiSec = document.querySelector("#id-Experi-Sec");
let delAddBtnExperi = 1;
function addExperienceBtn() {
    // Creating New Div
    let divExperi = document.createElement("div");
    divExperi.setAttribute("id", "experience-Sec");
    // Creating HTML Element 01
    let addExperiElem = document.createElement("input");
    // New Attributes for Created Element
    addExperiElem.setAttribute("type", "text");
    addExperiElem.setAttribute("id", `experiencePosition-Input${delAddBtnExperi}`);
    addExperiElem.classList.add("form-input");
    addExperiElem.setAttribute("placeholder", "Enter your position title here");
    addExperiElem.setAttribute("value", "");
    addExperiElem.setAttribute("required", "");
    // Creating HTML Element 02
    let addExperiElem2 = document.createElement("input");
    // New Attributes for Created Element
    addExperiElem2.setAttribute("type", "text");
    addExperiElem2.setAttribute("id", `experienceCompYear-Input${delAddBtnExperi}`);
    addExperiElem2.classList.add("form-input");
    addExperiElem2.setAttribute("placeholder", "Company Name / Jan 2020 - Dec 2021");
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
let addEducButton = document.querySelector("#add-Education-Btn");
let delEducButton = document.querySelector("#del-Education-Btn");
let idEduSec = document.querySelector("#id-Edu-Sec");
let delAddBtnEducation = 1;
function addEducationBtn() {
    // Creating New Div
    let div = document.createElement("div");
    div.setAttribute("id", "education-Sec");
    // Creating HTML Element 01
    let addEducElement = document.createElement("input");
    // New Attributes for Created Element
    addEducElement.setAttribute("type", "text");
    addEducElement.setAttribute("id", `educationInstitute-Input${delAddBtnEducation}`);
    addEducElement.classList.add("form-input");
    addEducElement.setAttribute("placeholder", "Name of Institute");
    addEducElement.setAttribute("value", "");
    addEducElement.setAttribute("required", "");
    // Creating HTML Element 02
    let addEducElement2 = document.createElement("input");
    // New Attributes for Created Element
    addEducElement2.setAttribute("type", "text");
    addEducElement2.setAttribute("id", `educationDegree-Input${delAddBtnEducation}`);
    addEducElement2.classList.add("form-input");
    addEducElement2.setAttribute("placeholder", "Enter Degree");
    addEducElement2.setAttribute("value", "");
    addEducElement2.setAttribute("required", "");
    // Creating HTML Element 03
    let addEducElement3 = document.createElement("input");
    // New Attributes for Created Element
    addEducElement3.setAttribute("type", "text");
    addEducElement3.setAttribute("id", `educationYear-Input${delAddBtnEducation}`);
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
let skillDiv = document.querySelector("#skill-div");
let delSkillButton = document.querySelector("#del-Skill-Btn");
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
// Generating CV - Collecting Data from Input form
/////////////////////////////////////////////////
let langList = document.querySelector(".languages-List");
let expertiseList = document.querySelector(".expertise-list");
let skillGenResume = document.querySelector("#skillGenResume");
let sectionEducation = document.querySelector("#eduGenResume");
let skillsListSec = document.querySelector(".skills-List-Sec");
// General Function for Data Collecting
function dataTransfer(collect, provide) {
    let dataCollector = document.querySelector(`${collect}`);
    let dataProvider = document.querySelector(`${provide}`);
    dataCollector.innerText = dataProvider.value;
}
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
    /////////////////////////////////////////////////
    // Image Updating
    /////////////////////////////////////////////////
    let imageFile = document.getElementById("profileImage-Input").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = function () {
        let imgOutput = document.getElementById("imgOutput");
        imgOutput === null || imgOutput === void 0 ? void 0 : imgOutput.setAttribute("src", `${reader.result}`);
    };
    // Multiple Data Collecting
    /////////////////////////////////////////////////
    // Languages Section Data Collecting
    /////////////////////////////////////////////////
    dataTransfer("#lang-p", "#language-Input");
    delAddBtnLang--;
    // For Loop if More Inputs are created by User
    for (let lang = 1; lang <= delAddBtnLang; lang++) {
        // Creating Main Div
        let divAddLang = document.createElement("div");
        divAddLang.classList.add("list");
        // Set Attributes
        divAddLang.setAttribute("id", "lang-List");
        // Creating Mini Div
        let divMini = document.createElement("div");
        // Adding Class for Apply CSS Style
        divMini.classList.add("dot");
        // Creating HTML Data 02
        let langPara = document.createElement("p");
        // Adding Class for Apply CSS Style
        langPara.setAttribute("id", `lang-p${lang}`);
        // Inserting Above Created Elements Inside Div
        divAddLang.appendChild(divMini);
        divAddLang.appendChild(langPara);
        // Given Position where to be Appear
        langList.appendChild(divAddLang);
        // Transferring Data if Created More
        dataTransfer(`#lang-p${lang}`, `#language-Input${lang}`);
    }
    /////////////////////////////////////////////////
    // Expertise Section Data Collecting
    /////////////////////////////////////////////////
    dataTransfer("#expertise-p", "#expertise-Input");
    delAddBtnExpert--;
    // For Loop if More Inputs are created by User
    for (let expertise = 1; expertise <= delAddBtnExpert; expertise++) {
        // Creating Main Div
        let divAddExpert = document.createElement("div");
        divAddExpert.classList.add("list");
        // Set Attributes
        divAddExpert.setAttribute("id", "expertise-List");
        // Creating Mini Div
        let divMini = document.createElement("div");
        // Adding Class for Apply CSS Style
        divMini.classList.add("dot");
        // Creating HTML Data 02
        let expertPara = document.createElement("p");
        // Adding Class for Apply CSS Style
        expertPara.setAttribute("id", `expertise-p${expertise}`);
        // Inserting Above Created Elements Inside Div
        divAddExpert.appendChild(divMini);
        divAddExpert.appendChild(expertPara);
        // Given Position where to be Appear
        expertiseList.appendChild(divAddExpert);
        // Transferring Data if Created More
        dataTransfer(`#expertise-p${expertise}`, `#expertise-Input${expertise}`);
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
        dataTransfer(`#institute-Education${edu}`, `#educationInstitute-Input${edu}`);
        dataTransfer(`#degree-Education${edu}`, `#educationDegree-Input${edu}`);
        dataTransfer(`#year-Education${edu}`, `#educationYear-Input${edu}`);
    }
    /////////////////////////////////////////////////
    // Skills Section Data Collecting
    /////////////////////////////////////////////////
    dataTransfer("#skill-p", "#skills-Input");
    delAddBtnSkill--;
    // For Loop if More Inputs are created by User
    for (let skill = 1; skill <= delAddBtnSkill; skill++) {
        // Creating Main Div
        let divAddSkill = document.createElement("div");
        // Set Attributes
        divAddSkill.setAttribute("id", "skill-List");
        // Creating Mini Div
        let divMini = document.createElement("div");
        // Adding Class for Apply CSS Style
        divMini.classList.add("dot-Skill");
        // Creating HTML Data 02
        let skillPara = document.createElement("p");
        // Adding Class for Apply CSS Style
        skillPara.setAttribute("id", `skill-p${skill}`);
        // Inserting Above Created Elements Inside Div
        divAddSkill.appendChild(divMini);
        divAddSkill.appendChild(skillPara);
        // Given Position where to be Appear
        skillsListSec.appendChild(divAddSkill);
        // Transferring Data if Created More
        dataTransfer(`#skill-p${skill}`, `#skills-Input${skill}`);
    }
    resume.style.display = "flex";
    buttonsColor.style.display = "flex";
}
/////////////////////////////////////////////////
// DownLoad PDF
/////////////////////////////////////////////////
let buttonsColor = document.querySelector(".buttons-Color");
let resume = document.querySelector(".generate-Resume");
let downloadPDF = document.querySelector("#Download-PDF");
downloadPDF.addEventListener("click", () => {
    let opt = {
        margin: [-6.5, 0, 0, 0],
        filename: resume + ".pdf",
        image: { type: "jpeg", quality: 1 },
        pagebreak: { avoid: "tr", mode: "css", before: "#nextpage1" },
        html2canvas: { scale: 4, useCORS: true, dpi: 192, letterRendering: true },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().from(resume).set(opt).save();
});
/////////////////////////////////////////////////
// Color Changing
/////////////////////////////////////////////////
// Color Picker
let colorPick01 = document.querySelector("#Color-01");
let colorPick02 = document.querySelector("#Color-02");
// Color 01 - All Elements Need to be changed
let secName = document.querySelector(".section-Name");
let secName2 = document.querySelector(".section-NameMQ ");
let imageBorder = document.querySelector("img");
let icn1 = document.querySelector("#icn1");
let icn2 = document.querySelector("#icn2");
let icn3 = document.querySelector("#icn3");
let langSec = document.querySelector(".languages-Sec");
let expertSec = document.querySelector(".expertise-Sec");
let secExperi = document.querySelector(".section-Experience");
let secEduc = document.querySelector(".section-Education");
let secSkills = document.querySelector(".section-Skills");
// Color 02 - All Elements Need to be changed
let leftPortion = document.querySelector(".left-Portion");
colorPick01.addEventListener("input", function () {
    secName.style.backgroundColor = colorPick01.value;
    secName2.style.backgroundColor = colorPick01.value;
    imageBorder.style.borderColor = colorPick01.value;
    icn1.style.backgroundColor = colorPick01.value;
    icn2.style.backgroundColor = colorPick01.value;
    icn3.style.backgroundColor = colorPick01.value;
    langSec.style.color = colorPick01.value;
    expertSec.style.color = colorPick01.value;
    secExperi.style.backgroundColor = colorPick01.value;
    secEduc.style.backgroundColor = colorPick01.value;
    secSkills.style.backgroundColor = colorPick01.value;
});
colorPick02.addEventListener("input", function () {
    leftPortion.style.backgroundColor = colorPick02.value;
});
