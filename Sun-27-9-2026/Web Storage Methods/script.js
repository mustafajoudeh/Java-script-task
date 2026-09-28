// ==========================================
// Exercise 13 — Web Storage
// ==========================================

// Save data
function saveData() {
  localStorage.setItem("name", "Ahmad");
  localStorage.setItem("age", "25");

  displayStorage();
}

// Get data
function getData() {
  const name = localStorage.getItem("name");

  console.log(name);

  displayStorage();
}

// Remove one item
function removeData() {
  localStorage.removeItem("age");

  displayStorage();
}

// Remove all items
function clearStorage() {
  localStorage.clear();

  displayStorage();
}

// Display storage contents
function displayStorage() {
  const output = document.getElementById("output");

  output.innerHTML = "";

  // Number of stored items
  output.innerHTML += `<p>Items: ${localStorage.length}</p>`;

  // Get every stored key
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    output.innerHTML += `
            <p>${key}: ${value}</p>
        `;
  }
}
