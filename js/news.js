var slides = document.querySelectorAll(".sliders");

var index = 0;

function changeSlide() {
  if (index < 0) {
    index = slides.length - 1;
  }

  if (index > slides.length - 1) {
    index = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
  index++;
  setTimeout(changeSlide, 5000);
}

changeSlide();
