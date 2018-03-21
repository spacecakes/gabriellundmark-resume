// Load letter from txt file
let letter = document.getElementById('letter');
// function loadLetter() {
//     fetch('letter.txt')
//         .then(response => response.text())
//         .then(data => letter.innerHTML = '<p>' + data.replace(/(?:\r\n|\r|\n)/g, '</p><p>') + '</p>')
//         .catch(console.log('No letter.txt found.'));
// }

// loadLetter();

// Format line breaks as paragraphs
function formatLetter(txt) {
    return '<p>' + txt.replace(/(?:\r\n|\r|\n)/g, '</p><p>') + '</p>';
}

//

function uploadLetter(evt) {
    //Retrieve the first (and only!) File from the FileList object
    const file = evt.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            letter.innerHTML = formatLetter(e.target.result);

        };
        reader.readAsText(file);
    } else
        letter.innerHTML = '<p>Failed to load file</p>';

}

document.getElementById('fileinput').addEventListener('change', uploadLetter, false);

// Load AOS library
document.addEventListener('DOMContentLoaded', () => AOS.init({}));