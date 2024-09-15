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
    let experiInput01 = document.querySelector("#experiencePosition-Input");
    let str01 = "";
    for (let e of experiInput01) {
        str01 += `<h5> ${e.value}</h5>`;
    }
    let experiOutput01 = document.querySelector(".title-Experience");
    experiOutput01.innerHTML = str01;
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
