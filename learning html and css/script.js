document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      document.getElementById(
        "responseMessage"
      ).innerText = `Thank you, ${name}! We will get back to you soon.`;
      document.getElementById("contactForm").reset(); // Reset form
    } else {
      document.getElementById("responseMessage").innerText =
        "Please fill in all fields.";
      document.getElementById("responseMessage").style.color = "#FF6347"; // Red color for error
    }
  });
