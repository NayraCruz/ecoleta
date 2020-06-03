function populateUFs() {
    const ufSelect = document.querySelector('#uf');
    
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(res => res.json())
        .then( states => {
            for ( const state of states ) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}

populateUFs();

function getCities(event) {
    const citySelect = document.querySelector('#city');
    const stateInput = document.querySelector('#state');
    
    const ufValue = event.target.value;
    
    const indexOfSelectedState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectedState].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`;
            }

            citySelect.disabled = false;
        })
}

document
    .querySelector('#uf')
    .addEventListener('change', getCities);
