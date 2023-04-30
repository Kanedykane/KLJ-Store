// Select all elements with the class "slider"
const sliders = document.querySelectorAll(".slider");

// For each slider element...
sliders.forEach(slider => {
  // Find the container, prevButton, nextButton, products, and the number of products
  const container = slider.querySelector(".slider-container");
  const prevButton = slider.querySelector(".slider-button-prev");
  const nextButton = slider.querySelector(".slider-button-next");
  const products = container.querySelectorAll(".product");
  const numProducts = products.length;
  let slideIndex = 0;

  // Function to show the current slides
  function showSlides() {
    // Hide all products
    for (let i = 0; i < numProducts; i++) {
      products[i].style.display = "none";
    }

    // Show the 6 products starting from the slide index
    for (let i = slideIndex; i < slideIndex + 6 && i < numProducts; i++) {
      products[i].style.display = "block";
    }
  }

  // Show the initial slides
  showSlides();

  // Add event listener for prevButton click
  prevButton.addEventListener("click", () => {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = 0;
    }
    showSlides();
  });

  // Add event listener for nextButton click
  nextButton.addEventListener("click", () => {
    slideIndex++;
    if (slideIndex > numProducts - 6) {
      slideIndex = numProducts - 6;
    }
    showSlides();
  });
});

window.onload = function() {
  const products = document.querySelectorAll('.product');
  const preview = document.querySelector('.preview');
  const overlay = document.querySelector('.overlay');

  products.forEach(product => {
    product.addEventListener('click', () => {
      const target = product.dataset.name;
      preview.setAttribute('data-target', target);
      preview.style.display = 'block';
      overlay.style.display = 'block'; /* Show the overlay when the popup is displayed */
    });
  });

  preview.querySelector('.fa-times').addEventListener('click', () => {
    preview.style.display = 'none';
    overlay.style.display = 'none'; /* Hide the overlay when the popup is closed */
  });
}