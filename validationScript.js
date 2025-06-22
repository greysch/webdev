// JavaScript code for form validation

// Wait until the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the form element by its ID
  const form = document.getElementById("myForm");
  // Retrieve the input field element by its ID
  const input = document.getElementById("userInput");
  // Retrieve the element where feedback messages will be displayed
  const message = document.getElementById("message");

  // Add an event listener that runs when the form is submitted
  form.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get and trim the input value to remove leading/trailing whitespace
    const value = input.value.trim();

    // Define the regular expression for alphanumeric values only
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;

    // Check if the input matches the alphanumeric pattern
    if (alphanumericRegex.test(value)) {
      // If input is valid, display success message in green
      message.style.color = "green";
      message.textContent = "Success! Your input is valid.";
      // Here, the form would be submitted if backend were enabled
    } else {
      // If input is invalid, show error message in red
      message.style.color = "red";
      message.textContent = "Error: Please enter only alphanumeric characters.";
      // Prevent submission since the input is invalid
    }
  });
});