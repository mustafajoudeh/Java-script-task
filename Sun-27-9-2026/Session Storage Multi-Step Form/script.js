let currentStep = Number(sessionStorage.getItem("currentStep")) || 1;

// Show the correct step
function showStep() {
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "none";

  document.getElementById("step" + currentStep).style.display = "block";

  // Show review information on step 3
  if (currentStep === 3) {
    showReview();
  }

  // Save current step
  sessionStorage.setItem("currentStep", currentStep);
}

// Save form data
function saveData() {
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    university: document.getElementById("university").value,
    major: document.getElementById("major").value,
  };

  sessionStorage.setItem("formData", JSON.stringify(data));
}

// Load saved data
function loadData() {
  const savedData = sessionStorage.getItem("formData");

  if (savedData) {
    const data = JSON.parse(savedData);

    document.getElementById("name").value = data.name || "";
    document.getElementById("email").value = data.email || "";
    document.getElementById("university").value = data.university || "";
    document.getElementById("major").value = data.major || "";
  }
}

// Go to next step
function nextStep() {
  saveData();

  if (currentStep < 3) {
    currentStep++;
    showStep();
  }
}

// Go to previous step
function previousStep() {
  saveData();

  if (currentStep > 1) {
    currentStep--;
    showStep();
  }
}

// Show review information
function showReview() {
  const savedData = sessionStorage.getItem("formData");

  if (savedData) {
    const data = JSON.parse(savedData);

    document.getElementById("review").innerHTML = `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>University:</strong> ${data.university}</p>
      <p><strong>Major:</strong> ${data.major}</p>
    `;
  }
}

// Confirm registration
function confirmForm() {
  saveData();

  alert("Registration completed successfully!");

  sessionStorage.removeItem("formData");
  sessionStorage.removeItem("currentStep");

  location.reload();
}

// Load saved data when page opens
loadData();

// Restore the last step
showStep();
