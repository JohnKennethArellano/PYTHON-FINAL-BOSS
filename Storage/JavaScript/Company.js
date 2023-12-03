function showValue(selectElement, input) {
  var selectedText = selectElement.options[selectElement.selectedIndex].text;
  input.value = selectedText;
  selectElement.style.borderColor = "";
  RemoveError(selectElement);
}
function Validate(form) {
  const inputs = form.querySelectorAll("input[type='text']");
  const selects = form.querySelectorAll("select");
  const provinceInput = form.querySelector("#provinceInput"),
    cityInput = form.querySelector("#cityInput"),
    barangayInput = form.querySelector("#barangayInput"),
    province = form.querySelector("#province"),
    city = form.querySelector("#city"),
    barangay = form.querySelector("#barangay");
  isValid = true;

  var locationInput = [provinceInput, cityInput, barangayInput];
  var location = [province, city, barangay];
  locationInput.forEach((input, selectedIndex) => {
    if (input.value === "") {
      isValid = false;
      ShowError(location[selectedIndex], "Field required");
    } else {
      RemoveError(location[selectedIndex]);
    }
  });
  inputs.forEach((input) => {
    if (input.value == "") {
      isValid = false;
      ShowError(input, "Field required");
    } else {
      RemoveError(input);
    }
  });
  selects.forEach((select) => {
    if (select.value == "") {
      isValid = false;
      ShowError(select, "Field required");
    } else {
      RemoveError(select);
    }
  });
  if (isValid) {
    Swal.fire({
      title: "Add Company?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "Company Added",
          icon: "success",
          showConfirmButton: false,
        }).then(() => {
          form.submit();
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
const selects = form.querySelectorAll("select");
selects.forEach((select) => {
  select.addEventListener("change", function () {
    RemoveError(select);
  });
});
const inputs = form.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("input", function () {
    RemoveError(input);
  });
});