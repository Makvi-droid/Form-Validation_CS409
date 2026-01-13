const regform = document.getElementById("regform");
const first_name = document.getElementById("first-name");
const last_name = document.getElementById("last-name");
const username = document.getElementById("username");

regform.addEventListener("submit", (event) => {
  event.preventDefault();

  let errorMsg = false;
  let successMsg = false;

  if (first_name.value.trim() === "") {
    showError(first_name, "Firstname is required");
    errorMsg = true;
  } else {
    showSuccess(first_name, "Firstname Approved");
    successMsg = true;
  }
});

const showError = (input, msg) => {
  const inputParent = input.parentElement;
  const errorDisplay = inputParent.querySelector(".error-msg");
  const successDisplay = inputParent.querySelector(".success-msg");

  inputParent.classList.remove("success");
  successDisplay.innerText = "";

  inputParent.classList.add("error");
  errorDisplay.innerText = msg;
};

const showSuccess = (input, msg) => {
  const succesParent = input.parentElement;
  const successDispay = succesParent.querySelector(".success-msg");
  const errorDisplay = succesParent.querySelector(".error-msg");

  succesParent.classList.remove("error");
  errorDisplay.innerText = "";

  succesParent.classList.add("success");
  successDispay.innerText = msg;
};
