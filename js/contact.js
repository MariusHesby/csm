// Selecting all the necessary elements
const form = document.querySelector("#contactForm");

const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameError");
const fullNameSuccess = document.querySelector(".verifyName");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const emailSuccess = document.querySelector(".verifyEmail");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const messageSuccess = document.querySelector(".verifyMessage");

const updateButton = document.querySelector("button.cta-create");

const message2 = document.querySelector(".message");
console.log(message2);

// === function validateForm ===
function validateForm(event) {
  // Prevent default form actions
  event.preventDefault();

  // Check full name
  if (checkLength2(fullName.value, 5)) {
    fullNameError.style.visibility = "hidden";
  } else {
    fullNameError.style.visibility = "visible";
  }

  // Check e-mail
  if (validateEmail(email.value)) {
    emailError.style.visibility = "hidden";
  } else {
    emailError.style.visibility = "visible";
  }

  // Check message
  if (checkLength2(message.value, 15)) {
    messageError.style.visibility = "hidden";
  } else {
    messageError.style.visibility = "visible";
  }
}
// === function validateForm END ===

// Check valid length
function checkLength2(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

fullName.addEventListener("focusout", verifyName);
email.addEventListener("focusout", verifyEmail);
message.addEventListener("focusout", verifyMessage);

// VERIFY name
function verifyName(event) {
  event.preventDefault();
  if (checkLength2(fullName.value, 5)) {
    fullNameSuccess.style.background = "rgb(199, 252, 199)";
    fullNameSuccess.style.border = "1px solid green";
    fullNameError.style.visibility = "hidden";
  } else {
    fullNameSuccess.style.background = "whitesmoke";
    fullNameSuccess.style.border = "1px solid red";
    fullNameError.style.visibility = "visible";
  }
}

// VERIFY e-mail
function verifyEmail(event) {
  event.preventDefault();
  if (validateEmail(email.value)) {
    emailSuccess.style.background = "rgb(199, 252, 199)";
    emailSuccess.style.border = "1px solid green";
    emailError.style.visibility = "hidden";
  } else {
    emailSuccess.style.background = "whitesmoke";
    emailSuccess.style.border = "1px solid red";
    emailError.style.visibility = "visible";
  }
}

// VERIFY message
function verifyMessage(event) {
  event.preventDefault();
  if (checkLength2(message.value, 15)) {
    messageSuccess.style.background = "rgb(199, 252, 199)";
    messageSuccess.style.border = "1px solid green";
    messageError.style.visibility = "hidden";
  } else {
    messageSuccess.style.background = "whitesmoke";
    messageSuccess.style.border = "1px solid red";
    messageError.style.visibility = "visible";
  }
}
// Check valid length
function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}
// Validate e-mail
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

// Confirm that form has been sent
function submitForm(event) {
  event.preventDefault();
  if (checkLength(fullName.value, 5) && validateEmail(email.value) && checkLength(message.value, 15)) {
    window.open(`contact-results.html`);
    // message2.innerHTML = `<p class="sent">Your message has been sent</p>`;
    // clear all input values
    form.reset();
  } else {
    console.log("Contact-form messed ud!");
  }
}

form.addEventListener("submit", submitForm);
// updateButton.addEventListener("click", function () {
//   updateButton.innerHTML = "Successfully updated!";
// });
