const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');

// for change section

donationBtn.addEventListener('click', function() {
    showSectionById('donation-section');

    donationBtn.classList.remove('bg-white');
    donationBtn.classList.add('bg-color-one');
    historyBtn.classList.remove('bg-color-one');
    historyBtn.classList.add('bg-white');
});


historyBtn.addEventListener('click', function() {
    showSectionById('history-section');

    historyBtn.classList.remove('bg-white');
    historyBtn.classList.add('bg-color-one');
    donationBtn.classList.remove('bg-color-one');
    donationBtn.classList.add('bg-white');
});


document.getElementById('clear-input').addEventListener('click', function() {
    clearInputFields('noakhali-donate-input');
});


document.getElementById('clear-input-feni').addEventListener('click', function() {
    clearInputFields('feni-donate-input');
});


document.getElementById('clear-input-aid').addEventListener('click', function() {
    clearInputFields('aid-donate-input')
})