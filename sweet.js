function showSweet(sweet) {
    const sweetImage = document.getElementById('sweetImage');
    const sweetMessage = document.getElementById('sweetMessage');
    const sweetImageContainer = document.getElementById('sweetImageContainer');
    let sweetName = '';
    let sweetSrc = '';

    switch(sweet) {
        case 'gulab_jamun':
            sweetName = 'गुलाब जामुन';
            sweetSrc = 'gulab-jamun.jpg';
            break;
        case 'laddu':
            sweetName = 'लड्डू';
            sweetSrc = 'laddu.jpg';
            break;
        case 'jalebi':
            sweetName = 'जलेबी';
            sweetSrc = 'jalebi.jpg';
            break;
        
        default:
            break;
    }

    sweetImage.src = sweetSrc;
    sweetMessage.textContent = `ये लीजिए आपकी पसंदीदा ${sweetName}, खा के बताइएगा कैसी लगी। 😊 शुभ दीपावली!`;
    sweetImageContainer.classList.remove('hidden');
    sweetImageContainer.classList.add('fade-in');
}
