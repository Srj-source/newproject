   function checkOrientation() {
    const overlay = document.getElementById('portraitOverlay');
    
    // Show overlay if screen is in portrait mode
    if (window.innerHeight > window.innerWidth) {
      overlay.classList.remove('hidden');
      
      // Hide the overlay after 3 seconds
      setTimeout(() => {
        overlay.classList.add('hidden');
      }, 4000);
    } else {
      // Hide the overlay if in landscape mode
      overlay.classList.add('hidden');
    }
  }

  // Check orientation when the page loads
  window.addEventListener('load', checkOrientation);

  // Check orientation when the screen is resized
  window.addEventListener('resize', checkOrientation);