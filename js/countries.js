const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = (countries) => {
    const countryDiv = document.getElementById('countries');
    countries.forEach(country => {
        //console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
         <h3>${country.name}</h3>
         <h4>capital: ${country.capital}</h4>
         <button onclick="loadCountryByName('${country.name}')">See Details</button>
        `;
        countryDiv.appendChild(div);
    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaCountryDetail(data[0]));
}

const displaCountryDetail = country => {
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h5>region: ${country.region}</h5>
        <h5>population: ${country.population}</h5>
         <img width="100px" src="${country.flag}">
    `
}
