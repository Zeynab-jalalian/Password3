const passShow = document.querySelector(".show"),
  createPass = document.getElementById("createPass"),
  confirmPass = document.getElementById("confirmPass");

passShow.addEventListener("click", () => {
  if (createPass.type === "password" && confirmPass.type === "password") {
    createPass.type = "text";
    confirmPass.type = "text";
    passShow.classList.replace("fa-eye-slash","fa-eye");
  } else {
    createPass.type = "password";
    confirmPass.type = "password";
    passShow.classList.replace("fa-eye","fa-eye-slash");
  }
});
