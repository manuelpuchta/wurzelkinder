const submitButton = document.getElementById("form-submit");
if (submitButton) {
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Hallo :)");
  });
}
