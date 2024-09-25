
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

        openModal('modal-one');
    }
});





// for feni donation 


document.getElementById('feni-donate-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const addMoneyF = getInputValueById('feni-donate-input');
    const feniBalance = getTextValueById('feni-balance');
    const accountBalanceFeni = getTextValueById('account-balance');

    const addMoneyFeni = Number(addMoneyF);

    if(isNaN(addMoneyFeni) || addMoneyFeni > accountBalanceFeni || addMoneyFeni <= 0 || addMoneyFeni === '') {
        alert('Invalid donation amount !');
        return;
    }
    else {
        let newFeniBalance = feniBalance + addMoneyFeni;
        document.getElementById('feni-balance').innerText = newFeniBalance;

        let newAccountBalanceFeni = accountBalanceFeni - addMoneyFeni;
        document.getElementById('account-balance').innerText = newAccountBalanceFeni;

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

        openModal('modal-two');
    }
});




// for  Quota Movement


document.getElementById('aid-donate-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const addMoneyAid = getInputValueById('aid-donate-input');
    const aidBalance = getTextValueById('aid-balance');
    const accountBalanceAid = getTextValueById('account-balance');

    if(isNaN(addMoneyAid) || addMoneyAid > accountBalanceAid || addMoneyAid <= 0 || addMoneyAid === '') {
        alert('Invalid donation amount !');
        return;
    }
    else {
        let newAidBalance = aidBalance + addMoneyAid;
        document.getElementById('aid-balance').innerText = newAidBalance;

        let newAccountBalanceAid = accountBalanceAid - addMoneyAid;
        document.getElementById('account-balance').innerText = newAccountBalanceAid;

        const div = document.createElement('div');
        div.classList.add('p-5', 'lg:p-8', 'border', 'border-[#1111111A]', 'rounded-[16px]');
        div.innerHTML = `
            <h3 class="text-xl font-bold">
                    ${addMoneyAid} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh
            </h3>
            <p id="date-time" class="mt-4 text-base font-light text-[#111111B3]">
            </p>
        `
        let newDate = new Date();
        div.querySelector('#date-time').innerText = "Date: " + newDate;

        document.getElementById('history-section').appendChild(div);

        openModal('modal-three');
    }
});