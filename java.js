//Select HTML elements
const themeButton = document.getElementById('theme-button');
const body = document.body;

//Listen for button click
themeButton.addEventListener('click', () => {
    //Toggle the 'dark-theme' class on the body
    body.classList.toggle('dark-mode');
});

//update button label dynamically
if (body.classList.contains('dark-mode')) {
    themeButton.textContent = 'Switch to Light Mode';
} else {
    themeButton.textContent = 'Switch to Dark Mode';
}