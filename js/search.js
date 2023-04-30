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