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
// Generating CV - Collecting Data from Input form
/////////////////////////////////////////////////

let langList = document.querySelector(".languages-List") as HTMLElement;
let expertiseList = document.querySelector(".expertise-list") as HTMLElement;
let skillGenResume = document.querySelector("#skillGenResume") as HTMLElement;
let sectionEducation = document.querySelector("#eduGenResume") as HTMLElement;
let skillsListSec = document.querySelector(".skills-List-Sec") as HTMLElement;
let btnGenerateResume = document.querySelector(
  "#Generate-Resume"
) as HTMLElement;
// General Function for Data Collecting
function dataTransfer(collect: string, provide: string) {
  let dataCollector = document.querySelector(`${collect}`) as HTMLElement;
  let dataProvider = document.querySelector(`${provide}`) as HTMLInputElement;
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
    imgOutput?.setAttribute("src", `${reader.result}`);
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
    langPara.setAttribute("contenteditable", "true");
    langPara.setAttribute("class", "none");

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
    expertPara.setAttribute("contenteditable", "true");
    expertPara.setAttribute("class", "none");

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
    addDataExp.setAttribute("contenteditable", "true");

    // Creating HTML Data 02
    let addDataExp2 = document.createElement("p");
    // Adding Class for Apply CSS Style
    addDataExp2.classList.add("comp-Experience");
    addDataExp2.setAttribute("id", `comp-Experience${exp}`);
    addDataExp2.setAttribute("contenteditable", "true");

    // Creating HTML Data 03
    let addDataExp3 = document.createElement("p");
    // Adding Class for Apply CSS Style
    addDataExp3.classList.add("para-Experience");
    addDataExp3.setAttribute("id", `para-Experience${exp}`);
    addDataExp3.setAttribute("contenteditable", "true");

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
    addDataEdu.setAttribute("contenteditable", "true");

    // Creating HTML Data 02
    let addDataEdu2 = document.createElement("p");
    // Adding Class for Apply CSS Style
    addDataEdu2.classList.add("degree-Education");
    addDataEdu2.setAttribute("id", `degree-Education${edu}`);
    addDataEdu2.setAttribute("contenteditable", "true");

    // Creating HTML Data 03
    let addDataEdu3 = document.createElement("p");
    // Adding Class for Apply CSS Style
    addDataEdu3.classList.add("year-Education");
    addDataEdu3.setAttribute("id", `year-Education${edu}`);
    addDataEdu3.setAttribute("contenteditable", "true");

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
    skillPara.setAttribute("contenteditable", "true");
    skillPara.setAttribute("class", "none");

    // Inserting Above Created Elements Inside Div
    divAddSkill.appendChild(divMini);
    divAddSkill.appendChild(skillPara);

    // Given Position where to be Appear
    skillsListSec.appendChild(divAddSkill);

    // Transferring Data if Created More
    dataTransfer(`#skill-p${skill}`, `#skills-Input${skill}`);
  }

  let resume2 = document.querySelector(".container") as HTMLElement;
  resume2.style.display = "block";
  buttonsColor.style.display = "flex";

  btnGenerateResume.style.display = "none";
}

/////////////////////////////////////////////////
// DownLoad PDF
/////////////////////////////////////////////////

let buttonsColor = document.querySelector(".buttons-Color") as HTMLElement;
// Image for Setting Bug
let imgOutput = document.getElementById("imgOutput") as HTMLElement;

// Select elements
let resume = document.querySelector(".generate-Resume") as HTMLElement;
let downloadPDF = document.querySelector("#Download-PDF") as HTMLElement;

