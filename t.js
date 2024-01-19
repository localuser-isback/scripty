// Check if the 'g' and 'k' keys are pressed
document.addEventListener('keydown', function(event) {
  if (event.key === 'g') {
    // Set a flag when 'g' is pressed
    gKeyPressed = true;
  } else if (event.key === 'k' && gKeyPressed) {
    // Check if 'k' is pressed after 'g'
    gKeyPressed = false;
    
    // Create an HTML page with an iframe
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0, 0, 0, 0.7)';
    overlay.style.zIndex = '999';
    
    var iframe = document.createElement('iframe');
    iframe.src = 'https://example.com'; // Replace with your desired URL
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    
    overlay.appendChild(iframe);
    document.body.appendChild(overlay);
    
    // Close the overlay when 'Esc' is pressed
    document.addEventListener('keydown', function(closeEvent) {
      if (closeEvent.key === 'Escape') {
        document.body.removeChild(overlay);
      }
    });
  }
});

// Reset the flag when any key is released
document.addEventListener('keyup', function() {
  gKeyPressed = false;
});
