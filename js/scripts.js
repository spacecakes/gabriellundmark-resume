// Load letter from txt file
let letter = document.getElementById('letter');
function loadLetter() {
    fetch('letter.txt')
        .then(response => response.text())
        .then(data => letter.innerHTML = '<p>' + data.replace(/(?:\r\n|\r|\n)/g, '</p><p>') + '</p>')
        .catch(console.log('No letter.txt found.'));
}

loadLetter();

// Load AOS library
document.addEventListener('DOMContentLoaded', () => AOS.init({}));