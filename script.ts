// Add+ More Input for Form

function addLanguageButton() {
  let addLanBtn = document.createElement("input");
  addLanBtn.setAttribute("type", "text");

  let inTheLanguageSec = document.querySelector("#language-Sec") as HTMLElement;
  let beforeAddLanBtn = document.querySelector(
    "#add-Language-Btn"
  ) as HTMLElement;

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
