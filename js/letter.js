// Load letter from txt file
const letter = document.getElementById('letter');

// Format line breaks as paragraphs
const formatLetter = txt => `<p>${txt.replace(/(?:\r\n|\r|\n)/g, '</p><p>')}</p>`;

// Upload text file
function uploadLetter(evt) {
  const file = evt.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = e => (letter.innerHTML = formatLetter(e.target.result));
    reader.readAsText(file);
  } else letter.innerHTML = '<p>Failed to load file</p>';
}

// Listen for file upload
document.getElementById('letter-upload').addEventListener('change', uploadLetter, false);
