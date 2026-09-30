// Create a cookie
function setCookie(name, value, days) {
  const date = new Date();

  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Read a cookie by name
function getCookie(name) {
  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    cookie = cookie.trim();

    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }

  return null;
}

// Delete a cookie
function deleteCookie(name) {
  setCookie(name, "", -1);
}

// Save theme preference
function setTheme(theme) {
  setCookie("theme", theme, 30);

  displayPreferences();
}

// Save language preference
function setLanguage(language) {
  setCookie("language", language, 30);

  displayPreferences();
}

// Display saved preferences
function displayPreferences() {
  const theme = getCookie("theme");
  const language = getCookie("language");

  document.getElementById("preferences").innerHTML = `
    <p>Theme: ${theme || "Not set"}</p>
    <p>Language: ${language || "Not set"}</p>
  `;
}

// Display preferences when page loads
displayPreferences();
