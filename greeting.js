document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('userName');
    document.getElementById('name').textContent = userName || 'Guest';
});

function showMessage() {
    const specialMessage = document.getElementById('specialMessage');
    specialMessage.textContent = "प्रिय " + (localStorage.getItem('userName') || 'मित्र') + ", इस दिवाली का प्रकाश आपके जीवन को खुशियों और समृद्धि से भर दे। इस पर्व का सौंदर्य आपके दिल में शांति और संतोष लेकर आए। आपको और आपके परिवार को दीपावली की हार्दिक शुभकामनाएँ!";
    specialMessage.classList.remove('hidden');
    specialMessage.classList.add('fade-in');
    document.getElementById('sweetButton').classList.remove('hidden');
}

function goToSweetPage() {
    window.location.href = 'sweet.html';
}
