"use strict";
// Add+ More Input for Form
function addLanguageButton() {
    let addLanBtn = document.createElement("input");
    addLanBtn.setAttribute("type", "text");
    let inTheLanguageSec = document.querySelector("#language-Sec");
    let beforeAddLanBtn = document.querySelector("#add-Language-Btn");
    inTheLanguageSec.insertBefore(addLanBtn, beforeAddLanBtn);
}
/*

type="text"
              name="language-Input"
              id="language-Input"
              class="form-input"
              placeholder="Enter Here"
              value=""
              required

              */
