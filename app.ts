// function for adding more inputs
function addInput(idName: string, placeholder: string) {
  // Creating HTML Element
  let createInput = document.createElement("input");
  // New Attributes for Created Element
  createInput.setAttribute("type", "text");
  createInput.setAttribute("id", `${idName}`);
  createInput.classList.add("form-input");
  createInput.setAttribute("placeholder", `${placeholder}`);
  createInput.setAttribute("value", "");
  createInput.setAttribute("required", "");
}

// Access Div where to create Elements
let skillsDiv = document.querySelector("skill-div") as HTMLElement;

function addSkillBtn() {}
