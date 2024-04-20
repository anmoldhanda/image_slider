const images_slider = document.querySelector(".image-slider");
const slides = document.querySelectorAll(".slides");
const previous_slide_icon = document.getElementById("previous-slide-icon");
const next_slide_icon = document.getElementById("next-slide-icon");
let current_slide_index = 0;

setInterval(() => {
  // =============================== it will execute the previous & next slide function after every 3 seconds & increment the current slide index ===============================
  change_images();
}, 3000);

const change_images = () => {
  current_slide_index++;
  previous_slide();
  next_slide();
}

const previous_slide = () => {
  if (current_slide_index === 0) {
    // =============================== if the current slide index is at 0th position when the previous icon is clicked then return the last slide ===============================
    current_slide_index = slides.length - 1;
  } else {
    // =============================== else if the current slide index isn't at 0th position then decrement the current slide index's slides with (-= 1) to get the previous slide and update the image slider container containing slide's position with the help of current slide index ===============================
    current_slide_index -= 1;
  }
  console.log("previous");
  images_slider.style.transform = `translateX(-${current_slide_index * 100}%)`;
};

const next_slide = () => {
  if (current_slide_index === slides.length - 1) {
    // =============================== if the current slide index is at the last index position when the next icon is clicked then return the first slide ===============================
    current_slide_index = 0;
  } else {
    // =============================== else if the current slide index isn't at the last index position then increment the current slide index with (+= 1) to get the next slide and update the image slider container containing slide's position with the help of current slide index ===============================
    current_slide_index += 1;
  }
  images_slider.style.transform = `translateX(-${current_slide_index * 100}%)`;
  console.log("next");
};

previous_slide_icon.addEventListener("click", previous_slide);
next_slide_icon.addEventListener("click", next_slide);