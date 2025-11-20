const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.style.color = '#007BFF'); // reset all
        link.style.color = '#FF4500'; // highlight clicked
    });
});
