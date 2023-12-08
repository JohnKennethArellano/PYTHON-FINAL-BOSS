function ShowForm(form) {
  var selectCompany = document.querySelector("#selectCompany"),
    comp = document.querySelector("#comp");

  if (selectCompany.value == "") {
    selectCompany.style.borderColor = "var(--red)";
    Swal.fire({
      title: "Select Company",
      icon: "warning",
      showConfirmButton: false,
      timer: 1000,
    });
  } else {
    form.style.display = "flex";
    comp.innerText = selectCompany.value;
  }
}
function CloseForm(form) {
  form.style.display = "none ";
  const selects = form.querySelectorAll("select");
  const inputs = form.querySelectorAll("input");
  const textarea = form.querySelectorAll("textarea");

  selects.forEach((element) => {
    element.options[0].selected = true;
    RemoveError(element);
  });

  inputs.forEach((element) => {
    element.value = "";
    RemoveError(element);
  });
  textarea.forEach((element) => {
    element.value = "";
    RemoveError(element);
  });
}
function ShowError(input, message) {
  let parent = input.parentElement;
  let errorMessage = parent.querySelector(".errorMessage");

  input.style.borderColor = "var(--red)";
  errorMessage.innerText = message;
}
function RemoveError(input) {
  let parent = input.parentNode;
  let errorMessage = parent.querySelector(".errorMessage");

  input.style.borderColor = "";
  errorMessage.innerText = "";
}
const selectCompany = document.querySelector("#selectCompany");
selectCompany.addEventListener("change", () => {
  selectCompany.style.borderColor = "";
});

function addSkill(element) {
  const selectedContainer = document.querySelector("#selectedContainer"),
    parentElement = element.parentElement,
    skillAdd = document.querySelector("#skillAdd");
  let skill = parentElement.querySelector("#skill").innerText;

  const newElement = skillAdd.content.cloneNode(true);
  newElement.querySelector("#skillAddElement").innerText = skill;
  newElement.querySelector("#skillAddInput").value = skill;

  selectedContainer.appendChild(newElement);
  parentElement.remove();
}
function addSkillInputText(skill) {
  val = skill.value;
  if (val == "") {
    skill.style.borderColor = "var(--red)";
  } else {
    const selectedContainer = document.querySelector("#selectedContainer"),
      skillAdd = document.querySelector("#skillAdd");

    const newElement = skillAdd.content.cloneNode(true);

    newElement.querySelector("#skillAddElement").innerText = val;
    newElement.querySelector("#skillAddInput").value = val;

    selectedContainer.appendChild(newElement);
    skill.value = "";
  }
}

function removeSkill(element) {
  const popularSkillContainer = document.querySelector(
      "#popularSkillContainer"
    ),
    parentElement = element.parentElement,
    skillRecommended = document.querySelector("#skillRecommended");
  let skill = parentElement.querySelector("#skillAddElement").innerText;

  const newElement = skillRecommended.content.cloneNode(true);
  newElement.querySelector("#skill").innerText = skill;

  popularSkillContainer.appendChild(newElement);
  parentElement.remove();
}

function autoResizeTextarea(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

function ValidatePost(form) {
  var jobTitle = form.querySelector("#jobTitle"),
    projectOverview = form.querySelector("#projectOverview"),
    projectScale = form.querySelector("#projectScale"),
    projectTimeline = form.querySelector("#projectTimeline"),
    description = form.querySelector("#description"),
    isValid = true;

  var jobTitleValue = jobTitle.value.trim();

  if (jobTitleValue == "") {
    isValid = false;
    ShowError(jobTitle, "Field Required");
  } else {
    RemoveError(jobTitle);
  }

  if (projectOverview.value == "") {
    isValid = false;
    ShowError(projectOverview, "Field Required");
  } else {
    RemoveError(projectOverview);
  }

  if (projectScale.value == "") {
    isValid = false;
    ShowError(projectScale, "Field Required");
  } else {
    RemoveError(projectScale);
  }

  if (projectTimeline.value == "") {
    isValid = false;
    ShowError(projectTimeline, "Field Required");
  } else {
    RemoveError(projectTimeline);
  }
  if (description.value == "") {
    isValid = false;
    ShowError(description, "Field Required");
  } else {
    RemoveError(description);
  }
  if (isValid) {
    Swal.fire({
      title: "Submit Post",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "Post Submitted",
          icon: "success",
          showConfirmButton: false,
        }).then(() => {
          form.submit();
        });
      }
    });
  }
}

const selects = document.querySelectorAll("select");
const inputs = document.querySelectorAll("input");
const textarea = document.querySelectorAll("textarea");

selects.forEach((element) => {
  element.addEventListener("change", () => {
    RemoveError(element);
  });
});

inputs.forEach((element) => {
  element.addEventListener("input", () => {
    RemoveError(element);
  });
});
textarea.forEach((element) => {
  element.addEventListener("input", () => {
    RemoveError(element);
  });
});
