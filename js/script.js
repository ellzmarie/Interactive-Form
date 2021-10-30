// The "Name" field in focus 
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

