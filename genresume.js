"use strict";
function dataTransfer(collect, provide) {
    let dataCollector = document.querySelector(`.${collect}`);
    let dataProvider = document.querySelector(`#${provide}`);
    dataCollector.innerHTML = dataProvider.value;
}
function generateResume() {
    dataTransfer("name", "fullName-Input");
    dataTransfer("designation", "designation-Input");
    dataTransfer("para-AboutMe", "aboutMe-Input");
    dataTransfer("phone", "phone-Input");
    dataTransfer("envelope", "email-Input");
    dataTransfer("location", "address-Input");
    let languageInput = document.querySelector("#language-Input");
    let str01 = "";
    for (let e of languageInput) {
        str01 += `<li> ${e.value}</li>`;
    }
    let langList = document.querySelector("#lang-List");
    langList.innerHTML = str01;
}
/*

function generateResume() {
  let dataCollector = document.querySelector(".name") as HTMLElement;
  let dataProvider = document.querySelector(
    "#fullName-Input"
  ) as HTMLInputElement;

  dataCollector.innerHTML = dataProvider.value;
}
  
*/
