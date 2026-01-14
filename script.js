import {
  initModals,
  openTermsModal,
  openConfirmModal,
  openSuccessModal,
} from "./modals.js";

initModals();

const regform = document.getElementById("regform");

const first_name = document.getElementById("first-name");
const last_name = document.getElementById("last-name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const gender = document.getElementById("gender");
const birthday = document.getElementById("birthday");
const civilStatus = document.getElementById("civil-status");
const nationality = document.getElementById("nationality");
const address = document.getElementById("address");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm-pass");
const terms = document.getElementById("terms");

const termsLink = document.getElementById("terms-link");
const confirmRegBtn = document.getElementById("confirmRegBtn");

if (termsLink) {
  termsLink.addEventListener("click", (e) => {
    e.preventDefault();
    openTermsModal();
  });
}

if (confirmRegBtn) {
  confirmRegBtn.addEventListener("click", () => {
    openSuccessModal();
  });
}

regform.addEventListener("submit", (event) => {
  event.preventDefault();

  let hasError = false;

  if (first_name.value.trim() === "") {
    showError(first_name, "Firstname is required");
    hasError = true;
  } else {
    showSuccess(first_name, "Firstname Approved");
  }

  if (last_name.value.trim() === "") {
    showError(last_name, "Lastname is required");
    hasError = true;
  } else {
    showSuccess(last_name, "Lastname Approved");
  }

  if (username.value.trim() === "") {
    showError(username, "Username is required");
    hasError = true;
  } else {
    showSuccess(username, "Username Approved");
  }

  if (email.value.trim() === "") {
    showError(email, "Email is required");
    hasError = true;
  } else if (!email.value.includes("@")) {
    showError(email, "Email is invalid format");
    hasError = true;
  } else {
    showSuccess(email, "Email Approved");
  }

  const phoneValue = phoneNumber.value.trim();
  const phoneRegex = /^[0-9]+$/;

  if (phoneValue === "") {
    showError(phoneNumber, "Phone number is required");
    hasError = true;
  } else if (!phoneRegex.test(phoneValue)) {
    showError(phoneNumber, "Phone number must contain numbers only");
    hasError = true;
  } else if (phoneValue.length < 10 || phoneValue.length > 11) {
    showError(phoneNumber, "Phone number must be 10-11 digits");
    hasError = true;
  } else {
    showSuccess(phoneNumber, "Phone number Approved");
  }

  if (gender.value === "") {
    showError(gender, "Gender is required");
    hasError = true;
  } else {
    showSuccess(gender, "Gender Approved");
  }

  if (birthday.value === "") {
    showError(birthday, "Birthday is required");
    hasError = true;
  } else {
    showSuccess(birthday, "Birthday Approved");
  }

  if (civilStatus.value === "") {
    showError(civilStatus, "Civil Status is required");
    hasError = true;
  } else {
    showSuccess(civilStatus, "Status Approved");
  }

  if (nationality.value.trim() === "") {
    showError(nationality, "Nationality is required");
    hasError = true;
  } else {
    showSuccess(nationality, "Nationality Approved");
  }

  if (address.value.trim() === "") {
    showError(address, "Address is required");
    hasError = true;
  } else {
    showSuccess(address, "Address Approved");
  }

  if (password.value === "") {
    showError(password, "Password is required");
    hasError = true;
  } else {
    showSuccess(password, "Password Approved");
  }

  if (confirmPass.value === "") {
    showError(confirmPass, "Confirm Password is required");
    hasError = true;
  } else if (confirmPass.value !== password.value) {
    showError(confirmPass, "Passwords do not match");
    hasError = true;
  } else {
    showSuccess(confirmPass, "Password Match");
  }

  if (!terms.checked) {
    showError(terms, "You must accept terms");
    hasError = true;
  } else {
    showSuccess(terms, "Terms Accepted");
  }

  if (!hasError) {
    const formData = {
      Name: `${first_name.value} ${last_name.value}`,
      Username: username.value,
      Email: email.value,
      Phone: phoneNumber.value,
      Gender: gender.value,
      "Civil Status": civilStatus.value,
      Nationality: nationality.value,
    };

    openConfirmModal(formData);
  }
});

const showError = (input, msg) => {
  const inputParent = input.parentElement;
  const errorDisplay = inputParent.querySelector(".error-msg");
  const successDisplay = inputParent.querySelector(".success-msg");

  inputParent.classList.remove("success");
  if (successDisplay) successDisplay.innerText = "";

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
  if (successDispay) successDispay.innerText = msg;
};
