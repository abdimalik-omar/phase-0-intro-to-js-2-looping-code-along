// Function 1: writeCards
function writeCards(names, event) {
    let messages = []; // Step 1: Create an empty array to store messages.
    
    for (let i = 0; i < names.length; i++) { // Step 2: Loop through the names array.
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`); // Step 3: Create a custom message and add it to the array.
    }
    
    return messages; // Step 4: Return the array of messages.
  }
  
  // Function 2: countDown
  function countDown(number) {
    while (number >= 0) { // Step 1: Loop while the number is 0 or higher.
      console.log(number); // Step 2: Log the current number.
      number--; // Step 3: Decrease the number by 1.
    }
  }
  