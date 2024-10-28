function submitName() {
    const nameInput = document.getElementById('nameInput').value;
    if (nameInput.trim() !== "") {
        localStorage.setItem('userName', nameInput);
        window.location.href = 'greeting.html';
    }
}
