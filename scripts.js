document.addEventListener('DOMContentLoaded', function () {
    const hiringRadioButton = document.getElementById('hiring');
    const hourlyRateContainer = document.getElementById('hourly-rate-container');
    const hourlyRateInput = document.getElementById('hourly-rate');

    hiringRadioButton.addEventListener('change', function () {
        if (hiringRadioButton.checked) {
            hourlyRateContainer.style.display = 'block';
            hourlyRateInput.setAttribute('required', '');
        } else {
            hourlyRateContainer.style.display = 'none';
            hourlyRateInput.removeAttribute('required');
        }
    });

    const otherRadioButtons = document.querySelectorAll('input[type="radio"]:not(#hiring)');
    otherRadioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('change', function () {
            if (radioButton.checked) {
                hourlyRateContainer.style.display = 'none';
                hourlyRateInput.removeAttribute('required');
            }
        });
    });
});

function validateForm(event) {

    return true;
}
