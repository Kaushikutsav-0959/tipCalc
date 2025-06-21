'use strict';

document.querySelector('.calculate-btn').addEventListener('click', function () {
    
    let bill = Number(document.querySelector('.bill-input').value);
    let tip = ((Number(document.querySelector('.tip-input').value))/100);
    let tipAmt = bill * tip;

    document.querySelector('.tip-amount').textContent = bill * tip;
    document.querySelector('.total-amount').textContent = bill + tipAmt;
});

document.querySelector('.toggle-btn').addEventListener('click', function () {
    
    let darkTheme = document.querySelector('body').classList.toggle('dark-theme');
        document.querySelector('body').classList.remove('light-theme');
    let lightMode = document.querySelector('.toggle-btn').textContent = 'Light Mode';
    let darkMode = document.querySelector('.toggle-btn').textContent = 'Dark Mode';

    document.querySelector('.toggle-btn').textContent = darkTheme ? lightMode : darkMode;

});
