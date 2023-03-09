const search = document.getElementById("search");
const countries = document.getElementById("countries");
const api_url = "https://restcountries.com/v3.1/all";

// Fetching data from API using Fetch API
async function getapi() {
  const response = await fetch(api_url);
  var data = await response.json();
  console.log(data);
  data.forEach((country) => {
    showCountries(country);
  });
}

getapi();

// Function to show all countries
function showCountries(data) {
  const country = document.createElement("div");
  country.classList.add("country");
  country.innerHTML = `
  <img src="${data.flags.svg}" alt="Afghanistan" />
  <h2>${data.name.common}</h2>
  <p><strong> Capital:</strong>${data.capital}</p>
  <p><strong> Region:</strong> ${data.region}</p>
  <p><strong>Population: </strong>${data.population}</p>
  `;

  countries.appendChild(country);
}

// For Manual Search
search.addEventListener("input", (e) => {
  const searchValue = e.target.value;
  const country = document.querySelectorAll(".country");
  country.forEach((element) => {
    if (element.innerText.toLowerCase().includes(searchValue.toLowerCase())) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
