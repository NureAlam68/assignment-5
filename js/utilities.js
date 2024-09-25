
// function for change section

function showSectionById(id) {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')
}


// function for get input value

function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = Number(inputValue);
    return inputNumber;
}


// function for get text value

function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = Number(textValue);
    return textNumber;
}


//show modal

function openModal(id) {
    document.getElementById(id).showModal();
}




// for clear input value

function clearInputFields(id) {
    document.getElementById(id).value = '';
}