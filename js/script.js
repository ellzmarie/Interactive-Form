// The "Name" field in focus section
window.onload = function () {
    document.getElementById('name').focus();
};

// The "Job Role" section
const otherJobRole = document.getElementById('other-job-role');
otherJobRole.style.display = 'none';

const jobTitle = document.getElementById('title');
jobTitle.addEventListener('change', e => {
    (e.target.value === 'other')? otherJobRole.style.display = '' : otherJobRole.style.display = 'none';
});

// "T-Shirt Info" section
const designTheme = document.getElementById('design');
const colorTheme = document.getElementById('color');
const colorThemeOption = colorTheme.children;
colorTheme.disabled = true;

designTheme.addEventListener ('change', e=> {
    colorTheme.disabled = false;
    for (let i=0; i < colorThemeOption.length; i++){
        const selectTheme = e.target.value;
        const themeOption = colorThemeOption[i].getAttribute('data-theme');
        if (selectTheme === themeOption) {
            colorOption[i].hidden = false;
            colorOption[i].setAttribute('selected', true);
        } else {
            colorOption[i].hidden = true;
            colorOption[i].removeAttribute('selected');
        }
    }
});

// "Register for Activities" section
const activitiesSelected = document.getElementById('activities-box');
const totalAmount = document.getElementById('activities-cost');
const allSelected = document.querySelectorAll('input[type="checkbox"]');
let allCosts = 0;

activitiesSelected.addEventListener('change', e => {
    const costSelected = parsetInt(e.target.getAttribute('data-cost'));
    (e.target.checked)? allCosts += costSelected : allCosts -= costSelected;
    totalAmount.textContent = `Total: $${allCosts}`;

    const dayTime = e.target.getAttribute('data-day-and-time');
    const isChecked = e.target.checked;

    if (isChecked) {
        for (let i=0; i < allSelected.length; i++) {
            if (e.target !== allSelected[i] && dayTime === allSelected[i].getAttribute('data-day-and-time')) {
                allSelected[i].disabled = true;
                allSelected[i].parentElement.classList.add('disabled');
            }
        }
    } else {
        for (let i=0; i < allSelected.length; i++) {
            if (dayTime === allSelected[i].getAttribute('data-day-and-time')) {
                allSelected[i].disabled = false; 
                allSelected[i].parentElement.classList.remove('disabled');
            }
        }
    }
});

// "Payment Info" section