if (downloadPDF) {
  downloadPDF.addEventListener("click", () => {
    let opt = {
      margin: [0, 0, 0, 0],
      filename: "resume.pdf", // Filename as a string
      image: { type: "jpeg", quality: 1 },
      pagebreak: { avoid: "tr", mode: "css", before: "#nextpage1" },
      html2canvas: { scale: 4, useCORS: true, dpi: 192, letterRendering: true },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    // Check if resume is properly selected
    if (resume) {
      imgOutput.style.zIndex = "99999";
      html2pdf()
        .from(resume)
        .set(opt)
        .save()
        .catch((error) => {
          console.error("Error generating PDF:", error);
        });
    } else {
      console.error("Resume element not found");
    }
  });
}

/////////////////////////////////////////////////
// Color Changing
/////////////////////////////////////////////////

// Color Picker
let colorPick01 = document.querySelector("#Color-01") as HTMLInputElement;
let colorPick02 = document.querySelector("#Color-02") as HTMLInputElement;

// Color 01 - All Elements Need to be changed
let secName = document.querySelector(".section-Name") as HTMLElement;
let secName2 = document.querySelector(".section-NameMQ ") as HTMLElement;
let imageBorder = document.querySelector("img") as HTMLElement;
let icn1 = document.querySelector("#icn1") as HTMLDivElement;
let icn2 = document.querySelector("#icn2") as HTMLDivElement;
let icn3 = document.querySelector("#icn3") as HTMLDivElement;
let langSec = document.querySelector(".languages-Sec") as HTMLElement;
let expertSec = document.querySelector(".expertise-Sec") as HTMLElement;
let secExperi = document.querySelector(".section-Experience") as HTMLElement;
let secEduc = document.querySelector(".section-Education") as HTMLElement;
let secSkills = document.querySelector(".section-Skills") as HTMLElement;

// Color 02 - All Elements Need to be changed
let leftPortion = document.querySelector(".left-Portion") as HTMLElement;

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

/////////////////////////////////////////////////
// Fill Dummy Data
/////////////////////////////////////////////////

function dummyInfo() {
  (document.getElementById("fullName-Input") as HTMLInputElement).value =
    "Zubair Ahmed";
  (document.getElementById("designation-Input") as HTMLInputElement).value =
    "Web & Graphics Designer";
  (document.getElementById("profileImage-Input") as HTMLInputElement).src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOlwb6YnVU55H4BNqtLm7T8b7thI-HiQBrg&s";
  (document.getElementById("aboutMe-Input") as HTMLInputElement).value =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aexercitationem, autem adnesciunt rem, sed necessitatibus beatae soluta nobis veritatis.Voluptas repudiandae harum repellendus!";
  (document.getElementById("phone-Input") as HTMLInputElement).value =
    "+92 333 123 4567";
  (document.getElementById("email-Input") as HTMLInputElement).value =
    "yourmail123@gmail.com";
  (document.getElementById("address-Input") as HTMLInputElement).value =
    "Karachi, Sindh - Pakistan";
  addLanguageBtn();
  addLanguageBtn();
  addLanguageBtn();
  addLanguageBtn();
  (document.getElementById("language-Input") as HTMLInputElement).value =
    "English";
  (document.getElementById("language-Input1") as HTMLInputElement).value =
    "Urdu";
  (document.getElementById("language-Input2") as HTMLInputElement).value =
    "Arabic";
  (document.getElementById("language-Input3") as HTMLInputElement).value =
    "Spanish";
  (document.getElementById("language-Input4") as HTMLInputElement).value =
    "Persian";
  addExpertBtn();
  addExpertBtn();
  addExpertBtn();
  addExpertBtn();
  (document.getElementById("expertise-Input") as HTMLInputElement).value =
    "Management Skills";
  (document.getElementById("expertise-Input1") as HTMLInputElement).value =
    "Creativity";
  (document.getElementById("expertise-Input2") as HTMLInputElement).value =
    "Digital Marketing";
  (document.getElementById("expertise-Input3") as HTMLInputElement).value =
    "Leadership";
  (document.getElementById("expertise-Input4") as HTMLInputElement).value =
    "Team Work";
  addExperienceBtn();
  (
    document.getElementById("experiencePosition-Input") as HTMLInputElement
  ).value = "Enter your position title here";
  (
    document.getElementById("experienceCompYear-Input") as HTMLInputElement
  ).value = "Company Name / Jan 2020 - Present";
  (document.getElementById("experiencePara-Input") as HTMLInputElement).value =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aexercitationem, ipsam sit, illo aliquam officia earum autem adnesciunt rem, sed necessitatibus beatae soluta nobis veritatis.Voluptas repudiandae harum repellendus!";
  (
    document.getElementById("experiencePosition-Input1") as HTMLInputElement
  ).value = "Enter your position title here";
  (
    document.getElementById("experienceCompYear-Input1") as HTMLInputElement
  ).value = "Company Name / Jan 2020 - Present";
  (document.getElementById("experiencePara-Input1") as HTMLInputElement).value =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aexercitationem, ipsam sit, illo aliquam officia earum autem adnesciunt rem, sed necessitatibus beatae soluta nobis veritatis.Voluptas repudiandae harum repellendus!";
  addEducationBtn();
  (
    document.getElementById("educationInstitute-Input") as HTMLInputElement
  ).value = "University of Karachi";
  (document.getElementById("educationDegree-Input") as HTMLInputElement).value =
    "Master of Business Management";
  (document.getElementById("educationYear-Input") as HTMLInputElement).value =
    "Jan 2020 - Dec 2023";
  (
    document.getElementById("educationInstitute-Input1") as HTMLInputElement
  ).value = "Karachi Public School";
  (
    document.getElementById("educationDegree-Input1") as HTMLInputElement
  ).value = "Intermediate & SSC";
  (document.getElementById("educationYear-Input1") as HTMLInputElement).value =
    "Jan 2020 - Dec 2023";
  addSkillsBtn();
  addSkillsBtn();
  addSkillsBtn();
  addSkillsBtn();
  addSkillsBtn();
  addSkillsBtn();
  (document.getElementById("skills-Input") as HTMLInputElement).value =
    "Javascript-Typescript";
  (document.getElementById("skills-Input1") as HTMLInputElement).value =
    "Next js-React";
  (document.getElementById("skills-Input2") as HTMLInputElement).value =
    "HTML-CSS";
  (document.getElementById("skills-Input3") as HTMLInputElement).value =
    "Adobe Photoshop";
  (document.getElementById("skills-Input4") as HTMLInputElement).value =
    "Adobe Illustrator";
  (document.getElementById("skills-Input5") as HTMLInputElement).value =
    "Adobe AfterEffect";
  (document.getElementById("skills-Input6") as HTMLInputElement).value =
    "Cinema 4D";

  let str = ["Please upload Image, Rest Data is Filled"];
  alert(str);
}
