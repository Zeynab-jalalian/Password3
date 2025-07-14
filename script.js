const passShow = document.querySelector(".show"),
  createPass = document.getElementById("createPass"),
  confirmPass = document.getElementById("confirmPass"),
  errorIcon = document.querySelector(".errorIcon"),
  text = document.querySelector(".text"),
  button = document.querySelector("#button");

passShow.addEventListener("click", () => {
  if (createPass.type === "password" && confirmPass.type === "password") {
    createPass.type = "text";
    confirmPass.type = "text";
    passShow.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    createPass.type = "password";
    confirmPass.type = "password";
    passShow.classList.replace("fa-eye", "fa-eye-slash");
  }
});

createPass.addEventListener("input", () => {
  let inputValue = createPass.value.trim();

  if (inputValue.length >= 8) {
    confirmPass.removeAttribute("disabled");
    button.removeAttribute("disabled");
    button.classList.add("active");
  } else {
    confirmPass.setAttribute("disabled", true);
    button.setAttribute("disabled", true);
    button.classList.remove("active");
    confirmPass.value = "";
    text.innerText="Enter at least 8 characters";
    text.style.color="#a6a6a6"
    errorIcon.style.display = "none";
  }
});

button.addEventListener("click", () => {
  if (createPass.value === confirmPass.value) {
    text.innerText = "Password matched";
    errorIcon.style.display = "none";
    text.style.color = "#4070f4";
  } else {
    text.innerText = "Password didn't matched";
    text.style.color = "#d93025";
    errorIcon.style.display = "block";
  }
});
