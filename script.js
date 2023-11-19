const signupWrapper = document.getElementById("container1");
const successWrapper = document.getElementById("container2");
const successMessgEmail = document.getElementById("email-sent");
const emailInput = document.getElementById("mail");
const errMessg = document.getElementById("err-messg");
const subBtn = document.getElementById("subscribe");
const dismissBtn = document.getElementById("dismiss");
const regex = /^[a-z0-9]+@[a-z]+\.com$/;

const validate = (e) => {
  let result = regex.test(emailInput.value);
  successMessgEmail.innerHTML = emailInput.value;
  if (result) {
    signupWrapper.style.display = "none";
    successWrapper.style.display = "flex";
  } else {
    emailInput.style.border = "1px solid red";
    emailInput.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
    emailInput.style.color = "red";
    errMessg.style.display = "block";
  }
  e.preventDefault();
};

const dismiss = (e) => {
  successWrapper.style.display = "none";
  signupWrapper.style.display = "flex";
  e.preventDefault();
};

subBtn.addEventListener("click", validate);
dismissBtn.addEventListener("click", dismiss);
