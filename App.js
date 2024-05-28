
  // Execute when DOM content is loaded
  document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    container.classList.add('animate'); // Add animation class to container
  });

  // Get elements and initialize count
  const counterElement = document.getElementById('counter');
  const incrementButton = document.getElementById('incrementButton');
  const decrementButton = document.getElementById('decrementButton');
  const resetButton = document.getElementById('resetButton');
  const darkModeButton = document.getElementById('darkModeButton');
  let count = 0;
  counterElement.textContent = count; // Initialize counter text

  // Function to update counter
  function updateCounter() {
    counterElement.textContent = count; // Update counter text
    counterElement.classList.add('animate'); // Add animation class
   
    setTimeout(() => {
      counterElement.classList.remove('animate'); // Remove animation class after a delay
    }, 200);
  }

  // Event listener for increment button click
  incrementButton.addEventListener('click', function() {
    count++; // Increment count
    updateCounter(); // Update counter display
  });

  // Event listener for decrement button click
  decrementButton.addEventListener('click', function() {
    if (count > 0) {
      count--; // Decrement count if greater than 0
      updateCounter(); // Update counter display
    }
  });

  // Event listener for reset button click
  resetButton.addEventListener('click', function() {
    count = 0; // Reset count to 0
    updateCounter(); // Update counter display
    // Display alert
    alert('Counter has been reset!');
  });

  // Event listener for dark mode toggle button click
  darkModeButton.addEventListener('click', function() {
    // Toggle dark mode class on body
    document.body.classList.toggle('dark-mode');
  });
