document.getElementById('check-btn').addEventListener('click', function() {
    const inputValue = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');
  
    // Check if the input is empty
    if (inputValue === '') {
      alert('Please input a value');
      return;
    }
  
    // Remove non-alphanumeric characters and convert to lowercase for palindrome check
    const cleanedInput = inputValue.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Check if the cleaned input is a palindrome
    if (cleanedInput === cleanedInput.split('').reverse().join('')) {
      resultElement.textContent = inputValue + ' is a palindrome';
    } else {
      resultElement.textContent = inputValue + ' is not a palindrome';
    }
  });
  