const regform = document.getElementById("regform");
const first_name = document.getElementById("first-name");
const last_name = document.getElementById("last-name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");

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

  if (last_name.value.trim() === "") {
    showError(last_name, "Lastname is required");
    errorMsg = true;
  } else {
    showSuccess(last_name, "Lastname Approved");
    successMsg = true;
  }

  if (username.value.trim() === "") {
    showError(username, "Username is required");
    errorMsg = true;
  } else {
    showSuccess(username, "Username Approved");
    successMsg = true;
  }

  if (email.value.trim() === "") {
    showError(email, "Email is required");
    errorMsg = true;
  } else if (!email.value.includes("@")) {
    showError(email, "Email is invalid format");
    errorMsg = true;
  } else {
    showSuccess(email, "Email Approved");
    successMsg = true;
  }

  if (phoneNumber.value.trim() === "") {
    showError(phoneNumber, "Phone number is required");
    errorMsg = true;
  } else {
    showSuccess(phoneNumber, "Phone number Approved");
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
