const form = document.querySelector("#user-login-form");
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const personalInput = document.querySelector('input[name="personal_number"]');
const mobileInput = document.querySelector('input[name="mobile_number"]');
const positionInput = document.querySelector('textarea[name="user-position"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
  } catch (e) {
    console.log("catch error", e);
  }
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isIdValid = validatePersnum ();
  const isMobilenumValid = validateMobile();
  if (isEmailValid && isPasswordValid && isIdValid && isMobilenumValid) {
    submitBtn.addEventListener('click', closeModal())
  }
});

function validateEmail() {
  if (!emailInput.value) {
    emailInput.classList.add("has-error");
    emailInput.parentNode.querySelector(".error-message").innerText =
      "Please enter email";
    return false;
  }
  if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
    emailInput.classList.add("has-error");
    emailInput.parentNode.querySelector(".error-message").innerText =
      "Invalid email";
    return false;
  }
  emailInput.classList.remove("has-error");
  emailInput.parentNode.querySelector(".error-message").innerText = "";
  return true;
}

function validatePassword() {
  if (!passwordInput.value) {
    passwordInput.classList.add("has-error");
    passwordInput.parentNode.querySelector(".error-message").innerText =
      "Please enter password";
    return false;
  }
  if (passwordInput.value.length < 8) {
    passwordInput.classList.add("has-error");
    passwordInput.parentNode.querySelector(".error-message").innerText =
      "Password must include 8 char";
    return false;
  }
  passwordInput.classList.remove("has-error");
  passwordInput.parentNode.querySelector(".error-message").innerText = "";
  return true;
}

function validateMobile() {
  if (!mobileInput.value) {
    mobileInput.classList.add("has-error");
    mobileInput.parentNode.querySelector(".error-message").innerText =
      "Please Enter Mobile Number";
    return false;
  }
  if (mobileInput.value.length < 9 || mobileInput.value.length > 9) {
    mobileInput.classList.add("has-error");
    mobileInput.parentNode.querySelector(".error-message").innerText =
      "Must include 9 character";
    return false;
  }
  mobileInput.classList.remove("has-error");
  mobileInput.parentNode.querySelector(".error-message").innerText = "";
  return true;
}

function validatePersnum() {
  if (!personalInput.value) {
    personalInput.classList.add("has-error");
    personalInput.parentNode.querySelector(".error-message").innerText =
      "Please enter personal number";
    return false;
  }
  if (personalInput.value.length < 11 || personalInput.value.length > 11) {
    personalInput.classList.add("has-error");
    personalInput.parentNode.querySelector(".error-message").innerText =
      "Must include 11 character";
    return false;
  }
  personalInput.classList.remove("has-error");
  personalInput.parentNode.querySelector(".error-message").innerText = "";
  return true;
}

const registrationBtn = document.getElementById("get-registration")
const submitBtn = document.querySelector (".submitbtn")
const modalPop = document.querySelector (".modal")

registrationBtn.addEventListener('click', () => {
    openModal()
})

function openModal() {
    modalPop.classList.add("visible")
}
function closeModal() {
    modalPop.classList.remove("visible")
}