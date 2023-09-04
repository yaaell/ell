const lastUpdatedElement = document.getElementById("last-updated");
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString("en-US", options);
lastUpdatedElement.textContent = formattedDate;

var audio = document.getElementById("myAudio");
  audio.autoplay = true;