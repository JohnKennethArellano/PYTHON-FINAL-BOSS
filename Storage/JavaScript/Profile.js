function Listeners() {
  const formTitles = document.querySelectorAll(".formTitles"),
    formContent = document.querySelectorAll(".formContent");

  formTitles.forEach((forms, index) => {
    forms.addEventListener("click", () => {
      formContent.forEach((content) => {
        content.classList.remove("active");
      });

      formTitles.forEach((content) => {
        content.classList.remove("active");
      });

      formTitles[index].classList.add("active");
      formContent[index].classList.add("active");
    });
  });
}

function showValue(selectElement, input) {
  var selectedText = selectElement.options[selectElement.selectedIndex].text;
  input.value = selectedText;
  selectElement.style.borderColor = "";
  RemoveError(selectElement);
}
function Validate() {
  const lettersOnlyRegex = /^[a-zA-Z\s]+$/;
  const numbersOnlyRegex = /^[0-9]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /\d/;

  var profileImg = document.querySelector("#profileImg"),
    fName = document.querySelector("#fName"),
    mName = document.querySelector("#mName"),
    lName = document.querySelector("#lName"),
    suffix = document.querySelector("#suffix"),
    birthday = document.querySelector("#birthday"),
    age = document.querySelector("#age"),
    sex = document.querySelector("#sex"),
    number = document.querySelector("#number"),
    status = document.querySelector("#status"),
    email = document.querySelector("#email"),
    province = document.querySelector("#province"),
    city = document.querySelector("#city"),
    barangay = document.querySelector("#barangay"),
    provinceInput = document.querySelector("#provinceInput"),
    cityInput = document.querySelector("#cityInput"),
    barangayInput = document.querySelector("#barangayInput"),
    oldPassword = document.querySelector("#oldPassword"),
    newPassword = document.querySelector("#newPassword"),
    confirmPassword = document.querySelector("#confirmPassword"),
    isValid = true;

  var fNameValue = fName.value.trim(),
    mNameValue = mName.value.trim(),
    lNameValue = lName.value.trim(),
    suffixValue = suffix.value.trim(),
    sexValue = sex.value.trim(),
    numberValue = number.value.trim(),
    statusValue = status.value.trim(),
    emailValue = email.value.trim(),
    oldPasswordValue = oldPassword.value.trim(),
    newPasswordValue = newPassword.value.trim(),
    confirmPasswordValue = confirmPassword.value.trim();

  if (fNameValue == "") {
    ShowError(fName, "Field required");
    isValid = false;
  } else if (!lettersOnlyRegex.test(fNameValue)) {
    ShowError(fName, "Invalid Format");
    isValid = false;
  } else {
    RemoveError(fName);
  }

  if (mNameValue == "") {
    RemoveError(mName);
  } else if (!lettersOnlyRegex.test(mNameValue)) {
    ShowError(mName, "Invalid Format");
    isValid = false;
  } else {
    RemoveError(mName);
  }

  if (lNameValue == "") {
    ShowError(lName, "Field required");
    isValid = false;
  } else if (!lettersOnlyRegex.test(lNameValue)) {
    ShowError(lName, "Invalid Format");
    isValid = false;
  } else {
    RemoveError(lName);
  }

  if (suffixValue == "") {
    RemoveError(suffix);
  } else if (!lettersOnlyRegex.test(suffixValue)) {
    ShowError(suffix, "Invalid Format");
    isValid = false;
  } else {
    RemoveError(suffix);
  }

  if (birthday.value == "") {
    ShowError(birthday, "Field required");
    isValid = false;
  } else {
    RemoveError(birthday);
  }

  if (age.value == 0) {
    ShowError(age, "Field required");
    isValid = false;
  } else {
    RemoveError(age);
  }

  if (sexValue == "") {
    ShowError(sex, "Field required");
    isValid = false;
  } else if (!lettersOnlyRegex.test(sexValue)) {
    ShowError(sex, "Invalid Format");
    isValid = false;
  } else {
    RemoveError(sex);
  }

  if (numberValue == "") {
    ShowError(number, "Field required");
    isValid = false;
  } else if (!numbersOnlyRegex.test(numberValue)) {
    ShowError(number, "Invalid Format");
    isValid = false;
  } else if (numberValue.length < 11 || numberValue.length > 12) {
    ShowError(number, "Invalid Number");
    isValid = false;
  } else {
    RemoveError(number);
  }

  if (statusValue == "") {
    ShowError(status, "Field required");
    isValid = false;
  } else if (!lettersOnlyRegex.test(statusValue)) {
    ShowError(status, "Invalid Format");
    isValid = false;
  } else {
    RemoveError(status);
  }

  if (emailValue == "") {
    ShowError(email, "Field required");
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    ShowError(email, "Invalid Format");
    isValid = false;
  } else {
    RemoveError(email);
  }

  if (provinceInput.value == "") {
    ShowError(province, "Field required");
    isValid = false;
  } else {
    RemoveError(province);
  }

  if (cityInput.value == "") {
    ShowError(city, "Field required");
    isValid = false;
  } else {
    RemoveError(city);
  }

  if (barangayInput.value == "") {
    ShowError(barangay, "Field required");
    isValid = false;
  } else {
    RemoveError(barangay);
  }

  if (oldPasswordValue == "") {
    ShowError(oldPassword, "Field required");
    isValid = false;
  } else {
    RemoveError(oldPassword);
  }

  if (newPasswordValue == "") {
    ShowError(newPassword, "Field required");
    isValid = false;
  } else if (!uppercaseRegex.test(newPasswordValue)) {
    ShowError(newPassword, "Include at least one uppercase letter");
    isValid = false;
  } else if (!lowercaseRegex.test(newPasswordValue)) {
    ShowError(newPassword, "Include at least one lowercase letter");
    isValid = false;
  } else if (!digitRegex.test(newPasswordValue)) {
    ShowError(newPassword, "Include at least one number");
    isValid = false;
  } else if (newPasswordValue.length < 8) {
    ShowError(newPassword, "Use at least 8 characters");
    isValid = false;
  } else {
    RemoveError(newPassword);
  }

  if (confirmPasswordValue == "") {
    ShowError(confirmPassword, "Field required");
    isValid = false;
  } else if (confirmPasswordValue == newPasswordValue) {
    ShowError(newPassword, "Password not matched");
    ShowError(confirmPassword, "Password not matched");
    isValid = false;
  } else {
    RemoveError(confirmPassword);
  }
  if (isValid) {
    var profileForm = document.querySelector("#profileForm");
    Swal.fire({
      title: "Edit Information?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "Changes saved!",
          icon: "success",
          showConfirmButton: false,
        }).then(() => {
          profileForm.submit();
        });
      }
    });
  }
}

