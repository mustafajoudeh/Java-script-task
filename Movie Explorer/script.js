// =========================================================
// MOVIE EXPLORER
// TMDB API + Fetch API
// =========================================================

// =========================================================
// 1. DOM ELEMENTS
// =========================================================

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

const moviesContainer = document.getElementById("moviesContainer");

const loading = document.getElementById("loading");
const error = document.getElementById("error");
const noResults = document.getElementById("noResults");

// =========================================================
// 2. TMDB API CONFIGURATION
// =========================================================

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDA1ZDlmNDhmNDc3YzMwMzEyMzYwMDhhNTU4Y2JmZCIsIm5iZiI6MTc5MDcwNzQ2Ny42MDgsInN1YiI6IjZhYmMwNzBiNmM4NGI4YjMyNjM0NGM5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jLFdH2fKKM7TuPtfzjvZyZoLqfuguDVrRifDIzFfTBg";

const BASE_URL = "https://api.themoviedb.org/3";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// =========================================================
// 3. API REQUEST OPTIONS
// =========================================================

const API_OPTIONS = {
  method: "GET",

  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

// =========================================================
// 4. LOADING / ERROR / NO RESULTS
// =========================================================

function showLoading() {
  loading.classList.remove("hidden");
}

function hideLoading() {
  loading.classList.add("hidden");
}

function showError() {
  error.classList.remove("hidden");
}

function hideError() {
  error.classList.add("hidden");
}

function showNoResults() {
  noResults.classList.remove("hidden");
}

function hideNoResults() {
  noResults.classList.add("hidden");
}

// =========================================================
// 5. DISPLAY MOVIES
// =========================================================

function displayMovies(movies) {
  // Clear old movies
  moviesContainer.innerHTML = "";

  // Check if there are no movies
  if (!movies || movies.length === 0) {
    showNoResults();
    return;
  }

  hideNoResults();

  // Loop through movies
  movies.forEach(function (movie) {
    const movieCard = document.createElement("article");

    movieCard.classList.add("movie-card");

    // Poster
    const poster = movie.poster_path
      ? `${IMAGE_BASE_URL}${movie.poster_path}`
      : "";

    // Release date
    const releaseDate = movie.release_date ? movie.release_date : "Unknown";

    // Rating
    const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";

    movieCard.innerHTML = `

            ${
              poster
                ? `
                        <img
                            src="${poster}"
                            alt="${movie.title}"
                        >
                    `
                : `
                        <div class="no-poster">
                            No Poster
                        </div>
                    `
            }


            <div class="movie-info">

                <h3 class="movie-title">
                    ${movie.title}
                </h3>


                <div class="movie-meta">

                    <span>
                        ${releaseDate}
                    </span>

                    <span class="movie-rating">
                        ⭐ ${rating}
                    </span>

                </div>


                <p class="movie-overview">
                    ${movie.overview || "No description available."}
                </p>

            </div>

        `;

    moviesContainer.appendChild(movieCard);
  });
}

// =========================================================
// 6. GET POPULAR MOVIES
// =========================================================

async function getPopularMovies() {
  showLoading();

  hideError();

  hideNoResults();

  try {
    const url = `${BASE_URL}/movie/popular`;

    const response = await fetch(url, API_OPTIONS);

    // Check HTTP response
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    // Convert response to JSON
    const data = await response.json();

    console.log("Popular Movies:", data);

    // Display movies
    displayMovies(data.results);
  } catch (err) {
    console.error("Error:", err);

    showError();
  } finally {
    hideLoading();
  }
}

// =========================================================
// 7. SEARCH MOVIES
// =========================================================

async function searchMovies(query) {
  showLoading();

  hideError();

  hideNoResults();

  try {
    const url = `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`;

    const response = await fetch(url, API_OPTIONS);

    // Check HTTP response
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    // Convert response to JSON
    const data = await response.json();

    console.log("Search Results:", data);

    // Display search results
    displayMovies(data.results);
  } catch (err) {
    console.error("Search Error:", err);

    showError();
  } finally {
    hideLoading();
  }
}

// =========================================================
// 8. SEARCH FORM EVENT
// =========================================================

searchForm.addEventListener("submit", function (event) {
  // Prevent page reload
  event.preventDefault();

  // Get search value
  const searchValue = searchInput.value.trim();

  // Check empty search
  if (searchValue === "") {
    getPopularMovies();

    return;
  }

  // Search movies
  searchMovies(searchValue);
});

// =========================================================
// 9. LOAD MOVIES WHEN PAGE STARTS
// =========================================================

getPopularMovies();
