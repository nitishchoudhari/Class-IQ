document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
  
    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;
  
    const validFields = {
      email: false,
      password: false
    };
  
    function checkFormValidity() {
      const allValid = Object.values(validFields).every(val => val === true);
      submitBtn.disabled = !allValid;
    }
  
    email.addEventListener("blur", () => {
      const value = email.value.trim();
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        emailError.textContent = "";
        validFields.email = true;
      } else {
        emailError.textContent = "Please enter a valid email.";
        validFields.email = false;
      }
      checkFormValidity();
    });
  
  
    password.addEventListener("blur", () => {
      const value = password.value;
      if (value.length >= 6 && /\d/.test(value) && /[a-zA-Z]/.test(value)) {
        passwordError.textContent = "";
        validFields.password = true;
      } else {
        passwordError.textContent = "Password must be at least 6 characters and include letters and numbers.";
        validFields.password = false;
      }
      checkFormValidity();
    });
  });
  