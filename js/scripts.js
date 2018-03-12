// load letter from txt file
function loadLetter() {
    const xhr = new XMLHttpRequest();
    const letter = document.getElementById('letter');
    xhr.open('GET', 'letter.txt', true);

    xhr.onload = function () {
        if (this.status === 200)
            letter.innerHTML = '<p>' + this.responseText.replace(/(?:\r\n|\r|\n)/g, '</p><p>') + '</p>';
        else
            letter.innerHTML = '<p>(Ladda upp letter.txt för att generera personligt brev)</p>';
    };
    xhr.send();
}

loadLetter();