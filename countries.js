const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => displayCountries(data));
}

loadCountries();

const displayCountries = (countries) => {
    const countryList = document.getElementById('country-list');

    countries.forEach(country => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name}')">Details</button>
        `;
        countryList.appendChild(div);
    });

}

const loadCountryByName = (name) => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
        .then(response => response.json())
        .then(data => countryDetails(data[0]));
}

const countryDetails = (country) => {
    console.log(country);
    const countryDetailsContainer = document.getElementById('country-details-container');
    countryDetailsContainer.innerHTML = `
        <h4>Country: ${country.name}</h4>
        <p>Population: ${country.population}</p>
        <p>Capital: ${country.capital}</p>
        <p>Region: ${country.region}</p>
        <p>Area: ${country.area} Sq km.</p>
        <img width="200px" src="${country.flag}">
    `;

}