function makeStory() {
  const file = document.getElementById('photo').files[0];
  const quote = document.getElementById('quote').value;
  if (!file || !quote) {
    alert('Загрузи фото и введи цитату!');
    return;
  }
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('story').style.display = 'block';
    document.getElementById('storyImg').src = e.target.result;
    document.getElementById('storyQuote').innerText = quote;
  };
  reader.readAsDataURL(file);
}

function downloadStory() {
  const story = document.getElementById('story');
  if (story.style.display === 'none') {
    alert('Сначала собери сторис!');
    return;
  }
  html2canvas(story).then(canvas => {
    const link = document.createElement('a');
    link.download = 'story.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}
