const openPopupBtn = document.getElementById('about');
        const popup = document.getElementById('popup');
        const closePopupBtn = document.getElementById('closePopup');

// Open the popup when the button is clicked
        openPopupBtn.addEventListener('click', () => {
        popup.style.display = 'flex'; // Show the popup (flex to center content)
});

// Close the popup when the close button is clicked
        closePopupBtn.addEventListener('click', () => {
        popup.style.display = 'none'; // Hide the popup
});