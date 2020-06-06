function populateUFs() {
    const ufSelect = document.querySelector('#uf');

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(res => res.json())
        .then(states => {
            for (const state of states) {
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
    /* Clique na div */
    item.addEventListener("click", handleSelectedItem);

    // Procura o checkbox
    let checkboxItem = item.querySelector('.collect-item__checkbox');
    checkboxItem.addEventListener("focus", setFocus);
    checkboxItem.addEventListener("blur", unsetFocus);
}

// Input escondido
const collectedItems = document.querySelector('input[name=items]');

let selectedItems = [];

function setFocus() {
    // Procura o checkbox
    let checkboxItem = event.target.querySelector('.collect-item__checkbox');
    checkboxItem = checkboxItem ? checkboxItem : event.target;

    checkboxItem.parentNode.classList.add('-focused');
}

function unsetFocus() {
    // Procura o checkbox
    let checkboxItem = event.target.querySelector('.collect-item__checkbox');
    checkboxItem = checkboxItem ? checkboxItem : event.target;

    checkboxItem.parentNode.classList.remove('-focused');
}

function handleSelectedItem(event) {
    let item = event.target;
    item = item.classList.contains('collect-item') ? item : event.target.parentNode;
    // Adiciona ou remove uma classe
    item.classList.toggle('-selected');


    // Procura o checkbox
    let checkboxItem = event.target.querySelector('.collect-item__checkbox');
    checkboxItem = checkboxItem ? checkboxItem : event.target;
    checkboxItem.focus();


    // Marca ou desmarca o checkbox dependendo se tem a classe .-selected
    if (item.classList.contains('-selected')) {
        checkboxItem.checked = true;
    } else {
        checkboxItem.checked = false;
    }

    //console.log(checkboxItem.checked); // Testa o checkbox marcado/desmarcado

    
    // Verificar se existem itens selecionados, se sim
    /* pegar os itens selecionados */
    const itemValue = checkboxItem.value;

    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemValue; // Isso será true ou false
        return itemFound;
    });

    // Se já estiver selecionado, tirar da seleção
    if (alreadySelected >= 0) {
        // Tirar da seleção
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemValue;
            return itemIsDifferent;
        });

        selectedItems = filteredItems;
    } else {
        // Se não estiver selecionado, adicionar à seleção
        selectedItems.push(itemValue);
    }
    //console.log(selectedItems);

    // Atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems;
}