function ShowError(input, message) {
  let parent = input.parentNode;
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

function CalculateAge(input) {
  var dob = new Date(input.value);
  var currentDate = new Date();
  var age = currentDate.getFullYear() - dob.getFullYear();

  if (
    currentDate.getMonth() < dob.getMonth() ||
    (currentDate.getMonth() === dob.getMonth() &&
      currentDate.getDate() < dob.getDate())
  ) {
    age--;
  }

  var ageElement = document.querySelector("#age");
  ageElement.value = age;

  if (age < 18) {
    input.value = "";
    ShowError(input, "Person too young");
  } else {
    RemoveError(ageElement);
  }
}

function previewImage(event) {
  var fileInput = event.target;
  var file = fileInput.files[0];

  if (file) {
    if (validateFileType(file) && validateFileSize(file)) {
      previewFile(file);
    } else {
      Swal.fire({
        text: "Please select a JPEG, JPG, or PNG file under 5MB.",
        icon: "warning",
        timer: 2000,
        showConfirmButton: false,
      });
      fileInput.value = "";
    }
  }
}
function previewFile(file) {
  var reader = new FileReader();

  reader.onload = function (e) {
    var previewImage = document.getElementById("picture");
    previewImage.src = e.target.result;
  };

  reader.readAsDataURL(file);
}
function handleDrop(event) {
  event.preventDefault();
  event.stopPropagation();

  var file = event.dataTransfer.files[0];
  if (validateFileType(file) && validateFileSize(file)) {
    previewFile(file);
  } else {
    Swal.fire({
      text: "Drop a JPEG, JPG, or PNG file under 5MB.",
      icon: "warning",
      timer: 2000,
      showConfirmButton: false,
    });
  }
}
function validateFileType(file) {
  var allowedExtensions = /(\.jpeg|\.jpg|\.png)$/i;
  return allowedExtensions.exec(file.name);
}

function validateFileSize(file) {
  var maxSizeInBytes = 5 * 1024 * 1024;
  return file.size <= maxSizeInBytes;
}

function handleDragOver(event) {
  event.preventDefault();
  event.stopPropagation();
}

function ShowForms(form, formInput) {
  formInput.style.display = "flex";
  form.style.display = "flex";
}
function ShowForms1(form, formInput, element) {
  var formKey = element.getAttribute("form-key");
  var title = form.querySelector("#formTitle");
  var honorsContainers = [
    null,
    document.querySelector("#honorsContainer1"),
    document.querySelector("#honorsContainer2"),
    document.querySelector("#honorsContainer3"),
  ];
  var awardTemplate = document.querySelector("#awardTemplate");
  var addDetailsButton = document.querySelector("#addDetailsButton");

  if (formKey == 1) {
    title.innerHTML = "Honor";
  } else if (formKey == 2) {
    title.innerHTML = "Awards";
  } else if (formKey == 3) {
    title.innerHTML = "Certificate";
  }

  formInput.style.display = "flex";
  form.style.display = "flex";

  addDetailsButton.addEventListener("click", () => {
    var awardName = form.querySelector("#awardName").value.trim();
    var awardDate = form.querySelector("#awardDate").value;

    if (awardName && awardDate) {
      let newElement = awardTemplate.content.cloneNode(true);
      newElement.querySelector("#awardTitle").innerText = awardName;
      newElement.querySelector("#awardDate").innerText = awardDate;
      honorsContainers[formKey].appendChild(newElement);
    } 
  });
}

function Closeform(form, formInput) {
  formInput.style.display = "none";
  form.style.display = "none";
}
const inputs = document.querySelectorAll("input[type='text']");
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    RemoveError(input);
  });
});
