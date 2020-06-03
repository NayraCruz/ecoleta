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

    citySelect.innerHTML = '<option value selected>Selecione a cidade</option>';
    citySelect.disabled = true;

    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
            }

            citySelect.disabled = false;
        })
}

document
    .querySelector('#uf')
    .addEventListener('change', getCities);

/* 
    Itens de coleta 
*/
// Pegar todos os .collect-item
const itemsToCollect = document.querySelectorAll(".collect-item");

// Percorre todos os itemsToCollect
for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem);
}

function handleSelectedItem(event) {
    const item = event.target;

    // Adiciona ou remove uma classe
    item.classList.toggle('-selected');
    
    // Procura o checkbox
    const checkboxItem = event.target.querySelector('.collect-item__checkbox');
    
    // Marca ou desmarca o checkbox dependendo se tem a classe .-selected
    if (item.classList.contains('-selected')) {
        checkboxItem.checked = true;
    } else {
        checkboxItem.checked = false;
    }
    // console.log(checkboxItem.checked); // Testa o checkbox

    
    

    const itemId = item.dataset.id;
}
