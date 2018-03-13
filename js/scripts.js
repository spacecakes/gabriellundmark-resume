// Load letter from txt file

// function loadLetter() {
//     const xhr = new XMLHttpRequest();
//     const letter = document.getElementById('letter');
//     xhr.open('GET', 'letter.txt', true);

//     xhr.onload = function () {
//         if (this.status === 200)
//             letter.innerHTML = '<p>' + this.responseText.replace(/(?:\r\n|\r|\n)/g, '</p><p>') + '</p>';
//         else
//             letter.innerHTML = '<p>(>Ladda upp letter.txt för att generera personligt brev)</p>';
//     };
//     xhr.send();
// }

// Rewritten using fetch
let letter = document.getElementById('letter');
function loadLetter() {
    fetch('letter.txt')
        .then(response => response.text())
        .then(data => letter.innerHTML = '<p>' + data.replace(/(?:\r\n|\r|\n)/g, '</p><p>') + '</p>');
}

loadLetter();

