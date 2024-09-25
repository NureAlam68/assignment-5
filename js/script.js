
//for noakhali donation


document.getElementById('noakhali-donate-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const addMoney = getInputValueById('noakhali-donate-input');
    const noakhaliBalance = getTextValueById('noakhali-balance');
    const accountBalance = getTextValueById('account-balance');

    if(isNaN(addMoney) || addMoney > accountBalance || addMoney <= 0 || addMoney === '') {
        alert('Invalid donation amount !');
        return;
    }
    else {
        let newNoakhaliBalance = noakhaliBalance + addMoney;
        document.getElementById('noakhali-balance').innerText = newNoakhaliBalance;

        let newAccountBalance = accountBalance - addMoney;
        document.getElementById('account-balance').innerText = newAccountBalance;

        const div = document.createElement('div');
        div.classList.add('p-5', 'lg:p-8', 'border', 'border-[#1111111A]', 'rounded-[16px]');
        div.innerHTML = `
            <h3 class="text-xl font-bold">
                    ${addMoney} Taka is Donated for famine-2024 at Noakhali, Bangladesh
            </h3>
            <p id="date-time" class="mt-4 text-base font-light text-[#111111B3]">
            </p>
        `
        let newDate = new Date();
        div.querySelector('#date-time').innerText = "Date: " + newDate;

        document.getElementById('history-section').appendChild(div);
    }
});





// for feni donation 


document.getElementById('feni-donate-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const addMoneyFeni = getInputValueById('feni-donate-input');
    const feniBalance = getTextValueById('feni-balance');
    const accountBalanceF = getTextValueById('account-balance');

    if(isNaN(addMoneyFeni) || addMoneyFeni > accountBalanceF || addMoneyFeni <= 0 || addMoneyFeni === '') {
        alert('Invalid donation amount !');
        return;
    }
    else {
        let newFeniBalance = feniBalance + addMoneyFeni;
        document.getElementById('feni-balance').innerText = newFeniBalance;

        let newAccountBalanceF = accountBalanceF - addMoneyFeni;
        document.getElementById('account-balance').innerText = newAccountBalanceF;

        const div = document.createElement('div');
        div.classList.add('p-5', 'lg:p-8', 'border', 'border-[#1111111A]', 'rounded-[16px]');
        div.innerHTML = `
            <h3 class="text-xl font-bold">
                    ${addMoneyFeni} Taka is Donated for famine-2024 at Feni, Bangladesh
            </h3>
            <p id="date-time" class="mt-4 text-base font-light text-[#111111B3]">
            </p>
        `
        let newDate = new Date();
        div.querySelector('#date-time').innerText = "Date: " + newDate;

        document.getElementById('history-section').appendChild(div);
    }
})